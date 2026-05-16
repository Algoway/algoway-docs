import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const menu = [
  {
    title: 'How AlgoWay Works',
    items: [
      ['What AlgoWay is and how it works', '/docs/how-algoway-works/overview'],
      ['Algorithmic trading basics', '/docs/how-algoway-works/algorithmic-trading-basics'],
      ['Pricing, routes, Clone and VPS', '/docs/how-algoway-works/pricing-routes'],
      ['AlgoWay vs PineConnector', '/docs/how-algoway-works/algoway-vs-pineconnector'],
    ],
  },
  {
    title: 'TradingView Signal Setup',
    items: [
      ['JSON schema and parameters', '/docs/tradingview/json-schema'],
      ['Create a webhook alert', '/docs/tradingview/create-webhook-alert'],
      ['Pine Script alert_message vs alert()', '/docs/tradingview/pine-alert-message-vs-alert'],
      ['Convert indicator to strategy', '/docs/tradingview/indicator-to-strategy'],
      ['Manual alerts without Pine Script', '/docs/tradingview/manual-alerts'],
      ['TradingView without paid webhooks', '/docs/tradingview/email-route-without-paid-plan'],
      ['Free webhook alternative with email', '/docs/tradingview/free-webhook-alternative'],
      ['TRALADAL alert adapter', '/docs/tradingview/traladal-alert-adapter'],
      ['TrendSpider with AlgoWay', '/docs/tradingview/trendspider'],
    ],
  },
  {
    title: 'MetaTrader 5',
    items: [
      ['TradingView to MT5', '/docs/metatrader-5/tradingview-to-mt5'],
      ['Install AlgoWayWS-MT5 EA', '/docs/metatrader-5/ws-ea-installation'],
      ['Install MT5 EA', '/docs/metatrader-5/ea-installation-guide'],
      ['EA v2.06 parameters', '/docs/metatrader-5/ea-v206-parameters'],
      ['Risk management', '/docs/metatrader-5/risk-management'],
      ['MT5 common errors', '/docs/metatrader-5/common-errors'],
    ],
  },
  {
    title: 'Broker Platforms',
    items: [
      ['TradeLocker', '/docs/broker-platforms/tradelocker-setup'],
      ['DXtrade', '/docs/broker-platforms/dxtrade-setup'],
      ['Match-Trader', '/docs/broker-platforms/match-trader-setup'],
      ['cTrader', '/docs/broker-platforms/ctrader-connector-logic'],
      ['Tradovate', '/docs/broker-platforms/tradovate-setup'],
      ['ProjectX', '/docs/broker-platforms/projectx-setup'],
      ['Alpaca', '/docs/broker-platforms/alpaca-setup'],
    ],
  },
  {
    title: 'Crypto Exchanges',
    items: [
      ['Binance', '/docs/crypto-exchanges/binance'],
      ['Bybit', '/docs/crypto-exchanges/bybit'],
      ['OKX', '/docs/crypto-exchanges/okx'],
      ['MEXC', '/docs/crypto-exchanges/mexc'],
      ['Bitget', '/docs/crypto-exchanges/bitget'],
      ['BingX', '/docs/crypto-exchanges/bingx'],
      ['Gate.io', '/docs/crypto-exchanges/gateio'],
      ['Coinbase', '/docs/crypto-exchanges/coinbase'],
    ],
  },
  {
    title: 'Telegram AI Signals',
    items: [
      ['Telegram AI Copier overview', '/docs/telegram-ai/overview'],
      ['Telegram notifications', '/docs/telegram-ai/notifications'],
    ],
  },
  {
    title: 'CopyTrader',
    items: [
      ['AlgoWay CopyTrader', '/docs/copytrader/overview'],
    ],
  },
  {
    title: 'Trade Modes and Execution Logic',
    items: [
      ['Hedge, Reverse and Opposite', '/docs/trade-modes/hedge-reverse-opposite'],
      ['TradingView backtest and metrics', '/docs/trade-modes/backtest-tradingview-metrics'],
    ],
  },
  {
    title: 'Third-party Indicators',
    items: [
      ['ATP Premium Indicator alerts', '/docs/third-party-indicators/atp-premium-indicator'],
    ],
  },
  {
    title: 'Billing and Activation',
    items: [
      ['Pricing and routes', '/docs/billing/pricing-routes'],
      ['Buy webhook via Buy Me a Coffee', '/docs/billing/buy-me-a-coffee'],
    ],
  },
  {
    title: 'Editorial',
    items: [
      ['Avoid fake trading gurus', '/docs/editorial/avoid-fake-gurus'],
    ],
  },
];

const cards = [
  ['TradingView Webhook Automation', 'Create TradingView alerts, send JSON messages and route signals through AlgoWay.', '/docs/tradingview-webhooks/overview'],
  ['Webhook JSON Reference', 'Fields for ticker, action, order type, trade type, SL, TP, trailing stop and platform routing.', '/docs/webhook-json/reference'],
  ['TradingView to MetaTrader 5', 'Connect TradingView alerts to MetaTrader 5 through AlgoWay and the MT5 Expert Advisor.', '/docs/metatrader-5/tradingview-to-mt5'],
  ['Telegram AI Signal Copier', 'Convert Telegram trading signals into validated AlgoWay webhook commands.', '/docs/telegram-ai/overview'],
  ['Supported Execution Destinations', 'MT5, TradeLocker, Match-Trader, DXtrade, cTrader, futures, crypto and CFD routes.', '/docs/supported-platforms/overview'],
  ['Troubleshooting', 'Fix JSON, webhook, MT5 and broker-side execution errors.', '/docs/troubleshooting/overview'],
];

export default function Home(): React.ReactNode {
  return (
    <Layout
      title="TradingView Webhook Automation Docs"
      description="AlgoWay documentation for TradingView webhook automation, MetaTrader 5, webhook JSON, Telegram AI signal copier and supported execution platforms."
    >
      <main className={styles.page}>
        <div className={styles.shell}>
          <aside className={styles.sidebar}>
            <h2>AlgoWay Docs</h2>
            <p>Main documentation clusters and core pages.</p>

            {menu.map((group) => (
              <div className={styles.menuGroup} key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map(([label, href]) => (
                    <li key={href}>
                      <Link to={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          <section className={styles.content}>
            <div className={styles.card}>
              <Heading as="h1">
                TradingView Webhook Automation Docs: MT5, TradeLocker, DXtrade, cTrader, Telegram AI & Crypto Guides
              </Heading>

              <p className={styles.lead}>
                AlgoWay Docs is a practical documentation hub for TradingView webhook automation,
                webhook JSON messages, MT5 automated trading, Telegram AI signal copying,
                Pine Script alerts and broker integration guides.
              </p>

              <div className={styles.introBox}>
                <p>
                  Choose the route you need: TradingView to MT5, TradingView to TradeLocker,
                  TradingView to DXtrade, TradingView to cTrader, Telegram signals to MT5,
                  Pine Script alert messages, crypto exchange routing or MT5 Expert Advisor troubleshooting.
                </p>
              </div>

              <Heading as="h2">Documentation sections</Heading>

              <div className={styles.grid}>
                {cards.map(([title, text, href]) => (
                  <Link className={styles.docCard} to={href} key={href}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
