import { useSelector } from "react-redux"
import { Input, Loaderbutton, TextArea } from "../ui"

const ArticleForm = (props) => {
      const  {title , setTitle , body , setBody , description , setDescription , formSubmit } = props
      const {isLoading} = useSelector(state => state.article)

  
  return (
     <form onSubmit={formSubmit}>
                  <Input label={'Title'} state={title} setState={setTitle} />
                  <TextArea label={"Description"} state={description} setState={setDescription} />
                  <TextArea label={"Body"} state={body} setState={setBody} height="250px" />
                  <button className='w-100 btn btn-lg bg-blue-600 btn-primary mt-2' disabled={isLoading} type='submit'>
			   {isLoading ? <Loaderbutton /> : 'Create'}
			</button>
            </form>
  )
}

export default ArticleForm