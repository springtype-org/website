import {tsx, render} from "springtype";
import {Layout} from "./layout/Layout";
import {RouteList} from "./RouteList";
import {BACKGROUND_COLOR} from "./function/Theme";
import {jss} from "st-jss";

const App = () => {
    const [classes, style] = jss.makeStyles({
        body: {
            margin: 0,
            padding: 0,
            backgroundColor: BACKGROUND_COLOR.main,
            fontFamily:'\'Raleway\', sans-serif'
        },
        root: {display: 'flex',
            height: '100%',
            flexDirection: 'column',
        },
    });

    //add font and style to body
    const bodyEl = document.getElementById('body');
    bodyEl.classList.add(classes.body)

    return <div class={classes.root}>
        {style}
        <Layout>
            <RouteList/>
        </Layout>
    </div>
}

render(<App/>);
