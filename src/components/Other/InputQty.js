import {ReactComponent as IconMinus} from '../../images/icons/minus.svg';
import {ReactComponent as IconPlus} from '../../images/icons/plus.svg';

const InputQty = ({setCount, customClass = '', count = 1}) => {
    customClass ? customClass = ' ' + customClass : customClass = '';

    const handleCountIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleCountDecrement = () => {
        if(count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };

    const handleCountCharge = (e) => {
        setCount(+e.target.value.trim());
    };

    // Проверка на ввод чисел
    const countKeyPressNumber = (e) => {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <div className={"input-qty"+customClass}>
            <button className="btn btn--transparent input-qty__minus" onClick={handleCountDecrement}><IconMinus/></button>
            <input
                type="text"
                className="input-qty__input"
                value={count}
                onKeyPress={countKeyPressNumber}
                onChange={handleCountCharge}
            />
            <button className="btn btn--transparent input-qty__plus" onClick={handleCountIncrement}><IconPlus/></button>
        </div>
    )
};

export default InputQty;
