import DashboardCard from "@/module/DashboardCard"
import styles from "@/template/MyProfilePage.module.css"

const MyProfilePage = ({ profiles }) => {
    return (
        <div>
            {!profiles.published && profiles.length ? null : <p className={styles.text}> هیچ آگهی ثبت نشده است </p>}
            {profiles.map(i => (<DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />))}
        </div>
    )
}

export default MyProfilePage
