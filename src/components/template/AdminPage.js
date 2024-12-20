import styles from "@/template/AdminPage.module.css"

const AdminPage = ({profiles}) => {
  return (
    <div>
       {profiles.length ? null : <p className={styles.text}> هیچ آگهی در انتظار تاییدی وجود ندارد </p>}
       {profiles.map((i, index) => (<p key={index}>{i.title}</p>))}
    </div>
  )
}

export default AdminPage;
