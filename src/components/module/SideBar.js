import styles from "@/module/Card"
import Link from "next/link"
import { HiFilter } from "react-icons/hi"


const SideBar = () => {

    const queries = [
        //In each object, the first index is the name and the second index is the value
        // keys are names, values are titles.
        { apartment: "آپارتمان" }, { villa: "ویلا" }, { office: "دفتر" }, { store: "مغازه" }
    ]
    return (
        <div className={styles.container}>
            <p>
                <HiFilter />
                دسته بندی
            </p>
            <Link href={"/buy-residential"}> همه </Link>
            {
                queries.map((query) => {
                    const [name] = Object.keys(query);
                    const title = query[name];
                    return (<Link key={name} href={{ pathname: "/buy-residential", query:{ category: title} }}></Link>)
                })
            }
        </div>
    )
}

export default SideBar
