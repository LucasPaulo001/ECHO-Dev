// guards/PublicGuard.tsx
"use client";

import { LoadingPage } from "@/components/LoadingPage/LoadingPage";
import { useAuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PublicGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && token) {
      router.replace("/");
    }
  }, [token, loading]);

  if (loading) return <LoadingPage />;
  if (token) return null;

  return children;
}
