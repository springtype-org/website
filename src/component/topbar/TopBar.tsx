import {IVirtualNode, tsx} from "springtype";
import waveSvg from '../../assets/img/wave.svg'
import {PRIMARY_COLOR} from "../../function/Theme";
import {Link} from "./components/Link";
import {history} from "../../router/history";
import {
    DOC_ROUTE,
    GUIDES_ROUTE,
    LIBRARY_CORE_ROUTE,
    LIBRARY_I18N_ROUTE,
    LIBRARY_JSS_ROUTE,
    LIBRARY_QUERY_ROUTE,
    LIBRARY_ROUTER_ROUTE
} from "../../routes";
import {Logo} from "../Logo";
import {Dropdown} from "./components/Dropdown";
import {Menu} from "./Menu";
import {MenuItem} from "./MenuItem";
import {makeStyles} from "../../function/makeStyles";
import {GithubLink} from "./components/GithubLink";
import {MenuIcon} from "./components/menu/MenuIcon";

export interface TopBarProps {
    classes?: string;
    children?: IVirtualNode;
}

const ownClasses = makeStyles({
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
            height: '80px',
            backgroundImage: "url(" + waveSvg + ")",
            width: '100%',
            zIndex: -1,
            backgroundSize: '1200px 75px',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom',
        },
    },
    container: {
        color: '#fff',
    },
    menuDesktop: {
        '@media (min-width: 1024px)': {
            display: 'flex'
        },
        '@media (max-width: 1024px)': {
            display: 'none'
        },
    },
    menuTabletMobile: {
        '@media (min-width: 1024px)': {
            display: 'none'
        },
        '@media (max-width: 1024px)': {
            display: 'flex'
        },
    },
})
export const TopBar = ({classes, children}: TopBarProps) => {
    return <div className={ownClasses.waveBackground}>
        <div className={[ownClasses.container, classes]}>
            <div style={{display: 'flex'}}>
                <Logo/>
                <div class={ownClasses.menuDesktop}>
                    <Dropdown label={"Library"}>
                        <Menu>
                            <MenuItem
                                title={"springtype"}
                                subTitle={"The core framework livecycle"}
                                onClick={() => history.push(LIBRARY_CORE_ROUTE)}
                            />
                            <MenuItem
                                title={"st-router"}
                                subTitle={"The router library"}
                                onClick={() => history.push(LIBRARY_ROUTER_ROUTE)}
                            />
                            <MenuItem
                                title={"st-query"}
                                subTitle={"An library like jQuery"}
                                onClick={() => history.push(LIBRARY_QUERY_ROUTE)}
                            />
                            <MenuItem
                                title={"st-jss"}
                                subTitle={"Scoped css classes animations"}
                                onClick={() => history.push(LIBRARY_JSS_ROUTE)}
                            />
                            <MenuItem
                                title={"st-i18n"}
                                subTitle={"Translate you application"}
                                onClick={() => history.push(LIBRARY_I18N_ROUTE)}
                            />
                        </Menu>
                    </Dropdown>
                    <Link onClick={() => {
                        history.push(GUIDES_ROUTE)
                    }}>
                        Guides
                    </Link>
                    <Link onClick={() => {
                        history.push(DOC_ROUTE)
                    }}>
                        Documentation
                    </Link>
                    <GithubLink/>
                </div>
                <div class={ownClasses.menuTabletMobile}>
                    <MenuIcon/>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    </div>
}
