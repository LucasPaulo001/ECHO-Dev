"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import { TUser } from "@/contexts/AuthContext";
import { MyProjectPage } from "@/Pages/MyProjects/MyProjects";
import { useState } from "react";




export default function MyProjects(){

    return(
        <>
            <Navbar />
            <MyProjectPage />
        </>
    )
}