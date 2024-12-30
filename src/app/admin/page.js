import connectDB from '@/utils/connectDB'
import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import User from '@/models/User';
import DashboardSidebar from '@/layout/DashboardSidebar';
import AdminPage from '@/template/AdminPage';
import Profile from '@/models/Profile';
import { redirect } from 'next/navigation';

export const metadata = {
  title: "پنل ادمین املاک",
};

const Admin = async () => {
    await connectDB();
    const session = await getServerSession(authOptions);
    if(!session) redirect("/signin");

    const user = await User.findOne({email : session.user.email})
    if(user.role !== "ADMIN") redirect("/dashboard");
    const serializedUser = JSON.parse(JSON.stringify(user))

    const profiles = await Profile.find({published : false})
  return (
    <DashboardSidebar role={serializedUser.role} email={serializedUser.email}>
        <AdminPage profiles={profiles}/>
    </DashboardSidebar>
  )
}

export default Admin;
