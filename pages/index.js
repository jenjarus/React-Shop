import Head from 'next/head';
import React from "react";
import Banner from "../components/mainPage/Banner";
import MainLine from "../components/mainPage/MainLine";
import MainText from "../components/mainPage/MainText";
import TopProduct from "../components/mainPage/TopProduct";
import Viewed from "../components/Other/viewed/Viewed";
import ConsultForm from "../components/mainPage/ConsultForm";

export default function Home() {
    return (
        <>
            <Head>
                <title>Черное красное - магазин пива</title>
                <meta name="description" content="Черное красное - магазин пива"/>
                <meta name="keywords" content="Черное красное, магазин пива, магазин, пиво"/>
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`}/>
            </Head>
            <Banner/>
            <MainText/>
            <TopProduct/>
            <MainLine/>
            <div className="container">
                <Viewed/>
                <ConsultForm/>
            </div>
        </>
    )
}
