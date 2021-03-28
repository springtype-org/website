import {history} from "../router/history";
import logoWhite from "../assets/img/logo_inverted.svg";
import {tsx} from "springtype";
import {jss} from "st-jss";


export const Logo = () => {
    const [classes, style] = jss.makeStyles({
        root: {
            flex: 1,
            display: 'flex',
            cursor: 'pointer'
        },
        text:{
            fontSize: 30,
            paddingTop: 15,
            paddingLeft: 5
        }

    })
    return (
        <div class={classes.root} onClick={() => history.replace('/')}>
            {style}
            <img src={logoWhite} width={45} alt={"logo springtype"}/>
            <div class={classes.text}>springtype</div>
        </div>

    )
}
