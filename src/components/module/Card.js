import styles from "@/module/Card.module.css"
import { RiHome3Line } from "react-icons/ri"
import { MdApartment } from "react-icons/md"
import { BiStore } from "react-icons/bi"
import { GiOfficerChair } from "react-icons/gi"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { sp } from "@/utils/replaceNumber"
import Link from "next/link"


const Card = ({ data: { category, title, location, price } }) => {
    const icons = {
        villa: <RiHome3Line />,
        apartment: <MdApartment />,
        store: <BiStore />,
        office: <GiOfficerChair />
    }
    return (
        <div className={styles.container}>
            <div className={styles.icon}>{icons[category]} </div>
            <p className={styles.title}> {title}</p>
            <p className={styles.location}>
                <HiOutlineLocationMarker />
                {location}
            </p>
            <span>{sp(price)} تومان </span>
            <Link href="/"> مشاهده آگهی  </Link>
        </div>
    )
}

export default Card
