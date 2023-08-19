import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

// components
import DeleteButton from "./DeleteButton";

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const supabase = createServerComponentClient({ cookies });

  const { data: success } = await supabase
    .from("successes")
    .select()
    .eq("id", params.id)
    .single();

  return {
    title: `Success | ${success?.title || "Success not Found"}`,
  };
}

async function getSuccess(id) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase
    .from("successes")
    .select()
    .eq("id", id)
    .single();

  if (!data) {
    notFound();
  }

  return data;
}

export default async function SuccessDetail({ params }) {
  const success = await getSuccess(params.id);

  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <main>
      <nav>
        <h2>Success Details</h2>
        <div className="ml-auto">
          {data.session.user.email === success.user_email && (
            <DeleteButton id={success.id} />
          )}
        </div>
      </nav>
      <div className="card">
        <h3>{success.title}</h3>
        <small>Created by {success.user_email}</small>
        <p>{success.description}</p>
        <div className={`pill low`}>2021-10-10</div>
      </div>
    </main>
  );
}
