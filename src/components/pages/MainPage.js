import {Link} from "react-router-dom";

const Contact = () => {
    return (
        <div className="main-page">
            <div className="main-page__zaglushka">Страница пока в разарботке.<br/> Переходите сразу в каталог</div>
            <div className="main-page__buttons">
                <Link to="/catalog" className="btn main-page--main-page">Перейти в каталог</Link>
            </div>
        </div>
    )};

export default Contact;
