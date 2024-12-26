"use client"

import styles from "@/module/ShareButton.module.css"
import { useEffect, useState } from "react";
import {LuShare2} from "react-icons/lu"


const ShareButton = () => {
    const [url, setUrl] = useState();
    useEffect(()=>{
        setUrl(window.location.href);
    } , [])
  return (
    <div className={styles.container}>
      <LuShare2/>
      <button onClick={() => {navigator.clipboard.writeText(url)}}>
        اشتراک گزاری
      </button>
    </div>
  )
}

export default ShareButton
