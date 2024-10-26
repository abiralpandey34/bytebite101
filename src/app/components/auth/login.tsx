'use client';
import { useUserStore } from "@/app/store";
import { cookies } from "next/headers";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

export const LoginForm = ({loginUser}: any)=>{
    const router = useRouter()
    const {user, setUser} = useUserStore((store)=>store);

    const [formValues, setFormValues] = useState<any>({
        email:"",
        password:""
    });

    const onChange = (e: any)=>{        
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e:any)=>{
        e.preventDefault();
        const user = await loginUser(formValues);
        if(!user) alert("Incorrect email or password.");
        setUser(user);
    }

    return(
        <div className="bg-white p-8 rounded-lg shadow-lg mx-auto w-3/5 flex">
        {/* Illustration Section */}
        <div className="mr-5 p-2">
          <img
            src="https://media.istockphoto.com/id/1347843181/vector/male-customer-support-representative.jpg?s=612x612&w=0&k=20&c=FxyPI7ehP1HnKaw3cWgjfW2KUaYqhbpeNWPsE8knlk4="
            alt="Illustration"
            className=""
          />
        </div>
        <div className="flex flex-col">
            {/* Login Form */}
            <h2 className="text-2xl font-bold text-center mb-8">Log In</h2>

            <form className="space-y-6">
                {/* Name Input */}
                <div>
                    <label className="block text-gray-700">Your Email</label>
                    <input
                    name="email"
                    type="email"
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    placeholder="Enter your email"
                    value={formValues.email}
                    onChange={onChange}
                    />
                </div>

                {/* Password Input */}
                <div>
                    <label className="block text-gray-700">Password</label>
                    <input
                    type="password"
                    name="password"
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    placeholder="Enter your password"
                    value={formValues.password}
                    onChange={onChange}
                    />
                </div>

                {/* Remember Me */}
                <div className="flex items-center">
                    <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 text-gray-700">
                    Remember me
                    </label>
                </div>

                {/* Log In Button */}
                <button
                    onClick={onSubmit}
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Log In
                </button>
            </form>

            {/* Create an Account */}
            <div className="mt-6 text-center">
            <a href="#" className="text-blue-500 hover:underline">
                Create an account
            </a>
            </div>

            {/* Or Login With */}
            <div className="flex items-center justify-center mt-6">
            <div className="border-t border-gray-300 flex-1"></div>
            <span className="px-3 text-gray-600">or login with</span>
            <div className="border-t border-gray-300 flex-1"></div>
            </div>

            {/* Social Buttons */}
            <div className="flex justify-center mt-4 space-x-4">
            <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md">
                <i className="fab fa-facebook-f mr-2"></i> Facebook
            </button>
            <button className="flex items-center bg-blue-400 text-white px-4 py-2 rounded-md">
                <i className="fab fa-twitter mr-2"></i> Twitter
            </button>
            <button className="flex items-center bg-red-600 text-white px-4 py-2 rounded-md">
                <i className="fab fa-google mr-2"></i> Google
            </button>
            </div>
        </div>
      </div>
    )
}