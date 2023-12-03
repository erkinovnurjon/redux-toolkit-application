/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react'
import Icon from "../assets/images/Logo2.jpg"
import {Input, Loaderbutton} from '../ui'
import {useSelector, useDispatch} from 'react-redux'
import {signUserFailure, signUserStart, signUserSuccess} from '../slice/auth'
import AuthService from '../service/auth'
import ValidationError from './validation-error'
import { useNavigate } from 'react-router-dom'


const Register = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const {isLoading , loggedIn} = useSelector(state => state.auth)
  const navigate = useNavigate()

	const registerHandler = async e => {
		e.preventDefault()
		dispatch(signUserStart())
		const user = {username: name, email, password}
		try {
			const response = await AuthService.userRegister(user)
			dispatch(signUserSuccess(response.user))
		} catch (error) {
			dispatch(signUserFailure(error.response.data.errors))
		}
	}
  useEffect(() => {
    if(loggedIn){
      navigate('/')
    }
  } , [loggedIn])

	return (
		<div className='text-center mt-5'>
			<main className='form-signin w-25 m-auto'>
				{isLoading && <Loaderbutton />}
				<form>
					<div className=' flex justify-center  items-center'>
						<img className='mb-2   text-center' src={Icon} alt='d' width='72' height='60' />
					<h1 className='h3 mb-3 fw-normal md:h4'>Please register</h1>
					</div>
				  <ValidationError />

					<Input label={'Username'} state={name} setState={setName} />
					<Input label={'Email address'} state={email} setState={setEmail} />
					<Input label={'Password'} type={'password'} state={password} setState={setPassword} />

					<button className='w-100 btn btn-lg  bg-blue-600 btn-primary mt-2' disabled={isLoading} onClick={registerHandler} type='submit'>
						{isLoading ? <Loaderbutton /> : 'Register'}
					</button>
				</form>
			</main>
		</div>
	)
}

export default Register
