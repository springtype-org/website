import {tsx} from "springtype";
import {TopBar} from "../component/topbar/TopBar";
import {Footer} from "../component/Footer";
import {makeStyles} from "../function/makeStyles";

const classes = makeStyles({
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
    content: {
        flex: 1
    },
    headerWrapper: {marginTop: 45, textAlign: 'center'},
    header: {
        '@media (min-width: 640px)': {
            fontSize: 30
        },
        '@media (max-width: 640px)': {
          fontSize: 22
        },
    },
    subHeader: {
        fontWeight: 'bolder', textTransform: 'uppercase',
        '@media (min-width: 640px)': {
            fontSize: 60
        },
        '@media (max-width: 640px)': {
          fontSize: 44
        },
    }
})

export const MainPage = () => {
    return <fragment>
        <TopBar classes={classes.mainContainer}>
            <div class={classes.headerWrapper}>
                <div class={classes.header}>The best and easiest way to</div>
                <div class={classes.subHeader}>build website</div>
            </div>
        </TopBar>
        <div class={[classes.mainContainer, classes.content]}>
            "content" dddd d dd
        </div>
        <Footer classes={classes.mainContainer}/>
    </fragment>
}
