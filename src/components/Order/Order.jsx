import style from "./Order.module.css";
import {OrderGoods } from "../OrderGoods/OrderGoods.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const orderList = [ "Суперсырный", "Фри", "Хот-дог",
]

export const Order = () => {
const {totalPrice, totalCount} = useSelector(state => state.order)
const dispatch = useDispatch()
useEffect(() => {
  dispatch(order)
}) 


  return (
    <div className={style.order}>
      <section className={style.wrapper}>
        <div className={style.header} tabIndex="0" role="button">
          <h2 className={style.order_title}>Корзина</h2>

          <span className={style.count}>{totalCount}</span>
        </div>

        <div className={style.wrap_list}>
          <ul className={style.list}>
        {orderList.map(item => <OrderGoods title = {item}/>)}

          </ul>

          <div className={style.total}>
            <p>Итого</p>
            <p>
              <span className={style.amount}>{totalPrice} </span>
              <span className={style.currency}>₽</span>
            </p>
          </div>

          <button className={style.submit}>Оформить заказ</button>

          <div className={style.apeal}>
            <p className={style.text}>Бесплатная доставка</p>
            <button className={style.close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  );
};
