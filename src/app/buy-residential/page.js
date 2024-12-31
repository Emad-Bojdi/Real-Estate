import BuyResidentialPage from "@/template/BuyResidentialPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/models/User";


export const dynamic = 'force-dynamic';

async function BuyResidential({ searchParams }) {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/profile`, {
      cache: 'no-store', // Disable cache to get fresh data
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch profiles');
    }

    const data = await res.json();

    // Get user role
    const session = await getServerSession(authOptions);
    let userRole = "USER";
    
    if(session) {
      const user = await User.findOne({email: session.user.email});
      if(user) {
        userRole = user.role;
      }
    }

    // Filter data based on category if needed
    let finalData = data.data || [];
    if(searchParams?.category) {
      finalData = finalData.filter(i => i.category === searchParams.category);
    }
    

    return (
      <BuyResidentialPage 
        data={finalData} 
        role={userRole}
      />
    );
  } catch (error) {
    console.error('Error in BuyResidential:', error);
    return <div>خطا در بارگذاری اطلاعات</div>;
  }
}

export default BuyResidential;
