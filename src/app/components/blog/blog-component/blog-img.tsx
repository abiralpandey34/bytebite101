export const BlogImg = ({ title, url }: { title: string; url: string }) => {


    // console.log("image Vitra: ", node);
    return <div className="w-full py-4">
        {/* {node.map((textObj: any, textIndex: any) => ( */}
        <img src={url} alt={title} />
        <p className="pl-1 text-light-fadeText text-xs"> {title} </p>
        {/* ))} */}
    </div>
}