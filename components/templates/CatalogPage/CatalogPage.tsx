import styles from '@/styles/catalog/index.module.scss'
import { AnimatePresence } from 'framer-motion'
import { IQueryParams } from '@/types/catalog'

const CatalogPage = ({ query }: { query: IQueryParams }) => {
  return (
    <section className={styles.catalog}>
      <div className={`container ${styles.catalog__container}`}>
        <h2 className={`${styles.catalog__title} `}>Каталог товаров</h2>
        <div className={`${styles.catalog__top}`}>
          <AnimatePresence></AnimatePresence>
          <AnimatePresence></AnimatePresence>
          <div className={styles.catalog__top__inner}>
            <button className={`${styles.catalog__top__reset} `}>
              Сбросить фильтр
            </button>
            <button className={styles.catalog__top__mobile_btn}>
              <span className={styles.catalog__top__mobile_btn__svg}></span>
              <span className={styles.catalog__top__mobile_btn__text}>
                Фильтр
              </span>
            </button>
          </div>
        </div>
        <div className={styles.catalog__bottom}>
          <div className={styles.catalog__bottom__inner}>
            <ul className={styles.catalog__list}>
              <span>Список товаров пуст...</span>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CatalogPage
