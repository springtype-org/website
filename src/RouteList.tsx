import {Ref, tsx} from 'springtype';
import {DOC_ROUTE, GUIDES_ROUTE, MAIN_ROUTE, NAV} from "./routes";
import {MainPage} from "./page/MainPage";
import {history} from "./router/history";

export interface RouteListProps {
    className: string;
}

export const RouteList = ({className}: RouteListProps) => {

    const containerRef: Ref = {}

    NAV.get(MAIN_ROUTE, () => {
        containerRef.current.innerHTML = ''
        containerRef.current['$st'].render(<MainPage />, containerRef.current)
    });
    NAV.get(DOC_ROUTE, () => {
        containerRef.current.innerHTML = ''
        containerRef.current['$st'].render(<div>docs</div>, containerRef.current)
    });
    NAV.get(GUIDES_ROUTE, () => {
        containerRef.current.innerHTML = ''
        containerRef.current['$st'].render(<fragment/>, containerRef.current)
    });
    NAV.get(GUIDES_ROUTE, () => {
        containerRef.current.innerHTML = ''
        containerRef.current['$st'].render(<fragment/>, containerRef.current)
    });

    const onLocationChange = () => {
        const match = NAV.match(location.search)
        if (!match) {
            history.replace(MAIN_ROUTE);
        }
    }

    //rerender if location change
    window.addEventListener('locationchange', onLocationChange)
    return <div class={className} ref={containerRef} onMount={onLocationChange}>
       Loading...
    </div>;
};
