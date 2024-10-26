'use client'
import { useState } from "react"


export const RegisterForm = ({registerUser}:any)=>{

  const [formValues, setFormValues] = useState<any>({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
  });

  const onChange = (e:any)=>{
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e:any) =>{
    e.preventDefault();
    const response = await registerUser(formValues)
    if(response) alert('Failed')
    else alert("Success baby")
  }



    return(
        <div className="min-h-screen flex">
      {/* Left Side - Blue Background with Text */}
      <div className="w-1/2 bg-blue-500 flex flex-col justify-center items-center text-white p-8">
        <div className="text-center">
          <img
            src="/path-to-logo.png"
            alt="Bootstrap Brain Logo"
            className="w-40 h-auto mb-8"
          />
          <h1 className="text-3xl font-bold mb-4">
            We make digital products that drive you to stand out.
          </h1>
          <p className="text-lg">
            We write words, take photos, make videos, and interact with
            artificial intelligence.
          </p>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center p-12">
        <h2 className="text-2xl font-bold mb-6">Registration</h2>

        <form className="space-y-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              value={formValues.firstName}
              name="firstName"
              onChange={onChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formValues.lastName}
              onChange={onChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              name="email"
              value={formValues.email}
              onChange={onChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formValues.password}
              onChange={onChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
              I agree to the{' '}
              <a href="#" className="text-blue-500 hover:underline">
                terms and conditions
              </a>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            onClick={onSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign up
          </button>
        </form>

        {/* Already have an account */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/auth/login" className="text-blue-500 hover:underline">
              Sign in
            </a>
          </p>
        </div>

        {/* Social Login Options */}
        <div className="mt-8">
          <p className="text-center text-gray-500 mb-4">Or sign in with</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-700 flex items-center space-x-2">
              <img
                src="/path-to-google-icon.png"
                alt="Google"
                className="w-4 h-4"
              />
              <span>Google</span>
            </button>
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-700 flex items-center space-x-2">
              <img
                src="/path-to-facebook-icon.png"
                alt="Facebook"
                className="w-4 h-4"
              />
              <span>Facebook</span>
            </button>
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-700 flex items-center space-x-2">
              <img
                src="/path-to-twitter-icon.png"
                alt="Twitter"
                className="w-4 h-4"
              />
              <span>Twitter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}