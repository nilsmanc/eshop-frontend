import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { IInputs } from '@/types/auth'
import { singUpFx } from '@/app/api/auth'
import styles from '@/styles/auth/index.module.scss'
import spinnerStyles from '@/styles/spinner/index.module.scss'

const SignUpForm = ({ switchForm }: { switchForm: () => void }) => {
  const [spinner, setSpinner] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IInputs>()

  const onSubmit = async (data: IInputs) => {
    try {
      setSpinner(true)
      const userData = await singUpFx({
        url: '/users/signup',
        username: data.name,
        password: data.password,
        email: data.email,
      })

      if (!userData) {
        return
      }

      resetField('email')
      resetField('name')
      resetField('password')
      switchForm()
    } catch (error) {
      console.log(error)
    } finally {
      setSpinner(false)
    }
  }

  return (
    <form className={`${styles.form}`} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={`${styles.form__title} ${styles.title}`}>
        Создать аккаунт
      </h2>
      <div />
      <div />
      <div />
      <button
        className={`${styles.form__button} ${styles.button} ${styles.submit} `}
      >
        {spinner ? <div className={spinnerStyles.spinner} /> : 'SIGN UP'}
      </button>
    </form>
  )
}

export default SignUpForm
