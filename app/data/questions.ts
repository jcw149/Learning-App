export type Category = "Investment Banking" | "Accounting";
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
];
