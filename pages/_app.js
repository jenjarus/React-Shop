import '../styles/reset.css';
import '../styles/fonts.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/styles.scss';
import React from "react";
import { useRouter } from 'next/router';
import {Provider} from 'react-redux';
import store from '../reducers';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App({Component, pageProps}) {
    const router = useRouter();

    const Abc = () => {
        if(router.pathname === '/') {
            return (
                <main className="main-page">
                    <Component {...pageProps} />
                </main>
            )
        } else {
            return (
                <main>
                    <div className="container">
                        <Component {...pageProps} />
                    </div>
                </main>
            )
        }
    };

    return (
        <Provider store={store}>
            <div className="body">
                <Header />
                <Abc />
                <Footer />
            </div>
        </Provider>
    )
}
