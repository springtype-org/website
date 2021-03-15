import {IVirtualNode, tsx} from "springtype";
import waveSvg from '../../assets/img/wave.svg'
import {jss} from "st-jss";
import {PRIMARY_COLOR} from "../../function/Theme";
import logoGithub from "../../assets/img/github_logo.svg"
import {Button} from "./Button";
import {history} from "../../router/history";
import {
    DOC_ROUTE,
    GUIDES_ROUTE,
    LIBRARY_CORE_ROUTE,
    LIBRARY_I18N_ROUTE, LIBRARY_JSS_ROUTE,
    LIBRARY_QUERY_ROUTE,
    LIBRARY_ROUTER_ROUTE
} from "../../routes";
import {Logo} from "../Logo";
import {Dropdown} from "./Dropdown";
import {Menu} from "./Menu";
import {MenuItem} from "./MenuItem";

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

    return <div className={ownClasses.waveBackground}>
        {style}
        <div className={[ownClasses.container, classes]}>
            <div style={{display: 'flex'}}>
                <Logo/>
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
                <Button onClick={() => {
                    history.push(GUIDES_ROUTE)
                }}>
                    Guides
                </Button>
                <Button onClick={() => {
                    history.push(DOC_ROUTE)
                }}>
                    Documentation
                </Button>
                <Button onClick={() => {
                    window.open('https://github.com/springtype-org')
                }} startIcon={<img width={30} height={60} src={logoGithub} alt={'logo github'}
                                   style={{marginRight: 5}}/>}>
                    Follow us on GitHub
                </Button>

            </div>
            {children}
        </div>
    </div>
}
