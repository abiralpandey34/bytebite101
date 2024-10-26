'use client'

import _ from "lodash";
import Link from "next/link";
import { getFeaturedBlog, getLatestBlogs } from "@/services/contentful";
import { Minicard } from "./components/card/minicard";

import * as contentful from "contentful"
import { Frontcard } from "./components/card/frontcard";
import { Card } from "./components/card";
import { Footer } from "./components/footer";
import { Menubar } from "./components/menubar";
import { Navbar } from "./components/navbar";
import { getLoggedInUserDetails } from "@/services/api";
import { useEffect } from "react";


const Home = async() => {
  const featuredBlog: any = await getFeaturedBlog();
  const latestBlogs: any = await getLatestBlogs();

  return (

    <div>
      
    <Navbar />
    <Menubar />

    <div>
      <div className="w-11/12 sm:w-4/5 mx-auto flex flex-col md:flex-row">
          <div className="w-full md:w-8/12">

            <Frontcard fields={featuredBlog}/>

          </div>
          <div className="w-full mt-2 md:mt-0 md:w-2/5 md:ml-2 rounded-lg overflow-scroll">
            {
              latestBlogs.map((blog: any, i: number)=>{
                return ( // You need to return JSX from the map function
                  <Minicard key={i} fields={blog}/>
                );
              })
            }
          </div>
        </div>

        <div className="w-10/12 mx-auto flex flex-wrap gap-6 justify-center">
            {
              latestBlogs.map((blog: any, i: number)=>{
                return ( // You need to return JSX from the map function
                  <Card key={i} fields={blog}/>
                );
              })
            }
        </div>
    </div>
    <Footer/>

    </div>

  );
}
export default Home;