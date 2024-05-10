import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <div className="">
    <div className="flex items-center justify-center">
<SignIn path="/sign-in" />
    </div>
    </div>;
}