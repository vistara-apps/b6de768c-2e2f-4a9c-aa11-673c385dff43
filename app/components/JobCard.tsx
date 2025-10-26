'use client';

import { MapPin, DollarSign } from 'lucide-react';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    bounty: string;
    location: string;
    specializations: string[];
  };
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-surface rounded-lg p-6 border border-white/10 hover:border-accent/50 transition-all duration-200 shadow-card">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-fg mb-1">{job.title}</h3>
          <p className="text-sm text-muted">{job.company}</p>
        </div>
        <div className="flex items-center gap-1 text-accent font-semibold">
          <DollarSign className="w-4 h-4" />
          <span className="text-sm">{job.bounty}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted mb-4">
        <MapPin className="w-4 h-4" />
        <span>{job.location}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.specializations.map((spec) => (
          <span
            key={spec}
            className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
          >
            {spec}
          </span>
        ))}
      </div>

      <button className="w-full py-2 bg-accent/10 text-accent rounded-lg font-medium hover:bg-accent/20 transition-all duration-200">
        View Details
      </button>
    </div>
  );
}
