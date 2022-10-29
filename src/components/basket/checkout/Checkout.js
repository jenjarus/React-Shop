import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Form from "../../Other/Form";
import FormBlock from "../../Other/FormBlock";
import FormInput from "../../Other/FormInput";

const Checkout = () => {
    const checkoutItems = useSelector((store) => store.basket.items);
    const [loading, setLoading] = useState(false);
    const [productItems, setProductItems] = useState([]);
    const checkoutTotal = checkoutItems.reduce((partialSum, item) => partialSum + (item.price * item.qty), 0);

    const getCheckoutItems = async (items) => {
        setLoading(true);
        setProductItems([]);

        const dataItems = await Promise.all(items.map(async item => {
            try {
                const url = `https://api.punkapi.com/v2/beers/${item.id}`;
                const apiResponse = await fetch(url);
                const data = await apiResponse.json();
                const dataObject = {
                    id: data[0].id,
                    name: data[0].name,
                    price: data[0].ibu,
                    image_url: data[0].image_url,
                    qty: item.qty
                };

                return dataObject;
            } catch (err) {
                console.log(err);
            }
        }));

        setProductItems(dataItems);
        setLoading(false);
    };

    const getListItems = () => {
        return productItems.map(el => {
          return `- Название: ${el.name}; Цена: ${el.price}$; Количество: ${el.qty} шт.; Сумма: ${el.price * el.qty}$ \n`
      }).join('');
    };

    const RenderContent = () => {
        return (
            <div className="checkout">
                <Form
                    nameForm="checkout"
                    sendMessage={sendMessageCheckoutForm}
                    textBtn="Оформить заказ"
                >
                    <FormBlock classes="checkout-form__block">
                        <div className="checkout-form__block-title">Тип покупателя</div>
                        <div className="form-radio">
                            <input type="radio" id="type_client1" name="type_client" value="Физическое лицо" checked />
                            <label htmlFor="type_client1">Физическое лицо</label>
                        </div>
                        <div className="form-radio">
                            <input type="radio" id="type_client2" name="type_client" value="Юридическое лицо"/>
                            <label htmlFor="type_client22">Юридическое лицо</label>
                        </div>
                    </FormBlock>
                    <FormBlock classes="checkout-form__block">
                        <div className="checkout-form__block-title">Способ доставки</div>
                        <div className="form-radio">
                            <input type="radio" id="type_delivery1" name="type_delivery" value="Самовывоз" checked />
                            <label htmlFor="type_delivery1">Самовывоз</label>
                        </div>
                        <div className="form-radio">
                            <input type="radio" id="type_delivery2" name="type_delivery" value="Доставка курьером"/>
                            <label htmlFor="type_delivery2">Доставка курьером</label>
                        </div>
                        <div className="form-input">
                            <textarea name="delivery_address" id="delivery_address" />
                            <label htmlFor="delivery_address">Адрес доставки</label>
                        </div>
                    </FormBlock>
                    <FormBlock classes="checkout-form__block">
                        <div className="checkout-form__block-title">Способ оплаты</div>
                        <div className="form-radio">
                            <input type="radio" id="type_payment1" name="type_payment" value="Наличный расчет" checked />
                            <label htmlFor="type_payment1">Наличный расчет</label>
                        </div>
                        <div className="form-radio">
                            <input type="radio" id="type_payment2" name="type_payment" value="Безналичный расчет"/>
                            <label htmlFor="type_payment2">Безналичный расчет</label>
                        </div>
                    </FormBlock>
                    <FormBlock classes="checkout-form__block">
                        <div className="checkout-form__block-title">Данные покупателя</div>
                        <FormInput
                            nameInput="name"
                        >
                            Ваше ФИО
                        </FormInput>
                        <FormInput
                            nameInput="phone"
                            required={true}
                        >
                            Ваш телефон
                        </FormInput>
                        <FormInput
                            nameInput="email"
                            required={true}
                        >
                            Ваш e-mail
                        </FormInput>
                    </FormBlock>
                    <div className="checkout-form__block checkout-form__block--total">Итого: {checkoutTotal}$</div>
                    <FormBlock classes="checkout-form__block checkout-form__block--policy">
                        <div className="form-checkbox">
                            <input type="checkbox" id="policy" name="policy" checked="checked"/>
                            <label htmlFor="policy">Подтвердите согласие на обработку персональных данных</label>
                        </div>
                    </FormBlock>
                </Form>
            </div>
        )
    };

    const sendMessageCheckoutForm = (data) => {
        const msgName = data.name ? `ФИО: ${data.name.value}` : '';
        const msgPhone = data.phone ? `Телефон: ${data.phone.value}` : '';
        const msgEmail = data.email ? `Email: ${data.email.value}` : '';
        const msgProducts = productItems ? `Список товаров:\n\n${getListItems()}` : '';
        const msgTotal = `Общая сумма: ${checkoutTotal}$`;

        const msgText = `
Представим что это пришло на почту

Форма "Оформление заказа"
${msgName}
${msgPhone}
${msgEmail}
-----------
${msgProducts}
${msgTotal}
        `;

        console.log(msgText);
    };

    useEffect(() => {
        getCheckoutItems(checkoutItems)
    }, [checkoutItems.length]);

    return (
        <>
            <h1 className="page-title">Оформление заказа</h1>
            {RenderContent()}
        </>
    )
};

export default Checkout;

// TODO переулючать часть поля в зависимости от radio (тип покупателя, тип доставки)
// TODO изменить сообщение о покупке
// TODO добавить стили
