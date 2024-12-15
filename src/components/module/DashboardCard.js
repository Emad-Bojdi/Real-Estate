"use client"

import { AiOutlineDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"
import {Card} from "./Card"
import styles from "@/module/DashboardCard.module.css"
import { useRouter } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"



const DashboardCard = ({ data }) => {
    const router = useRouter();
    const editHandler = () => {
        router.push(`/dashboard/my-profiles/${data._id}`)
    }
    const deleteHandler = async() => {
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
        <Toaster/>
        </div>
    )
}

export default DashboardCard
