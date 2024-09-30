import { BlogContent } from "@/app/components/blog/blogcontent";
import { Blogheader } from "@/app/components/blog/blogheader";
import { getBlogDetails } from "@/services/contentful";


export default async function BlogDetails({ params }: { params: { id: string } }) {

  // const blog:any = await getBlogDetails(params.id);
  // console.log("blog: ", blog)

  // console.log("params: ", params)
  const title = params.id

  const blog:any = await getBlogDetails(params.id);
  

  return (
    // <div>
    //   <h1>{blog.fields.title}</h1>
    // </div>

    <div>
      <Blogheader blog={blog.fields} />
    
      <BlogContent content={blog.fields.content}/>
    </div>


  );
}