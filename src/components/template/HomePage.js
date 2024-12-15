import React from 'react'
import { FiCircle } from 'react-icons/fi';
import styles from "@/template/HomePage.module.css"

const HomePage = () => {
    const services = ['خرید', "فروش", "رهن", "اجاره"];
    const cities = [
        "تهران",
        "سنندج",
        "کرمانشاه",
        "اهواز",
        "مشهد",
        "اصفهان",
        "شیراز",
        "خرم آباد"
    ]
    return (
        <div>
            <div className={styles.banner}>
                <div className={styles.desc}>
                    <h1>سامانه خرید و اجاره ملک </h1>
                    <ul>
                        {
                            services.map(i =>  (
                                <li key={i}>
                                    <FiCircle/>
                                    <span>{i}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
