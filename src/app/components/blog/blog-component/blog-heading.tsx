export const BlogH1 = ({node}:any) => {
    return <div className="w-full py-3">
        {node.map((textObj: any, textIndex: any) => (
        <h1 className="text-4xl font-semibold" key={textIndex}>{textObj.value}</h1>
        ))}
    </div>
}

export const BlogH2 = ({node, id}:any) => {
    return <div className="w-full py-3" id={id}>
        {node.map((textObj: any, textIndex: any) => (
        <h2 className="text-3xl font-semibold" key={textIndex}>{textObj.value}</h2>
        ))}
    </div>
}

export const BlogH3 = ({node, id}:any) => {
    return <div className="w-full py-3" id={id}>
        {node.map((textObj: any, textIndex: any) => (
        <h3 className="text-2xl font-semibold" key={textIndex}>{textObj.value}</h3>
        ))}
    </div>
}

export const BlogH4 = ({node}:any) => {
    return <div className="w-full py-3">
        {node.map((textObj: any, textIndex: any) => (
        <h4 className="text-xl font-semibold" key={textIndex}>{textObj.value}</h4>
        ))}
    </div>
}

export const BlogH5 = ({node}:any) => {
    return <div className="w-full py-3">
        {node.map((textObj: any, textIndex: any) => (
        <h4 className="text-base font-semibold" key={textIndex}>{textObj.value}</h4>
        ))}
    </div>
}

export const BlogH6 = ({node}:any) => {
    return <div className="w-full py-3">
        {node.map((textObj: any, textIndex: any) => (
        <h4 className="text-md font-semibold" key={textIndex}>{textObj.value}</h4>
        ))}
    </div>
}