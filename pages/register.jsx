import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Yup Schema
const schema = yup.object({
    name: yup.string().required("Name is a required field"),
    email: yup.string().email().required("Email is a required field"),
    password: yup.string().min(8).max(24).required("Password is a required field"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
  })

const Register= () => {
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
          <div className="w-1/2 shadow-lg rounded-md bg-white p-8 flex flex-col" style={{height:'560px'}}>
        <h2 className="text-center font-medium text-2xl mb-4">
          Registration
        </h2>
      <form onSubmit={handleSubmit(onSubmit)} 
      className="flex flex-1 flex-col justify-evenly">
        
        {/* NAME */}
        <input type="text" className="border focus:outline-none focus:ring focus:ring-blue-200  bg-gray-50  border-gray-300 p-[.35rem] rounded-md"
            placeholder="Name..."
         {...register('name')}  />
        <p className="text-red-500 text-sm font-bold">{errors.name?.message}</p>
        <br />

         {/* EMAIL */}
        <input type="email" className="border focus:outline-none focus:ring focus:ring-blue-200  bg-gray-50  border-gray-300 p-[.35rem] rounded-md"
            placeholder="Email..." {...register('email')} />
        <p className="text-red-500 text-sm font-bold">{errors.email?.message}</p>
        <br />

        {/* PASSWORD */}
        <input type="password" className="border focus:outline-none focus:ring focus:ring-blue-200  bg-gray-50  border-gray-300 p-[.35rem] rounded-md"
            placeholder="Password" {...register('password')} />
        <p className="text-red-500 text-sm font-bold">{errors.password?.message}</p>
        <br />

        {/* CONFIRM PASSWORD */}
        <input type="password" className="border focus:outline-none focus:ring focus:ring-blue-200  bg-gray-50  border-gray-300 p-[.35rem] rounded-md"
          {...register('confirmPassword')}
          placeholder="Retype Password..."
        />
        <p className="text-red-500 text-sm font-bold">{errors.confirmPassword && 'Passwords Do Not Match'}</p>
        <br />


        <button className = "bg-blue-600 block text-white py-2 font-bold rounded-lg" type="submit">SUBMIT</button>
      </form>
      </div>
      </div>
    </>
  )
}

export default Register