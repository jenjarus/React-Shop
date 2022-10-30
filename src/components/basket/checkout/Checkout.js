import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Form from "../../Other/forms/Form";
import FormBlock from "../../Other/forms/FormBlock";
import FormInput from "../../Other/forms/FormInput";
import FormTextarea from "../../Other/forms/FormTextarea";
import FormRadio from "../../Other/forms/FormRadio";
import FormCheckbox from "../../Other/forms/FormCheckbox";

const Checkout = () => {
    const checkoutItems = useSelector((store) => store.basket.items);
    const [loading, setLoading] = useState(false);
    const [viewDelivery, setViewDelivery] = useState(false);
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
                    </FormBlock>
                    <FormBlock classes="checkout-form__block">
                        <div className="checkout-form__block-title">Способ доставки</div>
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
                        {viewDelivery && <FormTextarea
                            name="delivery_address"
                            required
                            rows={4}
                        >
                            Адрес доставки
                        </FormTextarea>}
                    </FormBlock>
                    <FormBlock classes="checkout-form__block">
                        <div className="checkout-form__block-title">Способ оплаты</div>
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
                    </FormBlock>
                    <FormBlock classes="checkout-form__block">
                        <div className="checkout-form__block-title">Данные покупателя</div>
                        <FormInput
                            name="name"
                        >
                            Ваше ФИО
                        </FormInput>
                        <FormInput
                            name="phone"
                            mask="+7 (999) 999-99-99"
                            required
                        >
                            Ваш телефон
                        </FormInput>
                        <FormInput
                            name="email"
                            required
                        >
                            Ваш e-mail
                        </FormInput>
                    </FormBlock>
                    <div className="checkout-form__block checkout-form__block--total">Итого: {checkoutTotal}$</div>
                    <FormBlock classes="checkout-form__block checkout-form__block--policy">
                        <FormCheckbox
                            num={1}
                            name="policy"
                            value="Согласие"
                            defaultChecked
                            required
                        >Подтвердите согласие на обработку персональных данных</FormCheckbox>
                    </FormBlock>
                </Form>
            </div>
        )
    };

    const sendMessageCheckoutForm = (data) => {
        const msgTypeClient = data['type_client'] ? `Тип клиента: ${data.type_client.value}` : '';
        const msgName = data.name ? `ФИО: ${data.name.value}` : '';
        const msgPhone = data.phone ? `Телефон: ${data.phone.value}` : '';
        const msgEmail = data.email ? `Email: ${data.email.value}` : '';
        const msgTypePayment = data['type_payment'] ? `Способ оплаты: ${data.type_payment.value}` : '';
        const msgTypeDelivery = data['type_delivery'] ? `Способ доставки: ${data.type_delivery.value}` : '';
        const msgAdr = data.delivery_address ? `Адрес доставки: ${data.delivery_address.value}` : '';
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
