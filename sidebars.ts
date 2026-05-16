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
        'how-algoway-works/algoway-vs-pineconnector',
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
            'metatrader-5/sl-tp-from-tradingview',
          ],
        },
        {
          type: 'category',
          label: 'MT5 Errors',
          items: [
            'metatrader-5/common-errors',
            'troubleshooting/mt5-error-4752',
            'troubleshooting/mt5-error-4756',
            'troubleshooting/error',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Broker Platforms',
      items: [
        'broker-platforms/tradelocker-setup',
        'broker-platforms/tradelocker-risk-fields',
        'broker-platforms/dxtrade-setup',
        'broker-platforms/match-trader-setup',
        'broker-platforms/ctrader-connector-logic',
        'broker-platforms/ctrader-to-mt5-copier',
        'broker-platforms/tradovate-setup',
        'broker-platforms/projectx-setup',
        'broker-platforms/alpaca-setup',
        'broker-platforms/alpaca-instruments',
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
        'telegram-ai/notifications',
      ],
    },
    {
      type: 'category',
      label: 'CopyTrader',
      items: [
        'copytrader/overview',
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
      label: 'Billing and Activation',
      items: [
        'billing/pricing-routes',
        'billing/buy-me-a-coffee',
      ],
    },
    {
      type: 'category',
      label: 'Editorial',
      items: [
        'editorial/avoid-fake-gurus',
      ],
    },
  ],
};

export default sidebars;
