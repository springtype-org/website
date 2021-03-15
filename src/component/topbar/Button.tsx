import {IVirtualNode, tsx} from "springtype";
import {jss} from "st-jss";
import {makeStyles} from "../../function/makeStyles";

export interface TopBarButtonProps {
    startIcon?: IVirtualNode;
    endIcon?: IVirtualNode;
    onClick?: ()=> void;
    children?: IVirtualNode;
    href?: string;
}
const classes = makeStyles({
    root: {
        display: 'flex',
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 18,
        lineHeight: '60px',
        paddingTop: 5,
        textDecoration: 'none',
        color: '#fff',
        paddingBottom: 5,
        cursor: 'pointer'
    }
});

export const Button = ({onClick, children, startIcon, endIcon}: TopBarButtonProps) => {
    return <a onClick={onClick} class={classes.root}>
        {startIcon}
        {children}
        {endIcon}
        </a>
}
