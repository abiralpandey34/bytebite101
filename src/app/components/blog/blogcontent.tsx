import { BlogParagraph } from "./blog-component/blog-paragraph";
import { BlogImg } from "./blog-component/blog-img";
import { BlogH1, BlogH2, BlogH3, BlogH4, BlogH5, BlogH6 } from "./blog-component/blog-heading";

export const BlogContent = (content:any) => {
    const contents = content?.content?.content || [];

    const getCompByType = (index: number, node: any) => {
      let comp; 
      switch (node.nodeType?.trim()){
        case "paragraph":
          // console.log("Paragraph NodeType is: ", node)
          comp = <BlogParagraph node={node.content} />
          break;

        case "blockquote":
          comp = <BlogParagraph node={node.content} />
          break;

        case "embedded-entry-block":
          const imageUrl = 'https:'+(node?.data?.target?.fields?.image?.fields?.file?.url) || '';
          const title = (node?.data?.target?.fields?.image?.fields?.title) || '';

          comp = <BlogImg title={title} url={imageUrl} />;
          break;

        case "hr":
          comp = <hr />;
          break;

        case "heading-1":
          comp = <BlogH1 node={node.content} />;
          break;

        case "heading-2":
          comp = <BlogH2 node={node.content} id={node.id} />;
          break;

        case "heading-3":
          comp = <BlogH3 node={node.content} id={node.id} />;
          break;

        case "heading-4":
          comp = <BlogH4 node={node.content} />;
          break;

        case "heading-5":
          comp = <BlogH5 node={node.content} />;
          break;

        case "heading-6":
          comp = <BlogH6 node={node.content} />;
          break;

        case "table":
          // comp = <BlogTable node={node.content} />
          comp = <div />
          break;

        default: 
          console.log("Current NodeType is: ", node)
          comp = <>child</>;
      }

      return <div key={index} className=" ital ">{comp}</div>;
    }

    return <div>
    <div className="w-11/12 lg:w-3/5 md:w-4/5 px-6 mx-auto bg-light-fgWhite ">
      {contents.map((node: any, index: number) => getCompByType(index, node))}
    </div>
</div>

}