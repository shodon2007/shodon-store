import { ChangeEvent, MouseEvent, useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from 'src/app/providers/redux'
import { ModalContext } from 'src/widgets/Modal'

import authApi from 'src/shared/api/authApi'
import Button from 'src/shared/ui/Button/Button'
import Input from 'src/shared/ui/Input/Input'

import cls from './Auth.module.scss'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const closeModal = useContext(ModalContext)

  async function loginClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    const res = await authApi.login(username, password)

    if (res instanceof Error && res.name === 'AxiosError') {
      return alert(res.response.data.message)
    }

    if ('data' in res) {
      dispatch(
        login({
          token: res.data.token,
          username: res.data.username,
        }),
      )
    }

    setUsername('')
    setPassword('')

    closeModal.closeModal()
  }

  return (
    <form className={cls.form}>
      <div className={cls.inputs}>
        <Input
          type='text'
          placeholder='login'
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
        <Input
          type='password'
          minLength={8}
          placeholder='password'
          required
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <Button className={cls.button} onClick={e => loginClick(e)}>
        Войти
      </Button>
    </form>
  )
}

export default Login
