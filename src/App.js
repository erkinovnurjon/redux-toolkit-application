/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Routes, Route} from 'react-router-dom'
import {Main, Login, Register, Navbar, Articledetail, CreateArticle} from './components'

import AuthService from './service/auth'
import {signUserSuccess} from './slice/auth'
import { getItem } from './helpers/storage'
import EditArticle from './components/EditArticle'
import "./ui/Response.css"
import NotFound from './components/NotFound'

const App = () => {
	const dispatch = useDispatch()

	const getUser = async () => {
		try {
			const response = await AuthService.getUser()
			dispatch(signUserSuccess(response.user))
		} catch (error) {
			console.log(error)
		}
	}

	

	useEffect(() => {
		const token = getItem('token')
		if (token) {
			getUser()
		}
		
	}, [])

	return (
		<>
		<Navbar />
		<div className='container mx-auto px-8'>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/article/:slug' element={<Articledetail />} />
				<Route path='/create-article' element={<CreateArticle /> } />
				<Route path='/edit-article/:slug' element={<EditArticle /> } />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div></>
	)
}
export default App