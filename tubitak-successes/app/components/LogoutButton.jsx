"use client";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const dynamic = 'force-dynamic'

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      // router.push("/login");
      router.refresh();
      router.push("/");
    }
  };

  return (
    <button className="btn-secondary" onClick={handleLogout}>
      Logout
    </button>
  );
}