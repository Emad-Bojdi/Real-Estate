import Profile from "@/models/Profile";
import DetailsPage from "@/template/DetailsPage";
import connectDB from "@/utils/connectDB"


const ProfileDetails = async ({params : {profileId}}) => {
    await connectDB();
    const profile = await Profile.findOne({_id : profileId});

    if (!profile) return <h3> مشکلی پیش آمده است </h3>
  return (
    <DetailsPage data={profile}/>
  )
}

export default ProfileDetails;

// export async function getStaticPaths() {
//     // Call an external API endpoint to get posts
//     const res = await fetch('http://localhost:3000/api/buy-residential')
//     const posts = await res.json()
   
//     // Get the paths we want to pre-render based on posts
//     const paths = posts.map((post) => ({
//       params: { id: post.id },
//     }))
   
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
//   }
