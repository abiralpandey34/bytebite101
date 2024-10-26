'use client';
import { BlogContent } from "@/app/components/blog/blogcontent";
import { Blogheader } from "@/app/components/blog/blogheader";
import { getBlogDetails } from "@/services/contentful";
import { generateUID } from "@/services/utils";
import { Children, ReactNode, useEffect, useState } from "react";


export default function BlogDetails({ params }: { params: { id: string } }) {
  const [blog, setBlog] = useState<any>(null);
  const [headingMaps, setHeadingMaps] = useState<any[]>([]);

  const fetchBlog = async()=>{
    const blog:any = await getBlogDetails(params.id);
    if(!blog) return;

    try{
      const headingMaps: any[] = [];
      let updatedBlog = blog;
  
      updatedBlog.fields.content.content.forEach((contentPiece: any, index: number)=>{
        if(contentPiece.nodeType==="heading-2"){
          const id = generateUID();
          contentPiece.id = id;
          const headingTitle = contentPiece.content[0]?.value || "";
          let subHeadings = [];
          
          for(let i=index+1; i<blog.fields.content.content.length; i++){
            const subContent = blog.fields.content.content[i];
            
            if(subContent.nodeType==='heading-2') {
              break;
            }
  
            if(subContent.nodeType==='heading-3'){
              const id = generateUID();
              subContent.id = id;
              const title = subContent.content[0]?.value || "";
              subHeadings.push({
                id, 
                title
              })
            }
          }
  
          headingMaps.push({
            id,
            title: headingTitle,
            children: subHeadings
          })
        }
      })
  
      setHeadingMaps(headingMaps);
      setBlog(updatedBlog);
    }catch(e){
      setBlog(blog);
    }
  }

  useEffect(()=>{
    fetchBlog();
  },[])

  const buildSubHeading = (heading: any)=>{
    try{
      const headingHTML = document.createElement('div');
      const headingPara = document.createElement('a');
      const headingParaText = document.createTextNode(heading.title)
  
      headingPara.appendChild(headingParaText);
      headingPara.setAttribute("href", `#${heading.id}`);
      headingHTML.appendChild(headingPara);
  
      const childrenDiv = document.createElement('div');
      childrenDiv.classList.add("ml-2");
  
      heading?.children?.map((children: any)=>{
        const subHeadingPara = document.createElement("a");
        subHeadingPara.classList.add("block");
        subHeadingPara.setAttribute("href", `#${children.id}`)
        const subHeadingParaText = document.createTextNode(children.title)
        subHeadingPara.appendChild(subHeadingParaText);
        childrenDiv.appendChild(subHeadingPara);
      })
  
      headingHTML.appendChild(childrenDiv);
  
      return headingHTML.outerHTML || new XMLSerializer().serializeToString(headingHTML);
    }catch(e){
      return <></>
    }
  }

  return (
    <>
     {
      blog && <div>
      <div>
        {
          headingMaps.map((heading)=>(<div dangerouslySetInnerHTML={{
            __html:buildSubHeading(heading)
          }}></div>))
        }
      </div>
      <Blogheader blog={blog.fields} />
    
      <BlogContent content={blog.fields.content}/>
    </div>
    }
    </>
  );
}