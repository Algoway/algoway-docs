import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'How AlgoWay Works',
      items: [
        'how-algoway-works/overview',
        'how-algoway-works/algorithmic-trading-basics',
        'how-algoway-works/pricing-routes',
        {type: 'link', label: 'AlgoWay vs PineConnector', href: 'https://algoway.trade/pineconnector-alternative'},
      {type: 'link', label: 'AlgoWay vs TradersPost', href: 'https://algoway.trade/traderspost-alternative'},
        'telegram-ai/notifications',
        'billing/buy-me-a-coffee',
      ],
    },
    {
      type: 'category',
      label: 'TradingView Signal Setup',
      items: [
        'tradingview/json-schema',
        'tradingview/create-webhook-alert',
        'tradingview/pine-alert-message-vs-alert',
        'tradingview/indicator-to-strategy',
        'tradingview/manual-alerts',
        'tradingview/email-route-without-paid-plan',
        'tradingview/free-webhook-alternative',
        'tradingview/traladal-alert-adapter',
        'tradingview/trendspider',
      ],
    },
    {
      type: 'category',
      label: 'MetaTrader 5',
      items: [
        'metatrader-5/tradingview-to-mt5',
        {
          type: 'category',
          label: 'EA Installation and Setup',
          items: [
            'metatrader-5/ws-ea-installation',
            'metatrader-5/ea-installation-guide',
            'metatrader-5/oanda-compatibility',
          ],
        },
        {
          type: 'category',
          label: 'EA Parameters',
          items: [
            'metatrader-5/ea-v206-parameters',
            'metatrader-5/ea-v190-overview',
            'metatrader-5/ea-v184-parameters',
          ],
        },
        {
          type: 'category',
          label: 'Risk Management',
          items: [
            'metatrader-5/risk-management',
          ],
        },
        'metatrader-5/algoway-vps-services',
      ],
    },
    {
      type: 'category',
      label: 'Errors',
      items: [
        'metatrader-5/common-errors',
        'troubleshooting/mt5-error-4752',
        'troubleshooting/mt5-error-4756',
        'troubleshooting/error',
      ],
    },
    {
      type: 'category',
      label: 'Broker Platforms',
      items: [
        {
          type: 'category',
          label: 'TradeLocker',
          collapsed: false,
          items: [
            'broker-platforms/tradelocker-setup',
            'broker-platforms/tradelocker-risk-fields',
          ],
        },
        'broker-platforms/dxtrade-setup',
        'broker-platforms/match-trader-setup',
        'broker-platforms/ctrader-connector-logic',
        {
          type: 'category',
          label: 'Tradovate',
          collapsed: false,
          items: [
            'broker-platforms/tradovate-setup',
          ],
        },
        {
          type: 'category',
          label: 'ProjectX',
          collapsed: false,
          items: [
            'broker-platforms/projectx-setup',
          ],
        },
        {
          type: 'category',
          label: 'Alpaca',
          collapsed: false,
          items: [
            'broker-platforms/alpaca-setup',
            'broker-platforms/alpaca-instruments',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Crypto Exchanges',
      items: [
        'crypto-exchanges/binance',
        'crypto-exchanges/bybit',
        'crypto-exchanges/okx',
        'crypto-exchanges/mexc',
        'crypto-exchanges/bitget',
        'crypto-exchanges/bingx',
        'crypto-exchanges/gateio',
        'crypto-exchanges/coinbase',
      ],
    },
    {
      type: 'category',
      label: 'Telegram AI Signals',
      items: [
        'telegram-ai/overview',
      ],
    },
    {
      type: 'category',
      label: 'CopyTrader',
      items: [
        'copytrader/overview',
        'broker-platforms/ctrader-to-mt5-copier',
      ],
    },
    {
      type: 'category',
      label: 'Trade Modes and Execution Logic',
      items: [
        'trade-modes/hedge-reverse-opposite',
        'trade-modes/backtest-tradingview-metrics',
      ],
    },
    {
      type: 'category',
      label: 'Third-party Indicators',
      items: [
        'third-party-indicators/atp-premium-indicator',
      ],
    },
    {
      type: 'category',
      label: 'Editorial',
      items: [
        'editorial/avoid-fake-gurus',
        'editorial/ironbot-trading-journal-dashboard',
      ],
    },
  ],
};

export default sidebars;
