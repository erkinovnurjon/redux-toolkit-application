import { useState } from "react";
import Icon from "../assets/images/Logo2.jpg"
import Input from "../ui/Input";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password , setPassword] =useState('')

  return (
    <div className=' flex justify-center text-center'>
      <main className="form-signin w-96">
        <form onSubmit={handleSubmit}>
          <img className="mb-4 ml-36 my-12" src={Icon} alt="" width="92" height="67" />
          <h1 className="h3 mb-3 fw-normal">Please Register </h1>
           <Input label={'Username'} state={username} setState={setUsername} />
           <Input label={'Email address '} type={'email'} state={email} setState={setEmail} />
           <Input label={'Password'} type={'password'} state={password} setState={setPassword} /> 

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary bg-blue-600" type="submit">Register</button>
        </form>
      </main>
    </div>
  );
}

export default Register;
