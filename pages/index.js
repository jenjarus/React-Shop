import Head from 'next/head';
import Link from 'next/link';
import React from "react";
import Viewed from "../components/Other/viewed/Viewed";
import ConsultForm from "../components/mainPage/ConsultForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Черное красное - магазин пива</title>
        <meta name="description" content="Черное красное - магазин пива" />
        <meta name="keywords" content="Черное красное, магазин пива, магазин, пиво" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
      </Head>
      <div className="main-page">
        <div className="main-page__zaglushka">Страница пока в разарботке.<br/> Переходите сразу в каталог</div>
        <div className="main-page__buttons">
          <Link href="/catalog" className="btn main-page--main-page">Перейти в каталог</Link>
        </div>
      </div>
        <Viewed />
        <ConsultForm />
    </>
  )
}
