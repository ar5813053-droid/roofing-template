# Premier Roofing Co. – Whop Websites Template

Production-ready roofing company website template built for the Whop bounty.

## Plan IDs (already configured)

| Plan              | ID                     | Price |
|-------------------|------------------------|-------|
| Roof Inspection   | plan_DaoMFnwaSClvP     | $149  |
| Project Deposit   | plan_QygSqo4yrxJ6U     | $500  |
| Flat Rate Service | plan_yr70QjjJVkojm     | $299  |

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev

# 3. Deploy to Whop
whop apps deploy
```

## What is implemented

- Responsive single-page site (mobile + desktop)
- Services, Pricing, How-it-works, Financing, Service Area, Reviews, Contact
- Config-driven (easy to rebrand – edit `src/lib/config.ts`)
- Custom tracking events:
  - `service_viewed`
  - `deposit_started`
  - `estimate_requested`
- Estimate form ready for Whop Leads API
- Checkout modal structure ready for Whop Payment Elements
  (CheckoutElement + ExpressCheckoutElement + BrandingElement)

## After deploy – important

1. Open the live `*.whop.site` URL
2. Test the estimate form (should create a Lead)
3. Test a checkout with one of the plans
4. Record 3–5 min screen video showing:
   - Live site
   - Successful checkout with Payment Elements
   - Estimate form creating a lead
   - Events firing (check browser network / Whop dashboard)

## Rebranding

Edit only `src/lib/config.ts`:
- companyName, tagline, phone, email
- plan names / prices / features
- services, serviceAreas, reviews
- colors

No structural changes needed.
