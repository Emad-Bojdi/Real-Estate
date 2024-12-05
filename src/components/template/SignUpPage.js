"use client"

import { useState } from "react";
import styles from "@/template/SignUpPage.module.css"
import Link from "next/link";
import { Toaster, toast } from "react-host-toast";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";


const SignUpPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [loading, setLoading] = useState(false);

    const signUpHandler = async (e) => {
        e.preventDefault();
        if (password !== rePassword) {
            toast.error("رمز و تکرار آن برابر نیست!!")
            return;
        }
        setLoading(true);
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = res.json();
        setLoading(false);
        if (res.status === 201) { router.push("/signin") }
        else {
            toast.error("این حساب کاربری وجود دارد.")
        }
    }
    return (
        <div className={styles.form}>
            <h4> فرم ثبت نام </h4>
            <form>
                <label> ایمیل :</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <label>  رمز عبور: </label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <label> تکرار رمز :</label>
                <input type="password" value={rePassword} onChange={e => setRePassword(e.target.value)} />
                {
                    loading ? (<ThreeDots color="304ffe" height={45} ariaLabel="three-dots-loading" visible={true} wrapperStyle={margin = "auto"} />) : (<button type="submit" onClick={signUpHandler}>
                        ثبت نام
                    </button>)
                }

            </form>
            <p>
                حساب کاربری دارید؟
                <Link href="/signin">
                    ورود
                </Link>
            </p>
            <Toaster />
        </div>
    )
}

export default SignUpPage
