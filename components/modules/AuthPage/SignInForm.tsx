import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useStore } from 'effector-react'
import { useRouter } from 'next/router'
import { IInputs } from '@/types/auth'
import { singInFx } from '../../../app/api/auth'
import styles from '@/styles/auth/index.module.scss'
import spinnerStyles from '@/styles/spinner/index.module.scss'

const SignInForm = () => {
  const [spinner, setSpinner] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IInputs>()
  const route = useRouter()

  const onSubmit = async (data: IInputs) => {
    try {
      setSpinner(true)
      await singInFx({
        url: '/users/login',
        username: data.name,
        password: data.password,
      })

      resetField('name')
      resetField('password')
      route.push('/dashboard')
    } catch (error) {
      console.log(error)
    } finally {
      setSpinner(false)
    }
  }

  return (
    <form className={`${styles.form}`} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={`${styles.form__title} ${styles.title}`}>Войти на сайт</h2>
      <div />
      <div />
      <button
        className={`${styles.form__button} ${styles.button} ${styles.submit}`}
      >
        {spinner ? <div className={spinnerStyles.spinner} /> : 'SIGN IN'}
      </button>
    </form>
  )
}

export default SignInForm
