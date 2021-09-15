import {makeStyles} from "./function/makeStyles";
import {BACKGROUND_COLOR} from "./function/Theme";
import {RouteList} from "./RouteList";
import {tsx} from "springtype";
import de from "./assets/i18n/test.json5"
const classes = makeStyles({
    body: {
        margin: 0,
        padding: 0,
        backgroundColor: BACKGROUND_COLOR.main,
        fontFamily: '\'Raleway\', sans-serif',
    },
    router: {
        display: 'flex',
        height: '100vh',
        flexDirection: 'column'
    }
});

export const App = () => {
    //add font and style to body
    const bodyEl = document.body;
    bodyEl.classList.add(classes.body)
    console.log(de)
    return <fragment>
        <RouteList className={classes.router}/>
    </fragment>
}
