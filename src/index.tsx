import {render, tsx} from "springtype";
import {RouteList} from "./RouteList";
import {BACKGROUND_COLOR} from "./function/Theme";
import {jss} from "st-jss";
import {makeStyles} from "./function/makeStyles";

const classes = makeStyles({
    body: {
        margin: 0,
        padding: 0,
        backgroundColor: BACKGROUND_COLOR.main,
        fontFamily: '\'Raleway\', sans-serif'
    },
    router: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column'
    }
});
const App = () => {


    //add font and style to body
    const bodyEl = document.getElementById('body');
    bodyEl.classList.add(classes.body)

    return <fragment>
        <RouteList className={classes.router}/>
    </fragment>
}

render(<App/>);
