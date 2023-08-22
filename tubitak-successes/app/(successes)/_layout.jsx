import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


// components
import Navbar from "@/components/Navbar";

export default async function SuccessesLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  let sessionMessage;

  if (!data.session) {
    sessionMessage = "You are not logged in";
  } else {
    sessionMessage = "You are logged in";
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

// TODO Gerekil değilse bu sayfayı sil.