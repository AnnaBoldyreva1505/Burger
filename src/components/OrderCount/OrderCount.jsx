import { useDispatch } from "react-redux";
import style from "./OrderCount.module.css";
import {addProduct, removeProduct} from '../../store/order/orderSlice.js'


export const OrderCount = ({count, id}) => {
const dispatch = useDispatch()

const addCount = () => {
  dispatch(addProduct({id}))

}

const removeCount = () => {
  dispatch(removeProduct({id}))
}

return (
    <div className={style.count}>
    <button className={style.minus} onClick={removeCount}>-</button>
    <p className={style.amount}>{count}</p>
    <button className={style.plus} onClick={addCount}>+</button>
  </div>
);

}