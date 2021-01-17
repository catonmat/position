export const riskLevelMarks = [
    {
        value: 20,
        label: 'low',
        text: 'Your downside is limited to 20% of your portfolio.',
    },
    {
        value: 50,
        label: 'medium',
        text: 'You may lose up to 50% of your portfolio.'
    },
    {
        value: 80,
        label: 'high',
        text: '80% of your portfolio is at risk!'
    },
];

export const investmentPeriodMarks = [
    {
        value: 12.5,
        label: '3m+',
        text: `You're investing for at least 3 months.`
    },
    {
        value: 50,
        label: '1y+',
        text: `You're investing for at least 1 year.`
    },
    {
        value: 100,
        label: '2y+',
        text: `You're investing for longer than 2 years.`
    },
]

export const sectors = [
    {
        sector: 'renewables',
        label: 'Clean energy',
        tickers: [{ ticker: 'ICLN', sectorWeight: 1 }],
    },
    {
        sector: 'battery',
        label: 'Battery technology',
        tickers: [{ ticker: 'LIT', sectorWeight: 1 }],
    },
    {
        sector: 'bigtech',
        label: 'Big tech',
        tickers: [{ ticker: 'TQQQ', sectorWeight: 1 }],
    },
    {
        sector: 'genomics',
        label: 'Genomics',
        tickers: [{ ticker: 'ARKG', sectorWeight: 1 }],
    },
    {
        sector: 'autonomous',
        label: 'Autonomous Technology & Robotics',
        tickers: [{ ticker: 'ARKQ', sectorWeight: 1 }],
    },
    {
        sector: 'web',
        label: 'Internet technologies',
        tickers: [{ ticker: 'ARKW', sectorWeight: 1 }],
    },
    {
        sector: 'fintech',
        label: 'Fintech',
        tickers: [{ ticker: 'ARKF', sectorWeight: 1 }],
    },
    {
        sector: 'innovation',
        label: 'Disrupting innovation in any sector',
        tickers: [{ ticker: 'ARKK', sectorWeight: 1 }],
    },
    {
        sector: 'economy',
        label: 'Broad economy',
        tickers: [{ ticker: 'SPY', sectorWeight: 1 }],
    },
    {
        sector: 'metals',
        label: 'Commodities',
        tickers: [
            { ticker: 'GLD', sectorWeight: 0.8 },
            { ticker: 'SLV', sectorWeight: 0.2 },
        ],
    },
    // {
    //     sector: 'crypto',
    //     label: 'Bitcoin & Ethereum',
    //     checked: false,
    // },
]








