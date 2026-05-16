#!/bin/bash

LOG="/var/log/algoway-docs-publish.log"
DOCS_DIR="/opt/algoway-docs"
COMPOSE_DIR="/opt/tradingfew"
LIVE_URL="https://docs.algoway.trade/"
TEST_PAGE="https://docs.algoway.trade/docs/metatrader-5/tradingview-to-mt5/"

log_msg() {
  echo "$(date '+%Y-%m-%d %H:%M:%S') $1" | tee -a "$LOG"
}

log_msg "INFO: AlgoWay Docs publish started"

if [ ! -d "$DOCS_DIR" ]; then
  log_msg "ERROR: docs directory not found: $DOCS_DIR"
else
  cd "$DOCS_DIR"

  log_msg "INFO: running Docusaurus build"

  if npm run build >> "$LOG" 2>&1; then
    log_msg "OK: Docusaurus build completed"

    if [ ! -d "$COMPOSE_DIR" ]; then
      log_msg "ERROR: compose directory not found: $COMPOSE_DIR"
    else
      cd "$COMPOSE_DIR"

      log_msg "INFO: recreating Caddy container after build"

      if docker compose up -d --force-recreate --no-deps caddy >> "$LOG" 2>&1; then
        log_msg "OK: Caddy recreated"

        log_msg "INFO: checking Caddy mounted build"
        docker exec tradingfew-caddy-1 sh -c 'test -f /srv/algoway-docs/index.html && echo "OK: index.html visible in Caddy" || echo "ERROR: index.html missing in Caddy"' | tee -a "$LOG"

        log_msg "INFO: checking live homepage"
        curl -I "$LIVE_URL" 2>&1 | tee -a "$LOG"

        log_msg "INFO: checking live test page"
        curl -I "$TEST_PAGE" 2>&1 | tee -a "$LOG"

        log_msg "OK: AlgoWay Docs publish finished"
      else
        log_msg "ERROR: Caddy recreate failed"
      fi
    fi
  else
    log_msg "ERROR: Docusaurus build failed, Caddy was not recreated"
  fi
fi
