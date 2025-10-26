'use client';

import { type ReactNode } from 'react';

interface StatsCardProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export function StatsCard({ icon, label, value }: StatsCardProps) {
  return (
    <div className="bg-surface rounded-lg p-6 border border-white/10 shadow-card">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-accent">{icon}</div>
        <span className="text-sm text-muted">{label}</span>
      </div>
      <p className="text-3xl font-semibold text-fg">{value}</p>
    </div>
  );
}
