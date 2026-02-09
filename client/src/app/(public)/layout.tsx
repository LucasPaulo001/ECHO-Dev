"use client";

import PublicGuard from "./publicGuard";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PublicGuard>
      <div>{children}</div>
    </PublicGuard>
  );
}
