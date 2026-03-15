export type Category = "Investment Banking" | "Accounting" | "Balance Sheet Forecasting";
export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Question {
  id: number;
  category: Category;
  difficulty: Difficulty;
  question: string;
  options: string[];
  answer: number; // index into options
  explanation: string;
}

export const questions: Question[] = [
  // ─── Investment Banking ───────────────────────────────────────────────────
  {
    id: 1,
    category: "Investment Banking",
    difficulty: "Easy",
    question: "What does DCF stand for in valuation?",
    options: [
      "Discounted Cash Flow",
      "Direct Capital Financing",
      "Debt to Cash Flow",
      "Diversified Capital Fund",
    ],
    answer: 0,
    explanation:
      "DCF (Discounted Cash Flow) is a valuation method that estimates the value of an investment based on its expected future cash flows, discounted back to present value.",
  },
  {
    id: 2,
    category: "Investment Banking",
    difficulty: "Easy",
    question: "In M&A, what is a 'hostile takeover'?",
    options: [
      "An acquisition where employees are laid off",
      "An acquisition attempted without the target's board approval",
      "A leveraged buyout with high debt",
      "A merger between two direct competitors",
    ],
    answer: 1,
    explanation:
      "A hostile takeover occurs when an acquirer bypasses the target company's board of directors and appeals directly to shareholders, without the board's approval.",
  },
  {
    id: 3,
    category: "Investment Banking",
    difficulty: "Medium",
    question:
      "Which of the following is NOT a common method for valuing a company?",
    options: [
      "Comparable Company Analysis (Comps)",
      "Precedent Transactions",
      "Discounted Cash Flow (DCF)",
      "Net Asset Velocity (NAV)",
    ],
    answer: 3,
    explanation:
      "The three main valuation methods are Comparable Company Analysis, Precedent Transactions, and DCF. 'Net Asset Velocity' is not a real valuation methodology.",
  },
  {
    id: 4,
    category: "Investment Banking",
    difficulty: "Medium",
    question: "What does EBITDA stand for?",
    options: [
      "Earnings Before Interest, Taxes, Depreciation, and Amortization",
      "Estimated Business Income Tax Deduction Amount",
      "Equity-Based Income to Debt and Asset ratio",
      "Earnings Before Investment, Tax, Debt, and Accruals",
    ],
    answer: 0,
    explanation:
      "EBITDA is Earnings Before Interest, Taxes, Depreciation, and Amortization. It's widely used as a proxy for operating cash flow and is central to many valuation multiples.",
  },
  {
    id: 5,
    category: "Investment Banking",
    difficulty: "Medium",
    question: "In an LBO model, the primary driver of returns is typically:",
    options: [
      "Revenue growth alone",
      "Debt paydown, EBITDA growth, and multiple expansion",
      "Dividend payments to equity holders",
      "Reduction in working capital",
    ],
    answer: 1,
    explanation:
      "LBO returns are driven by three factors: (1) debt paydown that increases equity value, (2) EBITDA growth that expands the enterprise value, and (3) multiple expansion on exit.",
  },
  {
    id: 6,
    category: "Investment Banking",
    difficulty: "Hard",
    question:
      "A company has an EV of $500M and EBITDA of $50M. It trades at an EV/EBITDA of 10x. After a $100M acquisition funded entirely by debt, what is the approximate pro-forma EV/EBITDA if the target adds $12M in EBITDA?",
    options: ["9.7x", "10.0x", "10.3x", "8.5x"],
    answer: 0,
    explanation:
      "Pro-forma EV = $500M + $100M = $600M. Pro-forma EBITDA = $50M + $12M = $62M. EV/EBITDA = $600M / $62M ≈ 9.7x — the deal is accretive on an EV/EBITDA basis.",
  },
  {
    id: 7,
    category: "Investment Banking",
    difficulty: "Hard",
    question:
      "When does the 'football field' chart in a pitchbook show a wider range for DCF vs. Comps?",
    options: [
      "When the company has stable, predictable cash flows",
      "When the discount rate assumptions and terminal growth rate vary significantly",
      "When the comparable companies are perfectly similar",
      "When the company has no debt",
    ],
    answer: 1,
    explanation:
      "DCF is highly sensitive to WACC and terminal growth rate assumptions. Small changes produce large swings in value, resulting in a wider range compared to market-based Comps.",
  },
  {
    id: 8,
    category: "Investment Banking",
    difficulty: "Easy",
    question: "What is a 'roadshow' in the context of an IPO?",
    options: [
      "A tour of the company's physical facilities by due diligence teams",
      "A series of presentations to potential institutional investors before the IPO pricing",
      "A regulatory review process by the SEC",
      "The process of selecting underwriters",
    ],
    answer: 1,
    explanation:
      "A roadshow is a marketing tour where company management and investment bankers present to institutional investors ahead of an IPO to generate demand and help set the offering price.",
  },
  {
    id: 9,
    category: "Investment Banking",
    difficulty: "Medium",
    question:
      "Which ratio is most commonly used in leveraged buyout (LBO) analysis to assess a company's ability to service debt?",
    options: [
      "Price-to-Earnings (P/E)",
      "Debt / EBITDA",
      "Price / Book",
      "Return on Equity (ROE)",
    ],
    answer: 1,
    explanation:
      "Debt/EBITDA (leverage ratio) is the primary metric in LBO analysis to assess how many years of EBITDA are needed to repay debt. Lenders typically cap leverage at 4-6x EBITDA.",
  },
  {
    id: 10,
    category: "Investment Banking",
    difficulty: "Hard",
    question: "What is 'accretion/dilution' in the context of M&A analysis?",
    options: [
      "Whether the acquisition price is above or below book value",
      "Whether the deal increases or decreases the acquirer's EPS post-transaction",
      "Whether the target's revenue grows after the deal closes",
      "Whether goodwill is created or destroyed in the transaction",
    ],
    answer: 1,
    explanation:
      "Accretion/dilution analysis measures the impact of an acquisition on the acquirer's Earnings Per Share (EPS). If pro-forma EPS > standalone EPS, the deal is accretive; if lower, it's dilutive.",
  },
  {
    id: 11,
    category: "Investment Banking",
    difficulty: "Easy",
    question: "What is the purpose of a 'fairness opinion' in M&A?",
    options: [
      "To ensure employees are treated fairly during layoffs",
      "An independent assessment that the transaction price is fair from a financial standpoint",
      "A legal opinion confirming the deal complies with antitrust law",
      "A credit rating agency's view on post-merger leverage",
    ],
    answer: 1,
    explanation:
      "A fairness opinion is issued by an independent financial advisor (often an investment bank) to a company's board, confirming that the consideration offered in a transaction is fair from a financial point of view.",
  },
  {
    id: 12,
    category: "Investment Banking",
    difficulty: "Medium",
    question:
      "In DCF valuation, terminal value typically represents what percentage of total enterprise value for a mature company?",
    options: ["10-20%", "30-50%", "60-80%", "90-100%"],
    answer: 2,
    explanation:
      "For most mature companies, terminal value represents 60-80% (sometimes more) of total DCF enterprise value, which is why assumptions about terminal growth rate and WACC are so critical.",
  },

  // ─── Accounting ──────────────────────────────────────────────────────────
  {
    id: 13,
    category: "Accounting",
    difficulty: "Easy",
    question:
      "Which financial statement shows a company's revenues and expenses over a period?",
    options: [
      "Balance Sheet",
      "Income Statement",
      "Cash Flow Statement",
      "Statement of Shareholders' Equity",
    ],
    answer: 1,
    explanation:
      "The Income Statement (also called Profit & Loss or P&L) shows revenues, expenses, and net income over a specific period (e.g., a quarter or fiscal year).",
  },
  {
    id: 14,
    category: "Accounting",
    difficulty: "Easy",
    question: "The accounting equation is:",
    options: [
      "Assets = Liabilities + Equity",
      "Assets = Revenue – Expenses",
      "Equity = Assets + Liabilities",
      "Revenue = Assets – Liabilities",
    ],
    answer: 0,
    explanation:
      "The fundamental accounting equation is Assets = Liabilities + Equity. This equation must always balance and underpins double-entry bookkeeping.",
  },
  {
    id: 15,
    category: "Accounting",
    difficulty: "Medium",
    question:
      "Under accrual accounting, revenue is recognized when:",
    options: [
      "Cash is received",
      "The product is shipped or service is performed",
      "The invoice is sent to the customer",
      "The budget is approved",
    ],
    answer: 1,
    explanation:
      "Under accrual accounting (GAAP/IFRS), revenue is recognized when it is earned — i.e., when goods are delivered or services are rendered — regardless of when cash is received.",
  },
  {
    id: 16,
    category: "Accounting",
    difficulty: "Medium",
    question:
      "If a company buys $10M of equipment with a 10-year straight-line depreciation, what is the annual depreciation expense (assuming no salvage value)?",
    options: ["$500K", "$1M", "$2M", "$10M"],
    answer: 1,
    explanation:
      "$10M ÷ 10 years = $1M per year. Straight-line depreciation spreads the cost evenly over the asset's useful life.",
  },
  {
    id: 17,
    category: "Accounting",
    difficulty: "Medium",
    question: "Deferred revenue on the balance sheet is classified as a:",
    options: ["Asset", "Liability", "Equity", "Contra-asset"],
    answer: 1,
    explanation:
      "Deferred revenue is a liability because it represents cash received before the service/product has been delivered — i.e., the company still 'owes' the customer.",
  },
  {
    id: 18,
    category: "Accounting",
    difficulty: "Hard",
    question:
      "How does a $100 increase in accounts receivable affect the three financial statements?",
    options: [
      "Income Statement: +$100 revenue; Balance Sheet: +$100 AR; Cash Flow: no change",
      "Income Statement: +$100 revenue; Balance Sheet: +$100 AR; Cash Flow: -$100 (operating)",
      "Income Statement: no change; Balance Sheet: +$100 AR; Cash Flow: +$100",
      "Income Statement: +$100 revenue; Balance Sheet: -$100 AR; Cash Flow: +$100",
    ],
    answer: 1,
    explanation:
      "Revenue of $100 is recognized on the P&L. AR increases by $100 on the balance sheet (asset). On the cash flow statement, the $100 AR increase is a use of cash (subtract in CFO), reflecting that cash hasn't been collected yet.",
  },
  {
    id: 19,
    category: "Accounting",
    difficulty: "Hard",
    question:
      "A company uses LIFO inventory accounting during a period of rising prices. Compared to FIFO, LIFO will result in:",
    options: [
      "Higher net income, higher ending inventory",
      "Lower net income, lower ending inventory",
      "Higher net income, lower ending inventory",
      "Lower net income, higher ending inventory",
    ],
    answer: 1,
    explanation:
      "Under LIFO, the most recently purchased (higher-cost) items are expensed first, increasing COGS and lowering net income. Ending inventory reflects older, cheaper items — so ending inventory is also lower.",
  },
  {
    id: 20,
    category: "Accounting",
    difficulty: "Easy",
    question: "Goodwill on a balance sheet arises from:",
    options: [
      "Strong brand reputation reflected in operating income",
      "Paying a premium above the fair value of net assets in an acquisition",
      "Expensing R&D that creates intangible value",
      "Revaluing property above historical cost",
    ],
    answer: 1,
    explanation:
      "Goodwill = Purchase Price – Fair Value of Net Assets Acquired. It arises in acquisitions where a buyer pays more than the identifiable net assets are worth, reflecting expected synergies and intangibles.",
  },
  {
    id: 21,
    category: "Accounting",
    difficulty: "Medium",
    question: "Which of the following would increase Free Cash Flow (FCF)?",
    options: [
      "An increase in capital expenditures",
      "An increase in accounts receivable",
      "A decrease in accounts payable",
      "A decrease in inventory",
    ],
    answer: 3,
    explanation:
      "FCF = CFO – CapEx. Decreasing inventory releases cash (positive working capital change), increasing CFO and thus FCF. The other options all reduce FCF.",
  },
  {
    id: 22,
    category: "Accounting",
    difficulty: "Hard",
    question:
      "Under IFRS, how is an impairment of a long-lived asset tested?",
    options: [
      "Compare carrying value to undiscounted future cash flows; if carrying value is higher, impair to fair value",
      "Compare carrying value to recoverable amount (higher of fair value less costs to sell and value in use); impair if carrying value exceeds recoverable amount",
      "Compare historical cost to replacement cost; impair to replacement cost if lower",
      "Compare book value to market cap; impair if book value exceeds market cap",
    ],
    answer: 1,
    explanation:
      "Under IAS 36, an asset is impaired when its carrying amount exceeds its recoverable amount. Recoverable amount is the higher of (a) fair value less costs to sell, and (b) value in use (PV of future cash flows).",
  },
  {
    id: 23,
    category: "Accounting",
    difficulty: "Medium",
    question:
      "Operating leverage refers to:",
    options: [
      "The ratio of debt to equity in the capital structure",
      "The proportion of fixed costs vs. variable costs in the cost structure",
      "The use of derivatives to hedge operating risk",
      "The sensitivity of ROE to changes in interest rates",
    ],
    answer: 1,
    explanation:
      "Operating leverage measures how much of a company's cost structure is fixed vs. variable. High operating leverage means a larger % of fixed costs — so a small revenue increase leads to a disproportionately large increase in operating income.",
  },
  {
    id: 24,
    category: "Accounting",
    difficulty: "Easy",
    question: "Depreciation is added back on the cash flow statement because:",
    options: [
      "It represents a cash inflow from operations",
      "It is a non-cash charge deducted from net income that did not use cash",
      "It reduces taxes and therefore increases cash",
      "It is an investing activity",
    ],
    answer: 1,
    explanation:
      "Depreciation reduces net income on the P&L but involves no cash outflow. Under the indirect method, we start with net income and add back non-cash charges like depreciation to arrive at cash from operations.",
  },

  // ─── Balance Sheet Forecasting ───────────────────────────────────────────
  {
    id: 25,
    category: "Balance Sheet Forecasting",
    difficulty: "Easy",
    question: "In a 3-statement model, accounts receivable (AR) is primarily driven by which income statement line item?",
    options: [
      "Cost of Goods Sold (COGS)",
      "Net revenues (sales)",
      "SG&A expense",
      "Interest expense",
    ],
    answer: 1,
    explanation:
      "AR grows with sales. The Days Sales Outstanding (DSO) metric formalises this: DSO = (AR / Credit Sales) × days in period. When revenues rise, AR rises proportionally.",
  },
  {
    id: 26,
    category: "Balance Sheet Forecasting",
    difficulty: "Easy",
    question: "What does DSO (Days Sales Outstanding) measure?",
    options: [
      "The average number of days it takes to collect payment after a sale",
      "The average number of days inventory sits before being sold",
      "The average number of days payables are outstanding before payment",
      "The number of days until long-term debt matures",
    ],
    answer: 0,
    explanation:
      "DSO = (AR / Credit Sales) × days in period. It measures how many days, on average, it takes a company to collect cash from customers after recognising revenue.",
  },
  {
    id: 27,
    category: "Balance Sheet Forecasting",
    difficulty: "Easy",
    question: "In a balance sheet forecast, inventory is typically grown with which driver?",
    options: [
      "Revenue",
      "SG&A expense",
      "Cost of Goods Sold (COGS)",
      "Net income",
    ],
    answer: 2,
    explanation:
      "Inventory is directly tied to production costs, so it is grown with COGS. The override metric is inventory turnover = COGS / Average Inventory.",
  },
  {
    id: 28,
    category: "Balance Sheet Forecasting",
    difficulty: "Medium",
    question: "Accounts payable (AP) is most accurately forecast by growing it with:",
    options: [
      "Revenue, because all expenses ultimately trace to revenue",
      "COGS, because payables are predominantly generated for inventory purchases",
      "SG&A, because most vendors supply services not goods",
      "Net income, because profitability drives the payment cycle",
    ],
    answer: 1,
    explanation:
      "AP is generated when a company buys inventory on credit, so COGS is the primary driver. The override assumption is the days payable outstanding (DPO) period.",
  },
  {
    id: 29,
    category: "Balance Sheet Forecasting",
    difficulty: "Easy",
    question: "Deferred revenue should be forecast growing at:",
    options: [
      "The growth rate of operating expenses",
      "The revenue growth rate",
      "The COGS growth rate",
      "The growth rate of net income",
    ],
    answer: 1,
    explanation:
      "Deferred revenue represents cash collected before services/products are delivered (e.g. gift cards, SaaS subscriptions). As the business grows and sells more of these arrangements, deferred revenue grows in line with revenues.",
  },
  {
    id: 30,
    category: "Balance Sheet Forecasting",
    difficulty: "Medium",
    question: "What is the correct PP&E roll-forward formula?",
    options: [
      "PP&E (EOP) = PP&E (BOP) + Capex − Depreciation − Asset Sales",
      "PP&E (EOP) = PP&E (BOP) − Capex + Depreciation + Asset Sales",
      "PP&E (EOP) = PP&E (BOP) + Depreciation − Capex",
      "PP&E (EOP) = Capex − Depreciation",
    ],
    answer: 0,
    explanation:
      "PP&E (EOP) = PP&E (BOP) + Capital Expenditures − Depreciation − Asset Sales. New purchases increase PP&E; depreciation and disposals reduce it. BOP = beginning of period; EOP = end of period.",
  },
  {
    id: 31,
    category: "Balance Sheet Forecasting",
    difficulty: "Medium",
    question: "When specific management guidance on capex is unavailable, the most common forecasting approach is to:",
    options: [
      "Hold capex constant at the most recent year's absolute dollar amount",
      "Assume capex is zero until the company provides guidance",
      "Project capex as a percentage of revenues, benchmarked to historical trends",
      "Grow capex at the same rate as depreciation",
    ],
    answer: 2,
    explanation:
      "In the absence of guidance, capex is forecast as a % of sales using historical ratios as a guide. This ties capital spending to business growth, which is conceptually sound.",
  },
  {
    id: 32,
    category: "Balance Sheet Forecasting",
    difficulty: "Medium",
    question: "Which of the following is the most common method to forecast depreciation when detailed asset schedules are unavailable?",
    options: [
      "Straight-line the last year's absolute depreciation amount forever",
      "Forecast depreciation as a % of capital expenditures using historical ratios",
      "Set depreciation equal to net income",
      "Use the statutory tax depreciation rate",
    ],
    answer: 1,
    explanation:
      "Depreciation as a % of capex is the standard approach when a full waterfall analysis isn't feasible. Historically this ratio is relatively stable, making it a reliable proxy.",
  },
  {
    id: 33,
    category: "Balance Sheet Forecasting",
    difficulty: "Easy",
    question: "In a standard 3-statement model, goodwill is typically forecast as:",
    options: [
      "Declining each year due to mandatory amortisation under GAAP",
      "Growing with revenue to reflect brand value appreciation",
      "Straight-lined (held constant) at its current balance",
      "Reduced annually by a fixed impairment charge of 10%",
    ],
    answer: 2,
    explanation:
      "Goodwill is straight-lined because forecasting impairments or new acquisitions requires specific assumptions. Under US GAAP, goodwill is not amortised (only tested for impairment), so the balance stays flat absent a specific thesis.",
  },
  {
    id: 34,
    category: "Balance Sheet Forecasting",
    difficulty: "Medium",
    question: "The intangible asset roll-forward formula is:",
    options: [
      "Intangibles (EOP) = Intangibles (BOP) + Amortisation − Purchases",
      "Intangibles (EOP) = Intangibles (BOP) + Purchases − Amortisation",
      "Intangibles (EOP) = Purchases − Amortisation only",
      "Intangibles (EOP) = Intangibles (BOP) − Depreciation + Capex",
    ],
    answer: 1,
    explanation:
      "Intangible Assets (EOP) = Intangible Assets (BOP) + Purchases − Amortisation. Purchases increase the balance; amortisation reduces it — the mirror of the PP&E roll-forward but using amortisation rather than depreciation.",
  },
  {
    id: 35,
    category: "Balance Sheet Forecasting",
    difficulty: "Medium",
    question: "When forecasting deferred tax assets (DTAs) and liabilities (DTLs) without detailed footnote disclosures, the most common approach is to:",
    options: [
      "Set both to zero as they net out over time",
      "Grow them with revenue, since they are broadly tied to operations",
      "Reduce them by 10% per year to reflect expected utilisation",
      "Link them directly to the income tax expense line",
    ],
    answer: 1,
    explanation:
      "Since most DTAs (e.g. NOLs, timing differences) and DTLs (e.g. accelerated book vs. tax depreciation) are tied to operations, growing them with revenue is the standard proxy. Straight-lining is also acceptable when disclosures are insufficient.",
  },
  {
    id: 36,
    category: "Balance Sheet Forecasting",
    difficulty: "Hard",
    question: "What is the retained earnings roll-forward formula?",
    options: [
      "RE (EOP) = RE (BOP) + Revenue − Expenses",
      "RE (EOP) = RE (BOP) + Net Income − Dividends",
      "RE (EOP) = RE (BOP) + Net Income + Stock-Based Compensation",
      "RE (EOP) = Net Income − Dividends (no beginning balance)",
    ],
    answer: 1,
    explanation:
      "Retained Earnings (EOP) = Retained Earnings (BOP) + Net Income − Dividends (common and preferred). This is the primary link between the income statement and the balance sheet in a 3-statement model.",
  },
  {
    id: 37,
    category: "Balance Sheet Forecasting",
    difficulty: "Medium",
    question: "How does stock-based compensation (SBC) flow through the three financial statements?",
    options: [
      "It reduces net income on the P&L and reduces cash on the cash flow statement",
      "It reduces net income (P&L), increases common stock & APIC (balance sheet), and is added back in operating cash flows (cash flow statement)",
      "It only appears on the balance sheet as a reduction to equity",
      "It increases net income because it is a non-cash item",
    ],
    answer: 1,
    explanation:
      "SBC is a non-cash operating expense: it reduces net income on the P&L (via retained earnings), increases Common Stock & APIC on the balance sheet, and is added back to net income in the operating section of the cash flow statement.",
  },
  {
    id: 38,
    category: "Balance Sheet Forecasting",
    difficulty: "Medium",
    question: "A company repurchases $200m of its own shares. How does this affect the balance sheet?",
    options: [
      "Common stock increases by $200m; cash decreases by $200m",
      "Treasury stock (contra-equity) increases by $200m; cash decreases by $200m",
      "Retained earnings decrease by $200m; cash decreases by $200m",
      "Goodwill increases by $200m; cash decreases by $200m",
    ],
    answer: 1,
    explanation:
      "Share buybacks debit treasury stock (a contra-equity account, which reduces total equity) and credit cash. The net effect is a $200m reduction in both total assets (cash) and total equity (treasury stock).",
  },
  {
    id: 39,
    category: "Balance Sheet Forecasting",
    difficulty: "Medium",
    question: "How is Other Comprehensive Income (OCI) typically forecast in a 3-statement model?",
    options: [
      "Grown with revenues because FX gains/losses correlate with business size",
      "Straight-lined — prior period OCI balance is held constant as future gains/losses are unpredictable",
      "Set to zero because GAAP does not permit OCI forecasting",
      "Grown at the risk-free rate to reflect expected investment returns",
    ],
    answer: 1,
    explanation:
      "OCI (FX translation, derivative gains/losses, etc.) is unpredictable, so the standard approach is to straight-line the last historical accumulated OCI balance, assuming no additional gains or losses going forward.",
  },
  {
    id: 40,
    category: "Balance Sheet Forecasting",
    difficulty: "Hard",
    question: "In an integrated 3-statement model, what serves as the 'plug' to make the balance sheet balance?",
    options: [
      "Goodwill — adjusted upward or downward as needed",
      "Retained earnings — overridden to force the balance",
      "Cash and the revolving credit facility — cash builds up if surplus; revolver draws if deficit",
      "Deferred taxes — which absorb any timing differences",
    ],
    answer: 2,
    explanation:
      "Cash and the revolver are the plugs. If the model projects a cash surplus (more sources than uses), the cash balance grows. If there's a deficit, the revolver draws to fund it. This is why the cash flow statement must be accurate before the balance sheet will balance.",
  },
  {
    id: 41,
    category: "Balance Sheet Forecasting",
    difficulty: "Hard",
    question: "When modeling long-term debt, why is it generally more appropriate to hold the balance constant (or grow it with net income) rather than reducing it per the debt maturity schedule?",
    options: [
      "Because GAAP requires debt to be shown at face value regardless of maturities",
      "Because most companies refinance maturing debt with new borrowings to maintain a stable capital structure",
      "Because interest expense would become zero if debt were paid down",
      "Because debt maturities are only disclosed voluntarily and may be unreliable",
    ],
    answer: 1,
    explanation:
      "Most companies refinance maturing debt rather than retiring it, keeping the overall capital structure stable. A model that mechanically pays down debt per the maturity schedule would understate the likely future debt balance and overstate free cash flow.",
  },
  {
    id: 42,
    category: "Balance Sheet Forecasting",
    difficulty: "Hard",
    question: "A common cause of the balance sheet not balancing in a 3-statement model is:",
    options: [
      "Using too many years of historical data",
      "Forecasting balance sheet line items without reflecting their cash impact in the cash flow statement",
      "Growing working capital items with the wrong revenue metric",
      "Having goodwill on the balance sheet",
    ],
    answer: 1,
    explanation:
      "The most frequent error is forecasting a balance sheet item (e.g. growing 'other long-term assets' with revenue) but forgetting to include the corresponding cash impact in the cash flow statement. The three statements must be fully interlinked to balance.",
  },
  {
    id: 43,
    category: "Balance Sheet Forecasting",
    difficulty: "Medium",
    question: "How should 'other non-current assets' and 'other non-current liabilities' be forecast when the composition is unknown?",
    options: [
      "Grow with revenue, since all assets are ultimately tied to operations",
      "Straight-line the balance, because these items may be unrelated to operations (e.g. pension assets, investment assets)",
      "Set to zero as they are immaterial by definition",
      "Grow with COGS, mirroring the treatment of inventory",
    ],
    answer: 1,
    explanation:
      "Unlike current working capital items, non-current 'other' buckets could include non-operating items like pension assets/liabilities or investment holdings. Without detail, straight-lining is safer than assuming an operational driver.",
  },
  {
    id: 44,
    category: "Balance Sheet Forecasting",
    difficulty: "Easy",
    question: "How many years of historical data is recommended as a minimum when building a balance sheet forecast?",
    options: [
      "One year",
      "At least two years",
      "Five years",
      "Ten years",
    ],
    answer: 1,
    explanation:
      "Best practice is at least two years of historical data to provide context for forecasts and allow the analyst to observe trends in key drivers such as DSO, inventory turnover, and capex as a % of sales.",
  },
];
