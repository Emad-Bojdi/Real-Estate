import styles from "@/module/SideBar.module.css"
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
                Object.entries(categories).map(([name, title]) => (
                    <Link key={name} href={`/buy-residential?category=${name}`}>
                        {title}
                    </Link>
                ))
            }
        </div>
    )
}

export default SideBar
