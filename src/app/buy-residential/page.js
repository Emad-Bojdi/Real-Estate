import BuyResidentialPage from "@/template/BuyResidentialPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

export const dynamic = 'force-dynamic';

async function BuyResidential({ searchParams }) {
  try {
    await connectDB();

    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/profile`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    const session = await getServerSession(authOptions);
    let userRole = "USER";
    
    if(session) {
      const user = await User.findOne({email: session.user.email});
      if(user) {
        userRole = user.role;
      }
    }

    let finalData = data.data || [];
    if (searchParams?.category) {
      finalData = finalData.filter(i => i.category === searchParams.category);
    }

    return <BuyResidentialPage data={finalData} role={userRole} />;
  } catch (error) {
    console.error('Error:', error);
    return <div>خطا در بارگذاری اطلاعات</div>;
  }
}

export default BuyResidential;
