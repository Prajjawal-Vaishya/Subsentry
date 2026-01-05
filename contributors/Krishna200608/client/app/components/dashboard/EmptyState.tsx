"use client";

import React from "react";
import { Construction } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50/50 p-8 text-center animate-in fade-in zoom-in duration-500">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 mb-6">
        <Construction className="h-8 w-8 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="max-w-md text-gray-500">{description}</p>
    </div>
  );
}