export const BlogTable = ({node}:any) => {
    // console.log("Table Node: ", node);

    return (
        <table className="w-full py-3 border-collapse border border-gray-300">
            <tbody>
                {node.map((textObj: any, textIndex: any) => {
                    if (textObj.nodeType?.trim() === 'table-row') {
                        return (
                            <tr key={textIndex} className="border border-gray-300">
                                {textObj.content.map((cellObj: any, cellIndex: any) => (
                                    console.log("Test data: ", cellObj.content)
                                
                                ))}
                            </tr>
                        );
                    }
                    return null;
                })}
            </tbody>
        </table>
    );
}