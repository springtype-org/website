import {tsx} from "springtype";
import waveSvg from '../assets/img/wave.svg'
import {jss} from "st-jss";
import {PRIMARY_COLOR} from "../function/Theme";
import logoWhite from "../assets/img/logo_inverted.svg"
export interface TopBarProps {
    classes?: string;
}
export const TopBar = ({classes}: TopBarProps) => {
    const [ownClasses, style] = jss.makeStyles({
        waveBackground: {
            background: `linear-gradient(
                180deg
            ,rgba(33,119,194,.4),rgba(33,119,194,.4)),linear-gradient(
        20deg
        ,rgba(16,63,105,.09) 35%,transparent 0),linear-gradient(
        160deg
        ,rgba(16,63,105,.09) 50%,transparent 0),linear-gradient(
        130deg
        ,rgba(16,63,105,.09) 45%,transparent 0),linear-gradient(
        50deg
        ,rgba(16,63,105,.09) 90%,transparent 0),linear-gradient(
        180deg
        ,${PRIMARY_COLOR.main},${PRIMARY_COLOR.main})`,
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
        <div className={[ownClasses.container,classes]}>
            <img src={logoWhite}  width={60}/>
            <div>
                <div style={{fontSize: 36}}>The best and easiest to</div>
                <div  style={{fontSize: 70, fontWeight: 'bolder', textTransform: 'uppercase'}}>build websites</div>
            </div>
        </div>
    </div>
}
