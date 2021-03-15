import {IVirtualNode, tsx} from "springtype";
import {jss} from "st-jss";
import {Children} from "../../function/Children";

export interface MenuProps {
    children?: Array<IVirtualNode>;
}

export const Menu = ({children}: MenuProps) => {
    const [classes, style] = jss.makeStyles({
        root: {
            padding: '1.5rem',
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '8px',
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
        }
    })
    return (
        <div class={classes.root}>
            {style}
            {Children.join(children,<div style={{marginBottom: 15}}/>)}
        </div>
    )
}
