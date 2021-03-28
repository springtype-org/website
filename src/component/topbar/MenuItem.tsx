import {IVirtualNode, tsx} from "springtype";

export interface MenuItemProps {
    title: IVirtualNode | string;
    subTitle: IVirtualNode | string;
    onClick: () => void;
}


export const MenuItem = ({title, subTitle, onClick}: MenuItemProps) => {
    return (
        <div style={{ cursor: 'pointer'}} onclick={onClick}>
            <div style={{fontWeight: 'bolder', fontSize: 18}}>{title}</div>
            <div style={{fontSize: 14, color: 'rgb(103, 103, 103)'}}>{subTitle}</div>
        </div>
    )
}
