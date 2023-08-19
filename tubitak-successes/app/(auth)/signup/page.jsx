"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// components
import AuthForm from "@/app/components/AuthForm";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Successes | User Sing Up",
};

export default function SignUp() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError("");

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });
    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.refresh();
      router.push("/verify");
    }
  };
  return (
    <main>
      <h2 className="text-center">Sign Up</h2>

      <AuthForm handleSubmit={handleSubmit} />

      {error && <div className="error">{error}</div>}
    </main>
  );
}
