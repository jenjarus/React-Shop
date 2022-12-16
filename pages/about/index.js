/*import Image from 'next/image'
import imgOne from '../../images/about/about-1.png';
import imgTwo from '../../images/about/about-2.png';
import imgThree from '../../images/about/about-3.png';
import imgFour from '../../images/about/about-4.png';*/
import Head from "next/head";
import React from "react";

const About = () => {
    return (
        <>
            <Head>
                <title>О компании | Черное красное - магазин пива</title>
                <meta name="description" content="Черное красное - магазин пива" />
                <meta name="keywords" content="Черное красное, магазин пива, магазин, пиво, о компании" />
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
            </Head>
            <h1>О компании</h1>
            <div className="page page-about">
                <p className="page-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto
                    asperiores
                    aspernatur autem, commodi cumque eligendi eum ipsum itaque, laudantium modi obcaecati possimus quam
                    quia quo reprehenderit sunt vitae voluptatem?</p>
                <p className="page-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto
                    asperiores
                    aspernatur autem, commodi cumque eligendi eum ipsum itaque, laudantium modi obcaecati possimus quam
                    quia quo reprehenderit sunt vitae voluptatem?</p>
                <div className="page-img">
                    <img src={`${process.env.NEXT_PUBLIC_FAVICON}/images/about/about-1.png`} alt="about" />
                </div>
                <p className="page-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto
                    asperiores aspernatur autem, commodi cumque eligendi eum ipsum itaque, laudantium modi obcaecati
                    possimus quam quia quo reprehenderit sunt vitae voluptatem?
                </p>

                <div className="page-cols">
                    <div className="page-col__2">
                        <div className="page-img">
                            <img src={`${process.env.NEXT_PUBLIC_FAVICON}/images/about/about-2.png`} alt="about" />
                        </div>
                    </div>
                    <div className="page-col__2">
                        <p className="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            varius massa id eros venenatis hendrerit. Ut at diam in elit bibendum placerat sed nec
                            tortor. Ut non est tempus, imperdiet nisl et, semper eros. Ut finibus mattis tellus quis
                            pharetra. Phasellus auctor sollicitudin arcu nec tempor. Praesent a lacus neque. Curabitur
                            nibh velit, malesuada id tincidunt tincidunt, tempor at purus. Curabitur quis ipsum ac ex
                            luctus scelerisque. Vivamus mollis, ligula a tincidunt lacinia, nunc massa porta tortor, a
                            tincidunt nisl neque at nulla. Nam pulvinar metus rutrum turpis ultricies, sed suscipit est
                            tempor. Proin at lacus eget odio auctor pretium. Sed ut nisl nibh. Donec dictum vitae tellus
                            ut viverra.</p>
                        <p className="page-text">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                            inceptos himenaeos. Ut eleifend interdum lacus, eget vulputate mauris auctor non. Aenean sed
                            lectus felis. Donec id faucibus nisl. Etiam congue tristique nunc, nec pulvinar lacus
                            laoreet lacinia. Nulla efficitur suscipit bibendum. Morbi at pretium odio. Curabitur nec
                            odio enim.</p>
                        <p className="page-text">Proin tellus eros, efficitur et aliquet nec, condimentum eu est. Nunc
                            blandit nibh at ullamcorper finibus. Nunc sit amet quam finibus, fermentum enim et,
                            consequat arcu. Suspendisse mollis convallis sodales. Quisque arcu elit, egestas in neque
                            ut, scelerisque dictum tellus. Vestibulum sollicitudin nec ligula a dignissim. Interdum et
                            malesuada fames ac ante ipsum primis in faucibus. Nam vulputate egestas ultrices.
                            Suspendisse bibendum dui nibh, non porta metus porttitor nec. Donec nec lacinia nibh. In
                            dapibus nunc lectus, elementum vehicula tortor vulputate in. Donec tincidunt ornare libero
                            vel pulvinar. Suspendisse non ullamcorper mauris. Pellentesque eget libero sem. Aenean
                            ultrices nibh sagittis dui aliquet tincidunt. Sed efficitur mollis risus, a luctus arcu
                            blandit eget.</p>
                    </div>
                </div>
                <div className="page-cols page-cols--revers">
                    <div className="page-col__2">
                        <div className="page-img">
                            <img src={`${process.env.NEXT_PUBLIC_FAVICON}/images/about/about-3.png`} alt="about" />
                        </div>
                    </div>
                    <div className="page-col__2">
                        <p className="page-text">Quisque congue bibendum urna, ac maximus justo dignissim sit amet. Cras
                            feugiat enim ut elit
                            pellentesque, at molestie lorem mattis. Duis nisi turpis, pulvinar et auctor ut, malesuada
                            vitae
                            leo. Aliquam vel turpis nisl. Aenean dignissim euismod dignissim. Vivamus vel dui quis augue
                            cursus gravida nec ac odio. Vestibulum eget massa lacus. Phasellus placerat sodales augue.
                            Fusce
                            malesuada lobortis odio at ornare. Praesent ac malesuada diam. Nulla rutrum dapibus dolor.
                            Cras
                            egestas justo sed nunc congue, vel volutpat nisi commodo. Curabitur molestie euismod dui sit
                            amet pellentesque. Nulla facilisi. Quisque et iaculis purus. Pellentesque turpis risus,
                            consectetur ut scelerisque eget, mattis nec elit.</p>
                        <p className="page-text">Mauris in purus eu quam facilisis viverra vel sit amet mi. Maecenas
                            finibus imperdiet fringilla.
                            Integer at egestas odio. Duis purus diam, ornare quis aliquet at, consequat sed ex. Cras vel
                            blandit nulla. Nullam ac nisi dignissim, tempus risus nec, fermentum nibh. Cras nec molestie
                            ligula. Integer at orci erat. Phasellus vel lobortis sem. Sed nisl ex, facilisis vel eros
                            quis,
                            hendrerit ultricies dolor. Cras vitae semper lacus. Quisque rhoncus, nunc a finibus feugiat,
                            dui
                            tortor eleifend diam, eu lobortis nunc massa eget neque.</p>
                    </div>
                </div>
                <div className="page-cols">
                    <div className="page-col__2">
                        <div className="page-img">
                            <img src={`${process.env.NEXT_PUBLIC_FAVICON}/images/about/about-4.png`} alt="about" />
                        </div>
                    </div>
                    <div className="page-col__2">
                        <p className="page-text">Quisque fringilla ac dolor quis sagittis. Nunc vitae felis porta nisl
                            dignissim lobortis. Nunc
                            facilisis lectus sed leo tempus pharetra. Donec bibendum faucibus ligula, ac iaculis ipsum
                            egestas vitae. Integer ullamcorper suscipit lorem, quis ornare odio luctus vel. Quisque
                            massa
                            nisl, commodo tincidunt scelerisque sed, dapibus nec leo. Duis ultrices dictum ullamcorper.
                            Curabitur sollicitudin gravida vulputate. Quisque vel nisi id urna dignissim porta et id ex.
                            Quisque erat ante, scelerisque sit amet egestas ut, aliquam eget elit.</p>
                        <p className="page-text">Duis egestas lacinia nisi a tristique. Pellentesque habitant morbi
                            tristique senectus et netus
                            et malesuada fames ac turpis egestas. In ligula elit, condimentum vitae urna et, euismod
                            luctus
                            enim. Vivamus imperdiet mi enim, sed dapibus mi aliquam sit amet. Nullam congue varius
                            gravida.
                            Sed sit amet neque leo. Nullam erat felis, aliquet sit amet scelerisque sed, egestas id
                            metus.</p>
                        <p className="page-text">Aliquam convallis rhoncus tristique. Etiam gravida, felis sit amet
                            congue mollis, turpis ex
                            laoreet eros, a aliquet leo odio id arcu. Curabitur quis nisl pretium ipsum sodales vehicula
                            vitae id enim. Nulla molestie ac turpis sit amet semper. Pellentesque tempus, augue ut
                            sagittis
                            venenatis, lacus massa finibus ex, sit amet bibendum dui elit et ligula. Sed consequat
                            mauris
                            neque, sed dapibus erat sagittis a. Nulla in quam libero. Pellentesque pellentesque felis et
                            eros dictum egestas. Donec sapien enim, auctor a sapien a, varius gravida ligula. Nulla
                            facilisi. Donec a urna rhoncus enim tristique lobortis. Donec quis odio at velit suscipit
                            convallis. Nullam lacinia, massa sit amet varius tincidunt, leo quam aliquam elit, a
                            imperdiet
                            nulla sapien sed nibh. Nullam pharetra erat nulla, in consectetur nulla pulvinar quis.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
