import React from 'react'
import { FiCircle } from 'react-icons/fi';
import styles from "@/template/HomePage.module.css"
import CategoryCard from '@/module/CategoryCard';
import { FaCity } from 'react-icons/fa';

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
    const subjects = [
        { "villa": "ساختمان ویلایی" },
        { "apartment": "آپارتمان" },
        { "store": "مغازه" },
        { "office": "دفتر" },
    ]
    // console.log(Object.keys(i));
    return (
        <div>
            <div className={styles.banner}>
                <div className={styles.desc}>
                    <h1>سامانه خرید و اجاره ملک </h1>
                    <ul>
                        {
                            services.map(i => (
                                <li key={i}>
                                    <FiCircle />
                                    <span>{i}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.categories}>
                {
                    subjects.map(i => {
                        const [name] = Object.keys(i);
                        const title = i[name];
                        return <CategoryCard key={name} name={name} title={title} />;
                    })
                }
            </div>
            <div className={styles.city}>
                <h3>شهر های پر بازدید</h3>
                <ul >
                    {
                        cities.map(c => (
                            <li key={c}>
                                <FaCity />
                                <span>{c}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default HomePage;
