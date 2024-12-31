import BuyResidentialPage from "@/template/BuyResidentialPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/models/User";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";



// Generate static paths for categories
export async function generateStaticParams() {
  await connectDB();
  const categories = ["apartment", "villa", "store", "office"]; // your categories
  
  return categories.map((category) => ({
    searchParams: { category },
  }));
}
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

async function BuyResidential({ searchParams }) {
  try {
    
    const res = await fetch(`${BASE_URL}/api/profile`, {
      cache: 'no-store', 
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

    if(data.error) return <h3>مشکلی پیش امده است</h3>;

    let finalData = data.data;
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
    console.error('Error:', error);
    return <div>خطا در بارگذاری اطلاعات</div>;
  }
}

export default BuyResidential;
