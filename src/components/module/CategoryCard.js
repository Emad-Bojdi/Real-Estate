import styles from "@/module/CategoryCard.module.css"
import Image from "next/image"
import Link from "next/link"

const CategoryCard = ({ name, title }) => {
    return (
        <div className={styles.card}>
            <Link href={"/"}>
                <Image alt={title} src={`/images/${name}.png`} width={240} height={144} priority={true} />
                <p>{title}</p>
            </Link>
        </div>
    )
}

export default CategoryCard