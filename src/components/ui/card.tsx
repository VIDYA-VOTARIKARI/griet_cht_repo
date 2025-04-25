import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl shadow-lg p-4 bg-white">{children}</div>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-2">{children}</div>
);
