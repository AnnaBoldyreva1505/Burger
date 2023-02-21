
import { Order } from "../Order/Order";
import { Container } from "../Container/Container";
import style from "./Catalog.module.css";

export const Catalog = () => {
  return (
    <section className={style.catalog}>
      <Container className={style.catalog__container}>
        <Order />
        <div className={style.catalog__wrapper}>
          <h2 className={style.catalog__title}>Бургеры</h2>

          <div className={style.catalog__wrap_list}>
            <ul className={style.catalog__list}>
              <li className={style.catalog__item}>
                <article className={style.product}>
                  <img
                    src="../../assets/img/photo-5.jpg"
                    alt="Мясная бомба"
                    className={style.product__image}
                  />

                  <p className={style.product__price}>
                    689<span className={style.currency}>₽</span>
                  </p>

                  <h3 className={style.product__title}>
                    <button className={style.product__detail}>
                      Мясная бомба
                    </button>
                  </h3>

                  <p className={style.product__weight}>520г</p>

                  <button className={style.product_add} type="button">
                    Добавить
                  </button>
                </article>
              </li>

              <li className={style.catalog__item}>
                <article className={style.product}>
                  <img
                    src="../../assets/img/photo-1.jpg"
                    alt="Супер сырный"
                    className={style.product__image}
                  />

                  <p className={style.product__price}>
                    550<span className={style.currency}>₽</span>
                  </p>

                  <h3 className={style.product__title}>
                    <button className={style.product__detail}>
                      Супер сырный
                    </button>
                  </h3>

                  <p className={style.product__weight}>512г</p>

                  <button className={style.product__add} type="button">
                    Добавить
                  </button>
                </article>
              </li>

              <li className={style.catalog__item}>
                <article className={style.product}>
                  <img
                    src="../../assets/img/photo-3.jpg"
                    alt="Сытный"
                    className={style.product__image}
                  />

                  <p className={style.product__price}>
                    639<span className={style.currency}>₽</span>
                  </p>

                  <h3 className={style.product__title}>
                    <button className={style.product__detail}>Сытный</button>
                  </h3>

                  <p className={style.product__weight}>580г</p>

                  <button className={style.product__add} type="button">
                    Добавить
                  </button>
                </article>
              </li>

              <li className={style.catalog_item}>
                <article className={style.product}>
                  <img
                    src="../../assets/img/photo.jpg"
                    alt="Тяжелый удар"
                    className={style.product__image}
                  />

                  <p className={style.product_price}>
                    480<span className={style.currency}>₽</span>
                  </p>

                  <h3 className={style.product__title}>
                    <button className={style.product__detail}>
                      Тяжелый удар
                    </button>
                  </h3>

                  <p className={style.product__weight}>470г</p>

                  <button className={style.product__add} type="button">
                    Добавить
                  </button>
                </article>
              </li>

              <li className={style.catalog__item}>
                <article className={style.product}>
                  <img
                    src="../../assets/img/photo-2.jpg"
                    alt="Вечная классика"
                    className={style.product__image}
                  />

                  <p className={style.product__price}>
                    450<span className={style.currency}>₽</span>
                  </p>

                  <h3 className={style.product__title}>
                    <button className={style.product__detail}>
                      Вечная классика
                    </button>
                  </h3>

                  <p className={style.product_weight}>450г</p>

                  <button className={style.product__add} type="button">
                    Добавить
                  </button>
                </article>
              </li>

              <li className={style.catalog__item}>
                <article className={style.product}>
                  <img
                    src="../../assets/img/photo-4.jpg"
                    alt="Итальянский"
                    className={style.product__image}
                  />

                  <p className={style.product__price}>
                    560<span className={style.currency}>₽</span>
                  </p>

                  <h3 className={style.product__title}>
                    <button className={style.product__detail}>
                      Итальянский
                    </button>
                  </h3>

                  <p className={style.product__weight}>510г</p>

                  <button className={style.product__add} type="button">
                    Добавить
                  </button>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
