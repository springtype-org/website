import {Props, tsx} from "springtype";
import {TopBar} from "../component/TopBar";
import {Footer} from "../component/Footer";
import {jss} from "st-jss";

export const Layout = ({children}: Props) => {
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
            flex:1
        }
    })
    return <fragment>
        {style}
        <TopBar classes={classes.mainContainer}/>
        <div class={[classes.mainContainer, classes.children]}>
            {children}
        </div>
        <Footer classes={classes.mainContainer}/>
    </fragment>
}
