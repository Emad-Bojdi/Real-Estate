"use client"

import CustomerDatePicker from "@/module/CustomerDatePicker"
import Loader from "@/module/Loader"
import RadioList from "@/module/RadioList"
import TextInput from "@/module/TextInput"
import TextList from "@/module/TextList"
import styles from "@/template/AddProfilePage.module.css"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from 'react'
import { Toaster, toast } from "react-hot-toast"
import { ThreeDots } from "react-loader-spinner"

const AddProfilePage = ({ data }) => {

    const [profileData, setProfileData] = useState({
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        category: "",
        rules: [],
        amenities: []
    });

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if(data) {
            setProfileData({
                ...data,
                rules: data.rules || [],
                amenities: data.amenities || []
            });
        }
    }, [data])

    const submitHandler = async () => {
        setLoading(true);
        const res = await fetch("/api/profile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(profileData),
        });
        const data = await res.json();
        setLoading(false);
        if (data.error) {
            toast.error(data.error);
        } else {
            toast.success(data.message);
            router.refresh();
            setProfileData({
                title: "",
                description: "",
                location: "",
                phone: "",
                price: "",
                realState: "",
                constructionDate: new Date(),
                category: "",
                rules: [],
                amenities: []
            });
        }
    }

    const editHandler = async () => {
        setLoading(true);
        const res = await fetch("/api/profile", {
            method: "PATCH",
            body: JSON.stringify(profileData),
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        setLoading(false);
        if (data.error) {
            toast.error(data.error);
        } else {
            toast.success(data.message);
        }
    }
    return (
        <div className={styles.container}>
            <h3> {data ? "ویرایش آگهی" : " ثبت آگهی "}</h3>
            <TextInput title="عنوان آگهی" name="title" profileData={profileData} setProfileData={setProfileData} />
            <TextInput title="توضیحات" name="description" profileData={profileData} setProfileData={setProfileData} textarea={true} />
            <TextInput title="آدرس" name="location" profileData={profileData} setProfileData={setProfileData} textarea={true} />
            <TextInput title="شماره تماس" name="phone" profileData={profileData} setProfileData={setProfileData} />
            <TextInput title="قیمت(تومان)" name="price" profileData={profileData} setProfileData={setProfileData} />
            <TextInput title="بنگاه" name="realState" profileData={profileData} setProfileData={setProfileData} />
            <RadioList profileData={profileData} setProfileData={setProfileData} />
            <TextList title="امکانات رفاهی" profileData={profileData} setProfileData={setProfileData} type="amenities" />
            <TextList title="قوانین" profileData={profileData} setProfileData={setProfileData} type="rules" />
            <CustomerDatePicker profileData={profileData} setProfileData={setProfileData} />
            {loading ? (
                <Loader />
            ) : data ? (<button className={styles.submit} onClick={editHandler}>ویرایش آگهی </button>) : (<button className={styles.submit} onClick={submitHandler}> ثبت آگهی </button>)}
            <Toaster />
        </div>
    )
}

export default AddProfilePage;
