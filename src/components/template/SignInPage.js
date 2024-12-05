"use client"

import { useState } from "react";
import styles from "@/template/SignUpPage.module.css"
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Toaster, toast } from "react-host-toast";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";


const SignInPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const signInHandler = async (e) => {
        e.preventDefault();
        if (password !== rePassword) {
            toast.error("رمز و تکرار آن برابر نیست!!")
            return;
        }
        setLoading(true);
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false
        })
        const data = res.json();
        setLoading(false);
        if (res.error) toast.error(res.error)
        else {
            router.push("/signin")
        }
    }
    return (
        <div className={styles.form}>
            <h4> فرم ورود </h4>
            <form>
                <label> ایمیل :</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <label>  رمز عبور: </label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                {
                    loading ? (<ThreeDots color="304ffe" height={45} ariaLabel="three-dots-loading" visible={true} wrapperStyle={margin = "auto"} />) : (<button type="submit" onClick={signInHandler}>
                        ورود
                    </button>)
                }
            </form>
            <p>
                حساب کاربری ندارید؟
                <Link href="/signup">
                    ثبت نام
                </Link>
            </p>
            <Toaster />
        </div>
    )
}

export default SignInPage;
