/* eslint-disable no-use-before-define */
import { useState } from "react"
import ArticleForm from "./articleForm"
import ArticleService from "../service/article"
import { useDispatch } from "react-redux"
import { postArticleFailure, postArticleStart, postArticleSuccess } from "../slice/article"
import { useNavigate } from "react-router-dom"

const CreateArticle = () => {
      const [body , setBody] = useState('')
      const [ description , setDescription] = useState('')
      const [ title , setTitle] = useState('')
      const dispatch = useDispatch()
      const navigate = useNavigate()
      
      
      const formSubmit = async (e) => {
        e.preventDefault()
        const article = {body,title , description}
        dispatch(postArticleStart())
        try {
          await ArticleService.postArticle(article)
          dispatch(postArticleSuccess())
          navigate('/')
        } catch (error) {
          dispatch(postArticleFailure())
        }
      }
      const formProps = {title , setTitle , body , setBody , description , setDescription , formSubmit }
  return (
    <div className=" text-center">
      <h1 className=" text-4xl my-5">
         Create article
      </h1>
      <div className=" w-[60%] mx-auto">
           <ArticleForm {...formProps}/>
      </div>
    </div>
  )
}

export default CreateArticle