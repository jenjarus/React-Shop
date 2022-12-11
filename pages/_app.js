import '../styles/reset.css';
import '../styles/fonts.css';
import '../styles/styles.scss';
import {Provider} from 'react-redux';
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import store from '../reducers';

export default function App({Component, pageProps}) {
    return (
        <Provider store={store}>
            <div className="body">
                <Header/>
                <main>
                    <div className="container">
                        <Component {...pageProps} />
                    </div>
                </main>
                <Footer/>
            </div>
        </Provider>
    )
}
