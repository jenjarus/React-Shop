import Link from "next/link";

const Banner = () => {
    return (
        <div className="main-banner">
            <video autoPlay muted loop>
                <source src={`${process.env.NEXT_PUBLIC_FAVICON}/video/main-banner-video.mp4`} type="video/mp4"/>
            </video>
            <div className="main-banner__container container">
                <div className="main-banner__wrapper">
                    <div className="main-banner__title">Пей пиво - местного разлива</div>
                    <div className="main-banner__subtitle">Только в <span className="main-banner__black">Черное</span> <span className="main-banner__red">красное</span></div>
                    <div className="main-banner__button">
                        <Link href="/catalog" className="btn main-page--main-page">Перейти в каталог</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;
