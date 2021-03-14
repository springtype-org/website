import {tsx} from "springtype";
import {jss} from "st-jss";
import {TopBar} from "../component/TopBar";
import {Footer} from "../component/Footer";

export const MainPage = () => {
    const [classes, style] = jss.makeStyles({
        mainContainer: {
            padding: '1.25rem',
            '@media (min-width: 1024px)': {
                paddingLeft: 'max(3rem,calc(50vw - 640px + 3rem))',
                paddingRight: 'max(3rem,calc(50vw - 640px + 3rem))',
            },
            '@media (min-width: 640px)': {
                paddingLeft: 'max(1.5rem,calc(50vw - 640px + 1.5rem))',
                paddingRight: 'max(1.5rem,calc(50vw - 640px + 1.5rem))',
            },
        },
        children: {
            flex: 1
        }
    })
    return <fragment>
        {style}
        <TopBar classes={classes.mainContainer}>
            <div style={{marginTop: 45}}>
                <div style={{fontSize: 30}}>The best and easiest to</div>
                <div style={{fontSize: 60, fontWeight: 'bolder', textTransform: 'uppercase'}}>build websites</div>
                <div>Build websites with known webtechnologie:</div>
                <ul>
                    <li>Use browser build in dom api</li>
                    <li>Use typescript with tsx</li>
                    <li>Use simple css</li>
                    <li>Easy integrate third party libraries.</li>
                </ul>
            </div>
        </TopBar>
        <div class={[classes.mainContainer, classes.children]}>
            "content"
        </div>
        <Footer classes={classes.mainContainer}/>
    </fragment>
}
