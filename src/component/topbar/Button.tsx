import {IVirtualNode, tsx} from "springtype";
import {jss} from "st-jss";

export interface TopBarButtonProps {
    startIcon?: IVirtualNode;
    endIcon?: IVirtualNode;
    onClick?: ()=> void;
    children?: IVirtualNode;
    href?: string;
}

export const Button = ({onClick, children, startIcon, endIcon}: TopBarButtonProps) => {
    const [classes, style] = jss.makeStyles({
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
    return <a onClick={onClick} class={classes.root}>
        {style}
        {startIcon}
        {children}
        {endIcon}
        </a>
}
