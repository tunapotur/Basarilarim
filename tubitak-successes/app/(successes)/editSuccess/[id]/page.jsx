import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import getSuccess from "../../getSuccess";

//components
import EditForm from "./EditForm";
import BeforeLoginSignup from "@/app/components/BeforeLoginSignup";

export default async function EditSuccess({ params }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  const success = await getSuccess(params.id);

  console.log(success);

  if (data.session)
    return (
      <main>
        <h2 className="text-center">Update Success</h2>
        <EditForm success={success} />
      </main>
    );
  else return <BeforeLoginSignup />;
}
