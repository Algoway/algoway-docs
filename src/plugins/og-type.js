const fs = require('fs');
const path = require('path');

function walk(dir, result = []) {
  if (!fs.existsSync(dir)) return result;

  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      walk(full, result);
    } else if (full.endsWith('.html')) {
      result.push(full);
    }
  }

  return result;
}

module.exports = function algowayOgTypePlugin() {
  return {
    name: 'algoway-og-type-plugin',

    async postBuild({outDir}) {
      let patched = 0;

      for (const file of walk(outDir)) {
        let html = fs.readFileSync(file, 'utf8');

        if (html.includes('og:type')) {
          continue;
        }

        if (!html.includes('</head>')) {
          continue;
        }

        html = html.replace(
          '</head>',
          '<meta property="og:type" content="website">\n</head>'
        );

        fs.writeFileSync(file, html, 'utf8');
        patched++;
      }

      console.log(`[algoway-og-type-plugin] patched ${patched} html files`);
    },
  };
};
