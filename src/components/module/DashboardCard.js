"use client"

import { AiOutlineDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"
import Card from "./Card"
import styles from "@/module/DashboardCard.module.css"



const DashboardCard = ({ data }) => {
    const editHandler = (e) => { }
    const deleteHandler = (e) => { }
    return (
        <div>
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
