import * as contentful from "contentful"
import _ from "lodash";


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
        })

        return blogDetails?.items?.map((item)=>item?.fields);
    } catch (error) {
        console.error("error: ", error);
    }
}

export const getFeaturedImageFromBlog = (blog:any)=>{
    try {
        // console.log(blog?.featuredImage?.fields?.file)
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