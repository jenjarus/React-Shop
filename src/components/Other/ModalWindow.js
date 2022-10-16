import ReactDOM from "react-dom";
import {ReactComponent as IconClose} from '../../images/icons/close.svg';

const ModalWindow = ({title, isOpen, closeModal, classModal, children}) => {
    classModal = classModal ? ' ' + classModal : '';

    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <>
            <div className={"modal-window" + classModal}>
                <div className="modal-window__close" onClick={closeModal}><IconClose/></div>
                <div className="modal-window__title">{title}</div>
                <div className="modal-window__body">
                    {children}
                </div>
            </div>
            <div className="modal-window-bg" onClick={closeModal}></div>
        </>,
        document.body
    )
};

export default ModalWindow;
