import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Yup Schema
const schema = yup.object({
    email: yup.string().email().required("Email is a required field"),
    password: yup.string().required("Password is a required field"),
  })

const Login= () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)
  return (
    <>
          
          <div className="w-full h-screen flex justify-center items-center bg-gray-900 p-8 border-r border-dashed">
          <div className="w-1/2 shadow-lg rounded-md bg-white p-8 flex flex-col" style={{height:'360px'}}>
        <h2 className="text-center font-medium text-2xl mb-4">
          Login
        </h2>
      <form onSubmit={handleSubmit(onSubmit)} 
      className="flex flex-1 flex-col justify-evenly">

         {/* EMAIL */}
        <input type="email" className="border focus:outline-none focus:ring focus:ring-blue-200  bg-gray-50  border-gray-300 p-[.35rem] rounded-md"
            placeholder="Email..." {...register('email')} />
        <p className="text-red-500 text-sm font-bold">{errors.email?.message}</p>
        {/* <br /> */}

        {/* PASSWORD */}
        <input type="password" className="border focus:outline-none focus:ring focus:ring-blue-200  bg-gray-50  border-gray-300 p-[.35rem] rounded-md"
            placeholder="Password" {...register('password')} />
        <p className="text-red-500 text-sm font-bold">{errors.password?.message}</p>
        <br />

        <button className = "bg-blue-600 block text-white py-2 font-bold rounded-lg" type="submit">LOGIN</button>
      </form>
      </div>
      </div>
    </>
  )
}

export default Login