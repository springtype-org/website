import {IVirtualNode, Ref, tsx} from "springtype";
import {jss} from "st-jss";
import {Button} from "./Button";

export interface TopBarDropDownButtonProps {
    label: IVirtualNode | string;
    children?: IVirtualNode;
}

export const Dropdown = ({label, children}: TopBarDropDownButtonProps) => {
    const containerRef: Ref = {}

    const [classes, style] = jss.makeStyles({
        hide: {display: 'none'},
        dropdown: {
            position: 'absolute',
            overflow: 'auto',
            zIndex: 1,
        }
    });

    return <div>
        {style}
        <Button
            onClick={() => {
                containerRef.current.classList.toggle(classes.hide)
            }}
            endIcon={<svg xmlns="http://www.w3.org/2000/svg" style={{width: 20, height: 60}}
                          viewBox="0 0 1792 1792"
                          class="icon">
                <path fill={'#fff'}
                      d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"/>
            </svg>
            }
        >
            {label}
        </Button>
        <div ref={containerRef} class={classes.hide}>
            <div class={[classes.dropdown]}>
                {children}
            </div>
        </div>
    </div>
}
