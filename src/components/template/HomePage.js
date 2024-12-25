import React from 'react'
import { FiCircle } from 'react-icons/fi';
import styles from "@/template/HomePage.module.css"
import CategoryCard from '@/module/CategoryCard';
import { FaCity } from 'react-icons/fa';
import { cities, categories, services } from '@/constants/strings';

const HomePage = () => {

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
                   Object.entries(categories).map(([name, title]) => (
                       <CategoryCard key={name} name={name} title={title} />
                   ))
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
