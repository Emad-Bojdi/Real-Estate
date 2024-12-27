"use client"

import styles from "@/module/Card.module.css"

import { BiLeftArrowAlt } from "react-icons/bi"
import { icons } from "@/constants/icons"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { sp } from "@/utils/replaceNumber"
import Link from "next/link"
import { AiOutlineDelete } from "react-icons/ai"


export const Card = ({ data: { _id, category, title, location, price }, role }) => {
    console.log(role)

    const deleteHandler = async () => {
        const res = await fetch(`/api/profile/delete/${data._id}`,
            {
                method: "DELETE",
            }
        )
        const info = await res.json();
        if (info.error) {
            toast.error(info.error);
        } else {
            toast.success(info.message);
            router.refresh();
        }
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
            <Link href={`/buy-residential/${_id}`}> مشاهده آگهی <BiLeftArrowAlt /> </Link>
            {
                role === "ADMIN" && (
                    <button onClick={deleteHandler}>
                        حذف آگهی
                        <AiOutlineDelete />
                    </button>
                )
            }
        </div>
    )
}


