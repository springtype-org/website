import { IVirtualNode } from "springtype";

export const Children = {
    join: (nodes: IVirtualNode | string | Array<IVirtualNode | string>, join: IVirtualNode | string ) => {
        if(Array.isArray(nodes)){
            const length = nodes.length;
            const result: Array<IVirtualNode | string> = [];
             nodes.forEach((node, index)=> {
                 result.push(node);
                 if(  index < length-1){
                     result.push(join)
                 }
             })
            return result;
        }else{
            return nodes;
        }
    }
}
