import React from "react";
import Head from "next/head";

const NotFound = () => {
    return (
        <>
            <Head>
                <title>404 | Черное красное - магазин пива</title>
                <meta name="description" content="Черное красное - магазин пива" />
                <meta name="keywords" content="Черное красное, магазин пива, магазин, пиво" />
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
            </Head>
            <h1 className="page-title">Страница не найдена</h1>
            <p>404</p>
        </>
    );
};

export default NotFound;
