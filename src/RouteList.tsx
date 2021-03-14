import {Ref, tsx} from 'springtype';
import {$} from 'st-query';
import {ABOUT_ROUTE, DEMO_ROUTE, GUIDES_ROUTE, MAIN_ROUTE, NAV} from "./routes";


export const RouteList = () => {

    const containerRef: Ref = {}

    NAV.get(MAIN_ROUTE, () => {
        $(containerRef.current).html(<div>main route</div>);
    });
    NAV.get(DEMO_ROUTE, () => {
        $(containerRef.current).html(<div>demo</div>);
    });
    NAV.get(GUIDES_ROUTE, () => {
        $(containerRef.current).html(<div>guides</div>);
    });
    NAV.get(ABOUT_ROUTE, () => {
        $(containerRef.current).html(<div>about</div>);
    });

    const onMount = () => {
        NAV.match(location.search)
    }

    return <div ref={containerRef} onMount={onMount}>Loading...</div>;
};
