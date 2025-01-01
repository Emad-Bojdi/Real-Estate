import BuyResidentialPage from "@/template/BuyResidentialPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import Profile from "@/models/Profile";

export const dynamic = 'force-dynamic';

async function BuyResidential({ searchParams }) {
  try {
    await connectDB();

    // Get all published profiles
    const profiles = await Profile.find({ published: true })
      .select("-userId -__v") // Exclude unnecessary fields
      .lean(); // Convert to plain JavaScript object
    
    // Get user role
    const session = await getServerSession(authOptions);
    let userRole = "USER";
    
    if(session) {
      const user = await User.findOne({ email: session.user.email });
      if(user) {
        userRole = user.role;
      }
    }

    // Convert MongoDB documents to plain objects and handle _id
    const serializedProfiles = profiles.map(profile => ({
      ...profile,
      _id: profile._id.toString(),
      createdAt: profile.createdAt?.toISOString(),
      updatedAt: profile.updatedAt?.toISOString()
    }));

    // Filter by category if needed
    let finalData = serializedProfiles;
    if (searchParams?.category) {
      finalData = finalData.filter(i => i.category === searchParams.category);
    }

    return <BuyResidentialPage data={finalData} role={userRole} />;
  } catch (error) {
    console.error('Error in BuyResidential:', error);
    return <div>خطا در بارگذاری اطلاعات</div>;
  }
}

export default BuyResidential;
