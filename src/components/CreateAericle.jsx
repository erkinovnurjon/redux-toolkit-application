import { useState } from "react"
import { Input, TextArea } from "../ui"

const CreateArticle = () => {
      const [body , setBody] = useState('')
      const [ description , setDescription] = useState('')
      const [ title , setTitle] = useState('')
  return (
    <div className=" text-center">
      <h1 className=" text-4xl my-5">
         Create article
      </h1>
      <div className=" w-[60%] mx-auto">
            <form>
                  <Input label={'Title'} state={title} setState={setTitle} />
                  <TextArea label={"Description"} state={description} setState={setDescription} />
                  <TextArea label={"Body"} state={body} setState={setBody} height="250px" />
                  <button className='w-100 btn btn-lg bg-blue-600 btn-primary mt-2' type='submit'>
			   Create
			</button>
            </form>
      </div>
    </div>
  )
}

export default CreateArticle