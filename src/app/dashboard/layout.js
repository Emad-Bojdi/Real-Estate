import DashboardSidebar from "@/layout/DashboardSidebar"
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

// import { useRouter } from "next/router";

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin")
  }

  await connectDB();
  const user = await User.findOne({email: session.user.email});
  console.log(user)

  if(!user) return <h3>مشکلی پیش آمده است</h3>
  return (
    <DashboardSidebar>
      {children}
    </DashboardSidebar>
  )
}

export default DashboardLayout
