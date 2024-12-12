"use client"

import CustomerDatePicker from "@/module/CustomerDatePicker"
import Loader from "@/module/Loader"
import RadioList from "@/module/RadioList"
import TextInput from "@/module/TextInput"
import TextList from "@/module/TextList"
import styles from "@/template/AddProfilePage.module.css"
import { set } from "mongoose"

import React, { useState } from 'react'
import { Toaster, toast } from "react-hot-toast"
import { ThreeDots } from "react-loader-spinner"

const AddProfilePage = () => {

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
            toast.success("آگهی با موفقیت ثبت شد ");
        }
    }
    return (
        <div className={styles.container}>
            <h3> ثبت آگهی </h3>
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
                <Loader/>
            ) : <button className={styles.submit} onClick={submitHandler}> ثبت آگهی</button>}
            <Toaster />
        </div>
    )
}

export default AddProfilePage
