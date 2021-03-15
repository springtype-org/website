import {IVirtualNode, tsx} from "springtype";
import {jss} from "st-jss";
import {Children} from "../../function/Children";
import {makeStyles} from "../../function/makeStyles";

export interface MenuProps {
    children?: Array<IVirtualNode>;
}
const classes = makeStyles({
    root: {
        padding: '1.5rem',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '8px',
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    }
});
export const Menu = ({children}: MenuProps) => {
    return (
        <div class={classes.root}>
            {Children.join(children,<div style={{marginBottom: 15}}/>)}
        </div>
    )
}
