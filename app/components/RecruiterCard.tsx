'use client';

import { TrendingUp, Award } from 'lucide-react';

interface RecruiterCardProps {
  recruiter: {
    id: string;
    name: string;
    specializations: string[];
    successRate: number;
    placements: number;
  };
}

export function RecruiterCard({ recruiter }: RecruiterCardProps) {
  return (
    <div className="bg-surface rounded-lg p-6 border border-white/10 hover:border-accent/50 transition-all duration-200 shadow-card">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
          <span className="text-lg font-semibold text-accent">
            {recruiter.name.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-fg">{recruiter.name}</h3>
          <div className="flex items-center gap-1 text-sm text-muted">
            <Award className="w-3 h-3" />
            <span>{recruiter.placements} placements</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-4 h-4 text-accent" />
        <span className="text-sm text-muted">Success Rate:</span>
        <span className="text-sm font-semibold text-accent">
          {recruiter.successRate}%
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {recruiter.specializations.map((spec) => (
          <span
            key={spec}
            className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
          >
            {spec}
          </span>
        ))}
      </div>

      <button className="w-full py-2 bg-accent/10 text-accent rounded-lg font-medium hover:bg-accent/20 transition-all duration-200">
        View Profile
      </button>
    </div>
  );
}
