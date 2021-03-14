import {IVirtualNode, tsx} from "springtype";
import waveSvg from '../assets/img/wave.svg'
import {jss} from "st-jss";
import {PRIMARY_COLOR} from "../function/Theme";
import logoWhite from "../assets/img/logo_inverted.svg"

export interface TopBarProps {
    classes?: string;
    children?: IVirtualNode;
}

export const TopBar = ({classes, children}: TopBarProps) => {
    const [ownClasses, style] = jss.makeStyles({
        waveBackground: {
            background: `linear-gradient(180deg ,rgba(33,119,194,.4),rgba(33,119,194,.4)),
            linear-gradient(20deg, rgba(16,63,105,.09) 35%,transparent 0),
            linear-gradient(160deg, rgba(16,63,105,.09) 50%,transparent 0),
            linear-gradient(130deg, rgba(16,63,105,.09) 45%,transparent 0),
            linear-gradient(50deg, rgba(16,63,105,.09) 90%,transparent 0),
            linear-gradient(180deg, ${PRIMARY_COLOR.main},${PRIMARY_COLOR.main})`,
            backgroundBlendMode: 'screen,normal,normal,normal,normal,normal',
            backgroundSize: '100% max(700px,100%)',
            position: 'relative',
            zIndex: 1,
            paddingBottom: 150,
            ':before': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '75px',
                backgroundImage: "url(" + waveSvg + ")",
                width: '100%',
                zIndex: -1,
                backgroundSize: '1200px 75px',
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'bottom',
            },

        },
        container: {
            color: '#fff'
        }
    })
    return <div className={ownClasses.waveBackground}
    >
        {style}
        <div className={[ownClasses.container, classes]}>
            <div style={{display: 'flex'}}>
                <img src={logoWhite} width={45} alt={"logo springtype"}/>
                <div style={{fontSize: 30, paddingTop: 15, paddingLeft: 5}}>springtype</div>
            </div>
            {children}
        </div>
    </div>
}
