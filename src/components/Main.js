import { Route, Routes } from "react-router-dom"
import Header from './Header';
import Catalog from './catalog/Catalog';
import Basket from './basket/Basket';
import Favorite from "./favorite/Favorite";
import NotFound from './Other/NotFound';
import Footer from './Footer';

import '../styles/reset.css';
import '../styles/styles.scss';

const Main = () => {
  return (
    <div className="body">
        <Header />
        <main>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Catalog />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/favorite" element={<Favorite />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </main>
        <Footer />
    </div>
  );
};

export default Main;
