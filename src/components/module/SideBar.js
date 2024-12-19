import styles from "@/module/Card"
import Link from "next/link"
import { HiFilter } from "react-icons/hi"
import { categories } from "@/constants/strings"

const SideBar = () => {


    return (
        <div className={styles.container}>
            <p>
                <HiFilter />
                دسته بندی
            </p>
            <Link href={"/buy-residential"}> همه </Link>
            {
                Object.keys(categories).map((i) => {
                    const [name] = i;
                    const title = categories[name];
                    return (<Link key={name} href={{ pathname: "/buy-residential", query:{ category: title} }}></Link>)
                })
            }
        </div>
    )
}

export default SideBar
