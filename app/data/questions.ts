export type Category =
  | "Investment Banking"
  | "Accounting"
  | "Balance Sheet Forecasting"
  | "Valuation & DCF"
  | "Merger Models & LBO"
  | "Restructuring";
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

  // ─── Valuation & DCF ─────────────────────────────────────────────────────
  {
    id: 45,
    category: "Valuation & DCF",
    difficulty: "Easy",
    question: "What are the 3 primary valuation methodologies in investment banking?",
    options: [
      "Comparable Companies, Precedent Transactions, and Discounted Cash Flow (DCF)",
      "DCF, Dividend Discount Model, and LBO Analysis",
      "Comparable Companies, DCF, and Book Value Analysis",
      "Precedent Transactions, LBO Analysis, and Net Asset Value",
    ],
    answer: 0,
    explanation:
      "The three core methodologies are (1) Comparable Company Analysis (trading multiples from similar public companies), (2) Precedent Transactions (multiples from prior M&A deals), and (3) DCF (intrinsic value based on projected cash flows). Additional methods like LBO analysis, liquidation value, and sum-of-the-parts exist but are supplementary.",
  },
  {
    id: 46,
    category: "Valuation & DCF",
    difficulty: "Medium",
    question: "Which valuation methodology typically produces the highest value, and why?",
    options: [
      "Comparable Company Analysis — public markets apply premium multiples to top-tier companies",
      "Precedent Transactions — acquisition prices include a control premium above market value",
      "DCF — terminal value assumptions can be very aggressive",
      "LBO Analysis — private equity firms tend to overpay for quality assets",
    ],
    answer: 1,
    explanation:
      "Precedent Transactions typically produce the highest value because buyers pay a 'control premium' — often 15–30%+ above the unaffected share price — to gain majority ownership. Comparable Company Analysis reflects current market prices without that premium. DCF can go either way and is the most variable of the three.",
  },
  {
    id: 47,
    category: "Valuation & DCF",
    difficulty: "Medium",
    question: "In which scenario would you NOT use a DCF to value a company?",
    options: [
      "When the company has been consistently profitable for more than 5 years",
      "When the company has unpredictable cash flows (e.g., early-stage biotech or startup) or when debt and working capital serve a fundamentally different role (e.g., banks)",
      "When the company pays regular dividends to shareholders",
      "When the company has no long-term debt on its balance sheet",
    ],
    answer: 1,
    explanation:
      "A DCF requires reasonable cash flow projections — for startups or biotech companies with binary outcomes, predictions are too speculative. For banks and financial institutions, debt is part of the core business model (not just financing), and working capital dominates the balance sheet, making WACC-based DCF inappropriate. A Dividend Discount Model is used instead.",
  },
  {
    id: 48,
    category: "Valuation & DCF",
    difficulty: "Easy",
    question: "What is the standard formula for Enterprise Value (EV)?",
    options: [
      "EV = Equity Value + Debt + Preferred Stock + Minority Interest − Cash",
      "EV = Equity Value − Debt − Preferred Stock + Cash",
      "EV = Market Cap + Net Income − Cash",
      "EV = Total Assets − Total Liabilities",
    ],
    answer: 0,
    explanation:
      "EV = Equity Value + Debt + Preferred Stock + Minority Interest − Cash. Cash is subtracted because an acquirer effectively receives it, reducing the net cost. Debt, preferred stock, and minority interest are added because they represent claims senior to common equity that must be settled in an acquisition.",
  },
  {
    id: 49,
    category: "Valuation & DCF",
    difficulty: "Medium",
    question: "Why do we subtract cash when calculating Enterprise Value?",
    options: [
      "Because cash is a liability on the books of most public companies",
      "Because cash generates interest income that must be offset in the valuation",
      "Because an acquirer effectively receives the seller's cash at closing, reducing the true net purchase price",
      "Because cash is always excluded from operating metrics like EBITDA",
    ],
    answer: 2,
    explanation:
      "In an acquisition, the buyer inherits the seller's cash balance — so if you're paying $500M for a company with $100M in cash, your true economic outlay is only $400M. Technically, only 'excess cash' (above minimum operating needs) should be subtracted, but in practice the full cash balance is typically used.",
  },
  {
    id: 50,
    category: "Valuation & DCF",
    difficulty: "Medium",
    question: "How is WACC (Weighted Average Cost of Capital) calculated?",
    options: [
      "WACC = Cost of Equity × (% Equity) + Cost of Debt × (% Debt) × (1 − Tax Rate) + Cost of Preferred × (% Preferred)",
      "WACC = (Net Income / Revenue) × (Debt / Equity)",
      "WACC = Risk-Free Rate + Beta × Market Risk Premium",
      "WACC = Cost of Debt × (1 − Tax Rate) only, since equity has no explicit cost",
    ],
    answer: 0,
    explanation:
      "WACC is the blended required return for all capital providers, weighted by their proportion of the capital structure. The debt component is tax-adjusted because interest is tax-deductible, lowering its effective cost. WACC is used as the discount rate in an unlevered DCF to arrive at Enterprise Value.",
  },
  {
    id: 51,
    category: "Valuation & DCF",
    difficulty: "Hard",
    question: "Using the Capital Asset Pricing Model (CAPM), how is Cost of Equity calculated?",
    options: [
      "Cost of Equity = Risk-Free Rate + Beta × Equity Risk Premium",
      "Cost of Equity = Dividend Yield + Expected Revenue Growth Rate",
      "Cost of Equity = WACC × (Equity Value / Enterprise Value)",
      "Cost of Equity = Risk-Free Rate multiplied by Beta",
    ],
    answer: 0,
    explanation:
      "Cost of Equity = Risk-Free Rate + Beta × Equity Risk Premium. The risk-free rate is typically the 10-year US Treasury yield. Beta measures sensitivity to market movements (un-levered from comps, then re-levered for your company). The Equity Risk Premium (sourced from Ibbotson's) is the expected excess return of equities over risk-free assets.",
  },
  {
    id: 52,
    category: "Valuation & DCF",
    difficulty: "Medium",
    question: "What are the two methods for calculating terminal value in a DCF?",
    options: [
      "EBITDA Method and EBIT Method",
      "Gordon Growth Model (perpetuity growth rate) and Exit Multiple Method",
      "Sum-of-the-Parts and Liquidation Valuation",
      "Comparable Companies and Precedent Transactions",
    ],
    answer: 1,
    explanation:
      "Terminal value is calculated via (1) Exit Multiple Method: apply an EBITDA (or EBIT) multiple from comparable companies to the final projection year — most common in practice; or (2) Gordon Growth Model: TV = FCF × (1 + g) / (WACC − g), using a long-term sustainable growth rate. The Exit Multiple Method is preferred because it anchors to observable market data.",
  },
  {
    id: 53,
    category: "Valuation & DCF",
    difficulty: "Medium",
    question: "When is a DCF considered 'too dependent on future assumptions'?",
    options: [
      "When the projection period exceeds 3 years",
      "When terminal value represents significantly more than 50% of Enterprise Value — especially when it approaches 80–90%+",
      "When the discount rate (WACC) exceeds 10%",
      "When the company has negative EBITDA in year one of the projection",
    ],
    answer: 1,
    explanation:
      "When terminal value makes up 80–90%+ of Enterprise Value, the DCF is almost entirely driven by assumptions made about year 5 and beyond — making small changes in growth rate or exit multiple have huge impacts. In practice, terminal value typically represents 60–80%+ of EV for most mature companies, which is already quite high.",
  },
  {
    id: 54,
    category: "Valuation & DCF",
    difficulty: "Hard",
    question: "Why do you un-lever and then re-lever Beta when building a DCF?",
    options: [
      "To adjust for differences in each country's risk-free rate",
      "To strip each comparable company's capital structure out of its Beta, get a 'pure' measure of business risk, then re-apply your company's own capital structure",
      "To convert observed equity returns into asset returns using dividend yield adjustments",
      "To normalize Beta for differences in fiscal year reporting periods",
    ],
    answer: 1,
    explanation:
      "Observed (levered) Betas on Bloomberg reflect each company's unique debt load. Un-levering removes this effect to isolate business risk. After taking the median un-levered Beta of the comparable set, you re-lever it using your company's capital structure — so the final Beta in CAPM reflects your company's actual financial risk profile.",
  },
  {
    id: 55,
    category: "Valuation & DCF",
    difficulty: "Medium",
    question: "If you use Levered Free Cash Flow in a DCF instead of Unlevered FCF, what do you get and what discount rate should you use?",
    options: [
      "Enterprise Value; discount at WACC",
      "Equity Value; discount at Cost of Equity",
      "Book Value of Equity; discount at the risk-free rate",
      "Operating Value; discount at Cost of Debt",
    ],
    answer: 1,
    explanation:
      "Levered FCF is calculated after interest expense and debt repayments — it represents cash available only to equity holders. Discounting it at Cost of Equity gives Equity Value directly. Unlevered FCF (pre-interest) represents cash available to all investors and is discounted at WACC to give Enterprise Value.",
  },
  {
    id: 56,
    category: "Valuation & DCF",
    difficulty: "Medium",
    question: "Would a DCF or an LBO model typically produce a higher valuation for the same company?",
    options: [
      "LBO — because PE firms pay control premiums similar to precedent transactions",
      "DCF — because it captures interim cash flows that an LBO model ignores, and is not constrained by a target IRR",
      "They always produce identical values if the discount rate equals the target IRR",
      "LBO — because leverage amplifies the implied equity value",
    ],
    answer: 1,
    explanation:
      "A DCF is typically higher because it values both interim cash flows (years 1–5) and terminal value. An LBO model effectively only captures value at the exit (terminal value) — the interim cash flows are used to repay debt, not to increase the purchase price. PE firms also target specific IRRs (20–25%), which puts a ceiling on what they'll pay.",
  },

  // ─── Merger Models & LBO ─────────────────────────────────────────────────
  {
    id: 57,
    category: "Merger Models & LBO",
    difficulty: "Easy",
    question: "What does it mean for an acquisition to be 'accretive' vs. 'dilutive'?",
    options: [
      "Accretive means the buyer paid below book value; dilutive means it overpaid",
      "Accretive means the combined company's EPS is higher than the buyer's standalone EPS; dilutive means EPS falls",
      "Accretive means positive EBITDA synergies are realized immediately; dilutive means synergies are delayed",
      "Accretive means the deal creates goodwill; dilutive means goodwill is impaired",
    ],
    answer: 1,
    explanation:
      "Accretion/dilution measures the impact of an acquisition on the buyer's Earnings Per Share (EPS). If pro-forma (combined) EPS > standalone EPS, the deal is accretive. If lower, it's dilutive. This is the primary output of a merger model and is a key consideration for public company acquirers.",
  },
  {
    id: 58,
    category: "Merger Models & LBO",
    difficulty: "Medium",
    question: "In an all-stock deal, what is the rule of thumb for whether an acquisition will be accretive or dilutive?",
    options: [
      "If the deal creates cost synergies exceeding 10% of the target's revenue, it is always accretive",
      "If the buyer's P/E is higher than the seller's P/E, the deal is accretive; if the buyer's P/E is lower, the deal is dilutive",
      "If the buyer pays less than a 20% premium, the deal is accretive",
      "If the seller's revenue growth rate is higher than the buyer's, the deal is dilutive",
    ],
    answer: 1,
    explanation:
      "In an all-stock deal: buyer P/E > seller P/E → accretive (you're getting earnings at a cheaper multiple than the market values yours). Buyer P/E < seller P/E → dilutive. This shortcut ONLY works for all-stock deals — cash and debt transactions require a full analysis regardless of P/E ratios.",
  },
  {
    id: 59,
    category: "Merger Models & LBO",
    difficulty: "Easy",
    question: "Why is Goodwill created in an acquisition?",
    options: [
      "GAAP requires all intangible assets to be reclassified as goodwill at acquisition",
      "It represents the premium paid above the fair market value of the target's net identifiable assets",
      "It captures the expected revenue synergies discounted to present value",
      "It reflects deferred tax liabilities created by asset write-ups",
    ],
    answer: 1,
    explanation:
      "Goodwill = Equity Purchase Price − Fair Value of Net Identifiable Assets Acquired. When a buyer pays more than the identifiable assets are worth, the excess is booked as Goodwill. It reflects intangibles that don't appear on the balance sheet: brand value, customer relationships, workforce, and expected synergies. Under US GAAP, goodwill is not amortized but tested annually for impairment.",
  },
  {
    id: 60,
    category: "Merger Models & LBO",
    difficulty: "Easy",
    question: "What characteristics make a company an 'ideal' LBO candidate?",
    options: [
      "High revenue growth, minimal existing debt, and significant R&D investment",
      "Stable and predictable cash flows, low ongoing capex needs, hard asset collateral, and opportunities for cost reduction",
      "A rapidly growing tech company with high gross margins and negative EBITDA",
      "A government-regulated utility with cyclical earnings and high dividend obligations",
    ],
    answer: 1,
    explanation:
      "Ideal LBO candidates have: (1) stable/predictable FCF to service debt, (2) low capex requirements (more cash available for debt repayment), (3) hard assets to use as loan collateral, (4) cost-cutting opportunities to grow EBITDA, and (5) strong management. The most important factor is stable, predictable free cash flow.",
  },
  {
    id: 61,
    category: "Merger Models & LBO",
    difficulty: "Easy",
    question: "Why do private equity firms use significant leverage (debt) in LBOs?",
    options: [
      "To reduce the total acquisition price paid to the seller",
      "To maximize equity returns by minimizing the upfront equity capital contributed by the PE firm",
      "To lower the combined company's effective tax rate through interest deductions",
      "To prevent competing strategic bidders from also bidding for the target",
    ],
    answer: 1,
    explanation:
      "Leverage amplifies equity returns. If a PE firm buys a $1B company for $300M equity + $700M debt, any increase in company value accrues entirely to the equity. Earning $50M on $300M equity (16.7% return) is far better than earning $50M on $1B equity (5% return). The company — not the PE firm — bears the debt, so the firm's downside is limited to its equity investment.",
  },
  {
    id: 62,
    category: "Merger Models & LBO",
    difficulty: "Medium",
    question: "Which variables have the greatest impact on returns in an LBO model?",
    options: [
      "Revenue growth rate and working capital improvements",
      "Purchase multiple and exit multiple, followed by leverage used, then operational improvements (EBITDA growth/margins)",
      "Tax rate changes and movements in the risk-free interest rate",
      "Depreciation schedules and amortization of financing fees",
    ],
    answer: 1,
    explanation:
      "LBO returns are primarily driven by: (1) Entry/exit multiples — buying at 7x and selling at 9x is the most powerful lever; (2) Leverage — more debt means higher equity return for the same exit value; (3) Operational improvement — EBITDA growth and margin expansion. The classic PE return attribution: multiple expansion, EBITDA growth, debt paydown.",
  },
  {
    id: 63,
    category: "Merger Models & LBO",
    difficulty: "Medium",
    question: "What is a dividend recapitalization ('dividend recap') and why would a PE firm use one?",
    options: [
      "Reinvesting operating dividends from a portfolio company back into new capex",
      "The portfolio company takes on new debt to pay a special one-time dividend to the PE firm, returning invested equity capital before exit",
      "A PE firm issuing new equity to fund a dividend to its own LPs",
      "Converting retained earnings into a cash dividend to minority shareholders",
    ],
    answer: 1,
    explanation:
      "In a dividend recap, the portfolio company raises additional debt and distributes proceeds as a special dividend to the PE firm. This 'returns' equity capital early without requiring a sale or IPO. Because IRR is partly driven by how quickly capital is returned, recovering equity sooner boosts IRR — but it also loads the company with more debt and increases financial risk.",
  },
  {
    id: 64,
    category: "Merger Models & LBO",
    difficulty: "Hard",
    question: "What are the key differences between bank debt (senior secured) and high-yield bonds in an LBO?",
    options: [
      "Bank debt has fixed rates; high-yield bonds have floating rates tied to LIBOR",
      "High-yield bonds have higher fixed rates, bullet maturities, and incurrence covenants; bank debt has lower floating rates, scheduled amortization, and maintenance covenants",
      "Bank debt requires no covenants; high-yield bonds require quarterly financial compliance reporting",
      "High-yield bonds are only available to investment-grade issuers; bank debt is for sub-investment grade",
    ],
    answer: 1,
    explanation:
      "Bank debt: lower cost, floating rate (LIBOR/SOFR + spread), scheduled principal amortization, maintenance covenants (must maintain minimum ratios). High-yield bonds: higher cost, fixed rate, bullet maturity (full principal due at end), incurrence covenants (restrict specific actions but don't require ongoing ratio maintenance). Most LBOs use both tranches.",
  },
  {
    id: 65,
    category: "Merger Models & LBO",
    difficulty: "Medium",
    question: "Revenue synergies vs. cost synergies — which are taken more seriously in M&A analysis?",
    options: [
      "Revenue synergies, because they directly grow the combined company's top line and shareholder value",
      "Cost synergies, because they are more concrete — specific headcount and facilities can be identified and quantified",
      "Both are weighted equally by investment bankers in merger models",
      "Neither — all synergies are discounted to zero in standard analysis",
    ],
    answer: 1,
    explanation:
      "Cost synergies (eliminating redundant headcount, consolidating offices/facilities, renegotiating supplier contracts) are more credible because you can point to specific actions. Revenue synergies (cross-selling, geographic expansion) depend on customer behavior that is notoriously hard to predict and realize — most practitioners heavily discount them or ignore them entirely.",
  },
  {
    id: 66,
    category: "Merger Models & LBO",
    difficulty: "Hard",
    question: "In an M&A deal, would a seller prefer a stock purchase or an asset purchase? What about the buyer?",
    options: [
      "Seller prefers asset purchase (cleaner liability transfer); buyer prefers stock purchase (simpler diligence)",
      "Seller prefers stock purchase (single capital gains tax, all liabilities transfer to buyer); buyer prefers asset purchase (step-up in tax basis, selective liability assumption)",
      "Both parties universally prefer stock purchases for simplicity and speed",
      "Seller prefers asset purchase; buyer always uses a Section 338(h)(10) election instead",
    ],
    answer: 1,
    explanation:
      "Sellers prefer stock purchases: taxed once at capital gains rates, and all liabilities (including contingent/unknown ones) transfer to the buyer. Buyers prefer asset purchases: selective assumption of liabilities, and a 'step-up' in the tax basis of acquired assets allows depreciation/amortization deductions that reduce future cash taxes. Buyers often compensate sellers with a higher price to offset their tax disadvantage in an asset deal.",
  },
  {
    id: 67,
    category: "Merger Models & LBO",
    difficulty: "Medium",
    question: "What is the 'tax shield' in the context of a leveraged buyout?",
    options: [
      "An offshore holding structure that prevents the PE firm from paying capital gains taxes on exit",
      "The tax savings generated by deducting LBO debt interest expense, which reduces the company's tax bill and increases after-tax cash flow",
      "A special tax election that converts ordinary income to capital gains for LBO investors",
      "The step-up in asset tax basis from an asset purchase that reduces future depreciation taxes",
    ],
    answer: 1,
    explanation:
      "Interest expense on LBO debt is tax-deductible, so the company pays less in corporate taxes than it would debt-free. This 'tax shield' partially offsets the cost of debt — though the company's net FCF is still lower than without debt (the interest cost exceeds the tax savings). The shield is captured in WACC via the (1 − Tax Rate) multiplier on the cost of debt.",
  },
  {
    id: 68,
    category: "Merger Models & LBO",
    difficulty: "Medium",
    question: "What is an 'earnout' in an M&A deal, and why would a buyer offer one?",
    options: [
      "A clause requiring the seller to refund part of the purchase price if post-close revenue declines",
      "A deferred payment tied to the target hitting specific financial or operational milestones after closing",
      "An equity rollover mechanism where management co-invests in the combined company",
      "A breakup fee paid to the seller if the deal fails to close due to regulatory issues",
    ],
    answer: 1,
    explanation:
      "An earnout is a contingent payment — e.g., 'we'll pay you an additional $50M if you hit $200M in revenue within 2 years of closing.' Buyers use earnouts to bridge valuation gaps (especially common with private tech/SaaS companies with aggressive projections), incentivize management to stay and perform, and reduce upfront risk. They are uncommon in large public company acquisitions.",
  },

  // ─── Restructuring ───────────────────────────────────────────────────────
  {
    id: 69,
    category: "Restructuring",
    difficulty: "Easy",
    question: "What is the difference between Chapter 7 and Chapter 11 bankruptcy?",
    options: [
      "Chapter 7 is for individuals only; Chapter 11 applies exclusively to corporations",
      "Chapter 7 is liquidation (company ceases operations and assets are sold); Chapter 11 is reorganization (company restructures obligations and continues operating)",
      "Chapter 7 involves a court-supervised sale to a single buyer; Chapter 11 allows the company to negotiate with only the largest creditor",
      "Chapter 7 involves debt-for-equity swaps only; Chapter 11 allows both debt swaps and asset sales",
    ],
    answer: 1,
    explanation:
      "Chapter 7 = liquidation: the company is beyond saving; a trustee is appointed to sell off assets and distribute proceeds to creditors in order of priority. Chapter 11 = reorganization: the company survives but renegotiates its debt obligations — reducing interest rates, extending maturities, or swapping debt for equity — and emerges as a leaner entity.",
  },
  {
    id: 70,
    category: "Restructuring",
    difficulty: "Medium",
    question: "What is Debtor-in-Possession (DIP) financing?",
    options: [
      "Financing obtained by a company before it files for bankruptcy to help it avoid filing",
      "New financing raised by a company already in Chapter 11 bankruptcy that takes repayment priority over all existing debt, equity, and claims",
      "Loans provided by existing shareholders to replace equity with cheaper debt during a restructuring",
      "A revolving credit facility used to fund normal day-to-day operations for a healthy company",
    ],
    answer: 1,
    explanation:
      "DIP financing is provided to a company in Chapter 11. It has 'super-priority' status — it is repaid before all pre-existing creditors (even secured). Lenders accept this structure because of strict collateral and covenants. It provides the company with liquidity to keep operating (paying employees, suppliers) while it reorganizes. Access to DIP financing is sometimes a motivation for voluntarily filing Chapter 11.",
  },
  {
    id: 71,
    category: "Restructuring",
    difficulty: "Hard",
    question: "In a bankruptcy, what is the correct order of priority (highest to lowest) for claims on a company's assets?",
    options: [
      "Shareholders → Unsecured creditors → Secured creditors → DIP lenders",
      "DIP lenders → Secured creditors → Unsecured creditors → Subordinated debt → Mezzanine/Preferred → Common equity",
      "All creditors are treated equally under the absolute priority rule; only shareholders are subordinated",
      "Management bonuses and retention → DIP lenders → Secured creditors → Common shareholders",
    ],
    answer: 1,
    explanation:
      "The Absolute Priority Rule (APR) dictates: (1) DIP lenders, (2) Secured creditors (bank debt, revolvers — backed by collateral), (3) Unsecured creditors (high-yield bonds), (4) Subordinated debt, (5) Mezzanine/preferred equity, (6) Common equity. Lower-priority claimants receive nothing until all higher-priority claims are paid in full. In practice, shareholders almost always receive nothing in a true bankruptcy.",
  },
  {
    id: 72,
    category: "Restructuring",
    difficulty: "Medium",
    question: "What options are available to a distressed company that cannot meet its debt obligations?",
    options: [
      "The only options are declaring Chapter 11 bankruptcy or liquidating under Chapter 7",
      "Refinance/raise new capital, sell the company (whole or in parts), restructure existing obligations, or file for bankruptcy protection",
      "Convert all debt to equity without creditor consent using a Section 382 election",
      "Defer all interest payments for up to 5 years under GAAP restructuring rules",
    ],
    answer: 1,
    explanation:
      "Distressed companies have four main paths: (1) Refinance — raise new debt or equity; (2) Sell — whole company or specific assets (asset sale/divestiture); (3) Restructure obligations — negotiate with creditors to lower interest rates, extend maturities, or reduce principal; (4) File Chapter 11 to force a restructuring under court supervision. The best path depends on creditor receptivity, time available, and whether the business is viable.",
  },
  {
    id: 73,
    category: "Restructuring",
    difficulty: "Medium",
    question: "What typically happens to shareholders in a distressed sale or bankruptcy?",
    options: [
      "They receive the same proportional consideration as unsecured creditors",
      "They typically receive little to nothing, because a distressed company's liabilities usually exceed its asset value",
      "They receive at least par value of their shares, guaranteed by SEC regulations",
      "They are paid out first to avoid panic selling that would disrupt the restructuring process",
    ],
    answer: 1,
    explanation:
      "Shareholders sit at the bottom of the capital structure. If a company is truly distressed, the value of its liabilities (debt, obligations) typically exceeds the value of its assets — leaving nothing for equity after creditors are paid. This is why share prices of distressed companies often collapse toward zero. Equity holders only receive value if there is 'excess' after all creditors are made whole.",
  },
  {
    id: 74,
    category: "Restructuring",
    difficulty: "Medium",
    question: "What is the difference between a 'distressed M&A' process and a 'restructuring'?",
    options: [
      "They are synonyms — both refer exclusively to selling a bankrupt company to a new owner",
      "Restructuring is one specific outcome (changing debt terms) within the broader distressed M&A universe; distressed M&A can also end in sale, liquidation, or bankruptcy",
      "Distressed M&A only involves private companies; restructuring only applies to publicly listed companies",
      "Restructuring increases total debt outstanding; distressed M&A always reduces it",
    ],
    answer: 1,
    explanation:
      "Distressed M&A is the broader term — a company in financial distress can take many paths. Restructuring is a specific outcome: changing the terms of existing debt obligations (interest rate, maturity, principal reduction) to make them serviceable, without necessarily selling the company. Other outcomes include a full sale (to a strategic or PE buyer), an asset sale, or liquidation.",
  },
  {
    id: 75,
    category: "Restructuring",
    difficulty: "Hard",
    question: "How does valuation work differently for a distressed company compared to a healthy one?",
    options: [
      "Distressed companies are always valued at zero because they cannot generate positive EBITDA",
      "You use the same methodologies but apply lower multiples, adjust EBITDA for one-time costs, use conservative projections, and add a liquidation valuation to establish a floor",
      "You only use precedent transactions and completely ignore DCF and comparable company analysis",
      "You apply a standard 50% discount to whichever methodology produces the highest value",
    ],
    answer: 1,
    explanation:
      "The same three methodologies apply, but the inputs change: (1) Use the lower end (25th percentile or below) of multiple ranges; (2) Adjust EBITDA for non-recurring restructuring costs, excess vendor charges, and above-market salaries; (3) Use conservative 'turnaround scenario' projections; (4) Add a liquidation valuation to set a floor. If EBITDA is negative, shift to revenue multiples instead.",
  },
  {
    id: 76,
    category: "Restructuring",
    difficulty: "Medium",
    question: "In a distressed sale, why is having multiple bidders especially critical?",
    options: [
      "SEC regulations require a minimum of three bidders in any court-supervised auction",
      "Because the distressed seller has virtually no negotiating leverage — multiple competing bidders are the primary mechanism for achieving a better price",
      "Chapter 11 requires a competitive bidding process to prove fair value to the court",
      "Because creditors can only be fully repaid if a competitive auction process takes place",
    ],
    answer: 1,
    explanation:
      "In a normal M&A deal, the seller can walk away from a low offer, run a long process, or negotiate hard. A distressed company is running out of cash and time — it has almost no ability to reject offers. Competitive bidding from multiple parties is the only real lever to improve price. This is why Restructuring bankers work hard to attract both strategic buyers and financial sponsors simultaneously.",
  },
  {
    id: 77,
    category: "Restructuring",
    difficulty: "Hard",
    question: "What is a liquidation valuation and why can't you simply use the book value of shareholders' equity?",
    options: [
      "They are equivalent — both represent assets minus liabilities, so shareholders' equity is the same as liquidation value",
      "A liquidation valuation applies recovery rate discounts to each asset class (e.g., AR at 70–80%, inventory at 50%, intangibles at 0%), which typically differ significantly from book values",
      "Liquidation valuation only applies to PP&E and ignores current assets and intangibles",
      "Liquidation valuation equals enterprise value divided by the number of outstanding creditors",
    ],
    answer: 1,
    explanation:
      "Book value (shareholders' equity) assumes assets are worth their recorded amounts. In a forced liquidation, you'd actually recover: cash ~100%, AR ~70–80% (some customers won't pay), inventory ~40–60% (sold at distressed prices), PP&E varies (land/buildings ~80–100%, specialized equipment ~20–50%), intangibles/goodwill ~0% (no separate buyer for brand or relationships). Recovery rates almost always differ dramatically from book values.",
  },
  {
    id: 78,
    category: "Restructuring",
    difficulty: "Medium",
    question: "What is the end goal of a financial restructuring (as opposed to a liquidation)?",
    options: [
      "To eliminate all of the company's outstanding debt obligations entirely",
      "To change the terms of existing debt obligations — reducing interest rates, extending maturities, or reducing principal — so the company can service them and continue as a going concern",
      "To convert 100% of the company's debt to equity, eliminating all future interest payments",
      "To sell the company's most valuable assets and use the proceeds to pay down the highest-priority debt",
    ],
    answer: 1,
    explanation:
      "A restructuring modifies — it does not eliminate — debt. Lenders might agree to: lower the interest rate (e.g., 12% → 8%), extend the maturity by 3–5 years, grant a temporary payment holiday, or convert some debt to equity (debt-for-equity swap). The goal is to make obligations manageable so the company survives as a going concern — benefiting employees, suppliers, customers, and creditors who would otherwise recover even less in liquidation.",
  },
];
