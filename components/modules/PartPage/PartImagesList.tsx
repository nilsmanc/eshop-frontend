/* eslint-disable @next/next/no-img-element */
import { useStore } from 'effector-react'
import { useState } from 'react'
import { $boilerPart } from '@/context/boilerPart'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import styles from '@/styles/part/index.module.scss'

const PartImagesList = () => {
  const boilerPart = useStore($boilerPart)
  const isMobile = useMediaQuery(850)
  const images = boilerPart.images
    ? (JSON.parse(boilerPart.images) as string[])
    : []
  const [currentImgSrc, setCurrentImgSrc] = useState('')

  return (
    <div className={styles.part__images}>
      <div className={styles.part__images__main}>
        <img src={currentImgSrc || images[0]} alt={boilerPart.name} />
      </div>
      <ul className={styles.part__images__list}>
        {images.map((item, i) => (
          <div></div>
        ))}
      </ul>
    </div>
  )
}

export default PartImagesList
