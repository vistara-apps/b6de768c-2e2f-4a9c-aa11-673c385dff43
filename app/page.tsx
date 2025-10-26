'use client';

import { useEffect, useState } from 'react';
import { Briefcase, Users, TrendingUp, DollarSign } from 'lucide-react';
import { ConnectWallet } from './components/ConnectWallet';
import { JobCard } from './components/JobCard';
import { RecruiterCard } from './components/RecruiterCard';
import { StatsCard } from './components/StatsCard';

interface Job {
  id: string;
  title: string;
  company: string;
  bounty: string;
  location: string;
  specializations: string[];
}

interface Recruiter {
  id: string;
  name: string;
  specializations: string[];
  successRate: number;
  placements: number;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'recruiters'>('jobs');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mockJobs: Job[] = [
    {
      id: '1',
      title: 'Senior Full Stack Engineer',
      company: 'Base Protocol',
      bounty: '5,000 USDC',
      location: 'Remote',
      specializations: ['Engineering', 'Web3'],
    },
    {
      id: '2',
      title: 'Product Designer',
      company: 'Coinbase',
      bounty: '3,500 USDC',
      location: 'San Francisco',
      specializations: ['Design', 'Product'],
    },
    {
      id: '3',
      title: 'Smart Contract Developer',
      company: 'DeFi Labs',
      bounty: '8,000 USDC',
      location: 'Remote',
      specializations: ['Solidity', 'Web3'],
    },
  ];

  const mockRecruiters: Recruiter[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      specializations: ['Engineering', 'Web3'],
      successRate: 92,
      placements: 47,
    },
    {
      id: '2',
      name: 'Marcus Johnson',
      specializations: ['Design', 'Product'],
      successRate: 88,
      placements: 34,
    },
    {
      id: '3',
      name: 'Elena Rodriguez',
      specializations: ['Solidity', 'DeFi'],
      successRate: 95,
      placements: 28,
    },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-white/10 bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-fg">BountyBoard</h1>
                <p className="text-xs text-muted">by Base</p>
              </div>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-fg mb-4">
            Connect Companies with Top Recruiters
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Post bounties, track candidates, and automate payouts on Base
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatsCard
              icon={<Briefcase className="w-6 h-6" />}
              label="Active Bounties"
              value="127"
            />
            <StatsCard
              icon={<Users className="w-6 h-6" />}
              label="Verified Recruiters"
              value="342"
            />
            <StatsCard
              icon={<DollarSign className="w-6 h-6" />}
              label="Total Paid Out"
              value="$2.4M"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-white/10">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
                activeTab === 'jobs'
                  ? 'border-accent text-accent'
                  : 'border-transparent text-muted hover:text-fg'
              }`}
            >
              Open Bounties
            </button>
            <button
              onClick={() => setActiveTab('recruiters')}
              className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
                activeTab === 'recruiters'
                  ? 'border-accent text-accent'
                  : 'border-transparent text-muted hover:text-fg'
              }`}
            >
              Top Recruiters
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'jobs' ? (
              mockJobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              mockRecruiters.map((recruiter) => (
                <RecruiterCard key={recruiter.id} recruiter={recruiter} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-fg mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-muted mb-8">
            Join the future of recruiting on Base
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-all duration-200 shadow-card">
              Post a Job
            </button>
            <button className="px-8 py-3 bg-surface text-fg rounded-lg font-medium hover:bg-surface/80 transition-all duration-200 border border-white/10">
              Become a Recruiter
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
