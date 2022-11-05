import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {resetProduct} from "../../../actions/basket";
import Form from "../../Other/forms/Form";
import FormDiv from "../../Other/forms/FormDiv";
import FormInput from "../../Other/forms/FormInput";
import FormTextarea from "../../Other/forms/FormTextarea";
import FormRadio from "../../Other/forms/FormRadio";
import FormCheckbox from "../../Other/forms/FormCheckbox";

const Checkout = () => {
    const dispatch = useDispatch();
    const checkoutItems = useSelector((store) => store.basket.items);
    const users = useSelector((store) => store.users.users);
    const authId = useSelector((store) => store.authentication.id);
    const userData = authId ? users.find(user => user.id === authId) : {};
    const [viewDelivery, setViewDelivery] = useState(false);
    const [successCheckoutPage, setSuccessCheckoutPage] = useState(false);
    const [productItems, setProductItems] = useState([]);
    const checkoutTotal = checkoutItems.reduce((partialSum, item) => partialSum + (item.price * item.qty), 0);

    const getCheckoutItems = async (items) => {
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
    };

    const getListItems = () => {
        return productItems.map(el => {
          return `- Название: ${el.name}; Цена: ${el.price}$; Количество: ${el.qty} шт.; Сумма: ${el.price * el.qty}$ \n`
      }).join('');
    };

    const RenderContent = () => {
        if(checkoutItems.length || successCheckoutPage) {
            const authName = authId ? userData.name : '';
            const authPhone = authId ? userData.phone : '';
            const authEmail = authId ? userData.email : '';

            return (
                <div className="checkout">
                    <Form
                        nameForm="checkout"
                        successText={successCheckout}
                        sendMessage={sendMessageCheckoutForm}
                        textBtn="Оформить заказ"
                    >
                        <FormDiv classes="checkout-form__block">
                            <FormDiv classes="checkout-form__block-title">Тип покупателя</FormDiv>
                            <FormDiv classes="checkout-form__block-radio">
                                <FormRadio
                                    num={1}
                                    name="type_client"
                                    value="Физическое лицо"
                                    defaultChecked
                                >
                                    Физическое лицо
                                </FormRadio>
                                <FormRadio
                                    num={2}
                                    name="type_client"
                                    value="Юридическое лицо"
                                >
                                    Юридическое лицо
                                </FormRadio>
                            </FormDiv>
                        </FormDiv>
                        <FormDiv classes="checkout-form__block">
                            <FormDiv classes="checkout-form__block-title">Способ доставки</FormDiv>
                            <FormDiv classes="checkout-form__block-radio">
                                <FormRadio
                                    num={1}
                                    name="type_delivery"
                                    value="Самовывоз"
                                    defaultChecked
                                    onChanges={() => setViewDelivery(false)}
                                >Самовывоз</FormRadio>
                                <FormRadio
                                    num={2}
                                    name="type_delivery"
                                    value="Доставка курьером"
                                    onChanges={() => setViewDelivery(true)}
                                >Доставка курьером</FormRadio>
                            </FormDiv>
                            {viewDelivery && <FormTextarea
                                name="delivery_address"
                                required
                                rows={4}
                            >
                                Адрес доставки
                            </FormTextarea>}
                        </FormDiv>
                        <FormDiv classes="checkout-form__block">
                            <FormDiv classes="checkout-form__block-title">Способ оплаты</FormDiv>
                            <FormDiv classes="checkout-form__block-radio">
                                <FormRadio
                                    num={1}
                                    name="type_payment"
                                    value="Наличный расчет"
                                    defaultChecked
                                >Наличный расчет</FormRadio>
                                <FormRadio
                                    num={2}
                                    name="type_payment"
                                    value="Безналичный расчет"
                                >Безналичный расчет</FormRadio>
                            </FormDiv>
                        </FormDiv>
                        <FormDiv classes="checkout-form__block">
                            <FormDiv classes="checkout-form__block-title">Данные покупателя</FormDiv>
                            <FormInput
                                name="name"
                                defaultValue={authName}
                            >
                                Ваше ФИО
                            </FormInput>
                            <FormInput
                                type="phone"
                                name="phone"
                                mask="+7 (999) 999-99-99"
                                required
                                defaultValue={authPhone}
                            >
                                Ваш телефон
                            </FormInput>
                            <FormInput
                                type="email"
                                name="email"
                                required
                                defaultValue={authEmail}
                            >
                                Ваш e-mail
                            </FormInput>
                        </FormDiv>
                        <FormDiv classes="checkout-form__block checkout-form__block--total">Итого: {checkoutTotal}$</FormDiv>
                        <FormDiv classes="checkout-form__block checkout-form__block--policy">
                            <FormCheckbox
                                name="policy"
                                value="Согласие"
                                defaultChecked
                                required
                            >Подтвердите согласие на обработку персональных данных</FormCheckbox>
                        </FormDiv>
                    </Form>
                </div>
            )
        } else {
            return (
                <p>Корзина пуста</p>
            )
        }
    };

    const sendMessageCheckoutForm = (data) => {
        dispatch(resetProduct());
        const msgTypeClient = data['type_client'] ? `Тип клиента: ${data.type_client}` : '';
        const msgName = data.name ? `ФИО: ${data.name}` : '';
        const msgPhone = data.phone ? `Телефон: ${data.phone}` : '';
        const msgEmail = data.email ? `Email: ${data.email}` : '';
        const msgTypePayment = data['type_payment'] ? `Способ оплаты: ${data.type_payment}` : '';
        const msgTypeDelivery = data['type_delivery'] ? `Способ доставки: ${data.type_delivery}` : '';
        const msgAdr = data.delivery_address ? `Адрес доставки: ${data.delivery_address}` : '';
        const msgProducts = productItems ? `Список товаров:\n\n${getListItems()}` : '';
        const msgTotal = `Общая сумма: ${checkoutTotal}$`;

        const msgText = `
Представим что это пришло на почту

Форма "Оформление заказа"
${msgTypeClient}
${msgName}
${msgPhone}
${msgEmail}
${msgTypePayment}
${msgTypeDelivery}
${msgAdr}
-----------
${msgProducts}
${msgTotal}
        `;

        console.log(msgText);
        setSuccessCheckoutPage(true);
    };

    const successCheckout = () => {
        return (
            <div className="form-success form-success--checkout">
                <div className="form-success__title">Спасибо за покупку</div>
                <div className="form-success__text">Мы свяжемся с вами в ближайшее время.</div>
            </div>
        )
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
