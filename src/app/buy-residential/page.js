import User from "@/models/User";
import BuyResidentialPage from "@/template/BuyResidentialPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const dynamic = 'force-dynamic';

async function BuyResidential({ searchParams }) {
  
  const res = await fetch(`${BASE_URL}/api/profile`, {
    cache: "no-store",
  });
  const data = await res.json();

  const session = await getServerSession(authOptions);
    let userRole = "USER";
    
    if(session) {
      const user = await User.findOne({email: session.user.email});
      if(user) {
        userRole = user.role;
      }
    }

  if (data.error) return <h3>مشکلی پیش آمده است</h3>;

  let finalData = data.data;
  if (searchParams.category) {
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }

  return <BuyResidentialPage data={finalData} role={userRole}/>;
}

export default BuyResidential;
