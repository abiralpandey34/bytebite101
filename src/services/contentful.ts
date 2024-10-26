import * as contentful from "contentful"
import _ from "lodash";
import { generateUID } from "./utils";


export const contentfulClient = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: 'fn5rrdsfdy1r',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: 'rwj7vxYi1LXaFR9I5wnVBwycM3TG2RusvivHfycCijE',
})

export const getContentById = async(id: string)=>{
    try {
        return await contentfulClient.getEntry(id);
    } catch (error) {
        console.error("error: ", error);
        throw error;
    }
}

export const getFeaturedBlog = async ()=>{
    try {
      const entry = await getContentById("3vrx9Ezv34q2B8pY0kjP25");
      const blog = _.get(entry, 'fields.featuredBlogPost.fields')
    //   console.log("Blog: ", blog)
      return blog;
    } catch (error) {
      console.error("error: ", error);
      throw error;
    }
  }

export const getLatestBlogs = async ()=>{
    try {
        const blogDetails = await contentfulClient.getEntries({
          content_type: 'pageBlogPost',
          limit:3
        })

        return blogDetails?.items?.map((item)=>item?.fields);
    } catch (error) {
        console.error("error: ", error);
    }
}

export const getFeaturedImageFromBlog = (blog:any)=>{
    try {
       return `https:${blog?.featuredImage?.fields?.file?.url}`;
    } catch (error) {
        console.error("error: ", error);
    }
}

export const getBlogDetails = async (slug:string)=>{
    try {
        const blogDetails = await contentfulClient.getEntries({
          content_type: 'pageBlogPost',
          'fields.slug': slug,
        })
        if(!blogDetails || !blogDetails?.items?.length) throw new Error("Blog not found.");

        const {items} = blogDetails;
        const blog = items[0]
        return blog
        // console.log("items: ", blog);
    } catch (error) {
        console.error("error: ", error);
    }
}

export const buildBlog = async(blog: any) => {
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
    
        return {
            blog: updatedBlog,
            headingMaps, 
        }
    }
    catch(error){
        return {
            blog,
            headingMaps: null
        };
    }
}