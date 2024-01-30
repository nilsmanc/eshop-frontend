/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick'
import { useStore } from 'effector-react'
import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { $mode } from '@/context/mode'

import styles from '@/styles/dashboard/index.module.scss'

const BrandsSlider = () => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  const brandItems = [
    { id: 1, img: '/img/brand-1.png', alt: 'brand-1' },
    { id: 2, img: '/img/brand-3.png', alt: 'brand-3' },
    { id: 3, img: '/img/brand-2.svg', alt: 'brand-2' },
    { id: 4, img: '/img/brand-4.png', alt: 'brand-4' },
    { id: 5, img: '/img/brand-1.png', alt: 'brand-1' },
    { id: 6, img: '/img/brand-3.png', alt: 'brand-3' },
    { id: 7, img: '/img/brand-2.svg', alt: 'brand-2' },
    { id: 8, img: '/img/brand-1.png', alt: 'brand-1' },
    { id: 9, img: '/img/brand-3.png', alt: 'brand-3' },
    { id: 10, img: '/img/brand-4.png', alt: 'brand-4' },
    { id: 11, img: '/img/brand-2.svg', alt: 'brand-2' },
    { id: 12, img: '/img/brand-1.png', alt: 'brand-1' },
  ]

  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 500,
  }

  return (
    <Slider {...settings} className={styles.dashboard__brands__slider}>
      {brandItems.map((item) => (
        <div
          className={`${styles.dashboard__brands__slide} ${darkModeClass}`}
          key={item.id}
        >
          <img src={item.img} alt={item.alt} />
        </div>
      ))}
    </Slider>
  )
}

export default BrandsSlider
