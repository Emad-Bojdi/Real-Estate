"use client"

import { AiOutlineDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"
import {Card} from "./Card"
import styles from "@/module/DashboardCard.module.css"
import { useRouter } from "next/navigation"



const DashboardCard = ({ data }) => {
    const router = useRouter();
    const editHandler = () => {
        router.push(`/dashboard/my-profiles/${data._id}`)
    }
    const deleteHandler = (e) => { }
    return (
        <div className={styles.container}>
            <Card data={data} />
            <div className={styles.main}>
                <button onClick={editHandler}>
                    ویرایش
                    <FiEdit />
                </button>
                <button onClick={deleteHandler}>
                    حذف آگهی
                    <AiOutlineDelete />
                </button>
            </div>

        </div>
    )
}

export default DashboardCard
