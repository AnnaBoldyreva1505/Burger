import { OrderCount } from "../OrderCount/OrderCount";
import style from "./OrderGoods.module.css";



export const OrderGoods = () => {



    return (
        <li className={style.item} >
        <img
          className={style.image}
          src="../../assets/img/burger_1.jpg"
          alt="Супер сырный"
        />

        <div className={style.goods}>
          <h3 className={style.title}>Супер сырный</h3>

          <p className={style.weight}>512г</p>

          <p className={style.price}>
            1279
            <span className={style.currency}>₽</span>
          </p>
        </div>

<OrderCount count={11}/>
      </li>
    )
}