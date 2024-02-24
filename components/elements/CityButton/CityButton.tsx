import { useStore } from 'effector-react'
import LocationSvg from '../LocationSvg/LocationSvg'
import { $mode } from '@/context/mode'
import styles from '@/styles/cityButton/index.module.scss'
import { $userCity, setUserCity } from '@/context/user'
import { toast } from 'react-toastify'
import spinnerStyles from '@/styles/spinner/index.module.scss'

const CityButton = () => {
  const mode = useStore($mode)
  const { city } = useStore($userCity)

  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  const getCity = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
    const success = async (pos: GeolocationPosition) => {
      try {
      } catch (error) {
        toast.error((error as Error).message)
      }
    }

    const error = (error: GeolocationPositionError) =>
      toast.error(`${error.code} ${error.message}`)

    navigator.geolocation.getCurrentPosition(success, error, options)
  }

  return (
    <button className={styles.city} onClick={getCity}>
      <span className={`${styles.city__span} ${darkModeClass}`}>
        <LocationSvg />
      </span>
      <span className={`${styles.city__text} ${darkModeClass}`}>
        <span
          className={spinnerStyles.spinner}
          style={{ top: '-10px', left: 10, width: 20, height: 20 }}
        />
      </span>
    </button>
  )
}

export default CityButton
