# BountyBoard by Base

A recruiting platform leveraging Farcaster to connect companies seeking talent with specialized recruiters, facilitating job postings, bounty listings, candidate tracking, and on-chain payouts.

## Features

- 🎯 **Job Bounty Posting**: Companies post jobs with on-chain bounty escrow
- 👥 **Recruiter Profiles**: Verified recruiter profiles with specializations and success rates
- 📊 **Candidate Tracking**: Track candidates through hiring funnel stages
- 💰 **Automated Payouts**: Smart contract-based bounty releases upon successful placement
- 🔗 **Farcaster Integration**: Social-native experience with Frames and notifications
- ⚡ **Base Network**: Fast, low-cost transactions on Base L2

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet**: OnchainKit (Coinbase Wallet integration)
- **Social**: Farcaster Frame SDK
- **Styling**: Tailwind CSS with Coinbase theme
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
# Add your OnchainKit API key
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/       # React components
│   ├── Providers.tsx
│   ├── ConnectWallet.tsx
│   ├── JobCard.tsx
│   ├── RecruiterCard.tsx
│   └── StatsCard.tsx
├── layout.tsx       # Root layout
├── page.tsx         # Home page
├── loading.tsx      # Loading UI
├── error.tsx        # Error boundary
└── globals.css      # Global styles

public/
└── .well-known/
    └── farcaster.json  # Farcaster manifest
```

## Key Features Implementation

### Job Posting Flow
1. Company connects wallet
2. Posts job with bounty amount
3. Funds deposited to escrow smart contract
4. Job listed on platform

### Recruiter Flow
1. Recruiter creates profile
2. Browses open bounties
3. Submits candidates
4. Tracks candidate progress
5. Claims bounty upon successful placement

### Smart Contract Integration
- Bounty escrow with automated release
- ERC-20 token support for bounties
- Guarantee period enforcement
- Transparent on-chain records

## Deployment

Deploy to Vercel:

```bash
npm run build
vercel deploy
```

## License

MIT
