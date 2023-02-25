import { API_URI, POSTFIX } from "../../../const";
import { OrderCount } from "../OrderCount/OrderCount";
import style from "./OrderGoods.module.css";



export const OrderGoods = ({title, price, id, image, count, weight}) => {



    return (
        <li className={style.item} >
        <img
          className={style.image}
          src={`${API_URI}/${image}`}
          alt={title}
        />

        <div className={style.goods}>
          <h3 className={style.title}>{title}</h3>

          <p className={style.weight}>{weight}г</p>

          <p className={style.price}>
            {price}
            <span className={style.currency}> ₽</span>
          </p>
        </div>

<OrderCount count={count} id={id}/>
      </li>
    )
}