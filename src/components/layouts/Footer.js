import styles from "@/layout/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.desc}>
                <h3>
                    سامانه خرید و اجاره ملک
                </h3>
                <p>
                    ncvneajnfajknvaej
                </p>
            </div>
            <div>
                <ul>
                    <li className="" >تعرفه قانونی </li>
                    <li className=""> دسترسی سریع </li>
                    <li className=""> مشاورین خبره </li>
                    <li className=""> قولنامه محضری </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
