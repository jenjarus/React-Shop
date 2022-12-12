import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import Head from "next/head";
import React from "react";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Контакты | Черное красное - магазин пива</title>
                <meta name="description" content="Черное красное - магазин пива" />
                <meta name="keywords" content="Черное красное, магазин пива, магазин, пиво, Контакты" />
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
            </Head>
            <h1>Контакты</h1>
            <div className="page page-contact">
                <div className="page-cols">
                    <div className="page-col__2">
                        <div className="contact-map">
                            <YMaps query={{
                                ns: 'use-load-option',
                                load: 'control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon'
                            }}>
                                <Map
                                    state={{
                                        center: [55.76, 37.64],
                                        zoom: 10,
                                        controls: ['zoomControl', 'fullscreenControl']
                                    }}
                                    height="500px"
                                    width="100%"
                                >
                                    <Placemark
                                        defaultGeometry={[55.749831, 37.570824]}
                                        properties={{
                                            balloonContentHeader: "Адрес",
                                            balloonContentBody: 'Магазин "Черное Красное"',
                                            balloonContentFooter: "Расположен тут",
                                        }}
                                        options={{
                                            preset: 'islands#redCircleDotIcon'
                                        }}
                                    />
                                </Map>
                            </YMaps>
                        </div>
                    </div>
                    <div className="page-col__2">
                        <div className="contacts__items">
                            <div className="contacts__item">
                                <div className="contacts__item-wrapper">
                                    <div className="contacts__item-title">Адрес</div>
                                    <div className="contacts__item-info">г. Москва, Кутузовский проспект, 1/7</div>
                                </div>
                            </div>
                            <div className="contacts__item">
                                <div className="contacts__item-wrapper">
                                    <div className="contacts__item-title">Телефон</div>
                                    <div className="contacts__item-info">
                                        <a href="tel:88005553535" className="contacts__item-info__link">8 (800) 555 35
                                            35</a>
                                    </div>
                                </div>
                            </div>
                            <div className="contacts__item">
                                <div className="contacts__item-wrapper">
                                    <div className="contacts__item-title">Почта</div>
                                    <div className="contacts__item-info">
                                        <a href="mailto:ck@shop.ru" className="contacts__item-info__link">ck@shop.ru</a>
                                    </div>
                                </div>
                            </div>
                            <div className="contacts__item">
                                <div className="contacts__item-wrapper">
                                    <div className="contacts__item-title">Режим работы</div>
                                    <div className="contacts__item-info">Каждый день 10:00 – 22:00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
