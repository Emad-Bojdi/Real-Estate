import BuyResidentialPage from "@/template/BuyResidentialPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/models/User";

async function BuyResidential({searchParams}) {
  const res = await fetch("http://localhost:3000/api/profile", { cache: "no-store" });
  const data = await res.json();

  const session = await getServerSession(authOptions);
  let userRole = "USER";
  if(session){
    const user = await User.findOne({email: session.user.email})
    if(user){
      userRole = user.role;
    }
  }

  if(data.error) return <h3>مشکلی پیش امده است</h3>

  let finalData = data.data;
  if(searchParams.category){
    finalData = finalData.filter(i => i.category === searchParams.category)
  }
  
  return (
    <BuyResidentialPage data={finalData} role={userRole}/>
  )
}

export default BuyResidential
