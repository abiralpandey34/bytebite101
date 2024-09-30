export const BlogParagraph = ({node}:any) => {

    let classNames = ''; // Initialize an empty string for class names
    let returnComponent:any = null
    
    const decoration = (mark: any)=>{
        mark.marks?.forEach((mark: any) => {
            switch (mark.type.trim()){
                case 'underline':
                    classNames += ' underline';
                    break;

                case 'bold':
                    classNames += ' font-bold';
                    break;
        
                case 'italic':
                    classNames += ' italic ';
                    break;

                case 'code':
                    classNames += ' underline';
                    break;
                
                default:
                    classNames+='';
            }
        });
    }

    return <div className="w-full py-3">
    {node.map((textObj: any, textIndex: any) => {

        switch (textObj.nodeType.trim()){
            case 'text':
                if(textObj.marks?.length > 0) decoration(textObj)
                returnComponent = (<span key={textIndex} className={classNames.trim()}> {textObj.value} </span>);
                break;

            case 'blockquote':
                if(textObj.marks?.length > 0) decoration(textObj)
                returnComponent = (<span key={textIndex} className={classNames.trim()}> {textObj.value} </span>);
                break;
                
            case 'hyperlink':
                if(textObj.content.marks?.length > 0) decoration(textObj.content)
                classNames+=' text-blue-600';
                returnComponent = (<a key={textIndex} href={textObj.data.uri}> <BlogParagraph node={textObj.content} /> </a>)
                break;
        }

        return (
                returnComponent
        );
    })}
</div>
}