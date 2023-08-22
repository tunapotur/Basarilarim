"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// components
import AuthForm from "@/components/AuthForm";

export const metadata = {
  title: "Successes | User Login",
};

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError("");

    const supabase = createClientComponentClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <main>
      <h2 className="text-center">Login</h2>

      <AuthForm handleSubmit={handleSubmit} />

      {error && <div className="error">{error}</div>}
    </main>
  );
}
