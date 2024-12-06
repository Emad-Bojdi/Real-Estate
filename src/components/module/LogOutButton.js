"use client"

import styles from "@/module/LogOutButton.module.css"
import { FiLogOut } from "react-icons/fi"
import { signOut } from "next-auth/react"

const LogOutButton = () => {
    return (
        <button className={styles.button} onClick={signOut}>
            <FiLogOut />
            خروج
        </button>
    )
}

export default LogOutButton
