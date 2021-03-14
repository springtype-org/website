import {Ref, tsx} from 'springtype';
import {MAIN_ROUTE, NAV} from "./routes";
import {MainPage} from "./page/MainPage";

export interface RouteListProps {
    className: string;
}
export const RouteList = ({className}: RouteListProps) => {

    const containerRef: Ref = {}

    NAV.get(MAIN_ROUTE, () => {
        console.log(containerRef.current);
        containerRef.current.innerHTML = ''
        containerRef.current['$st'].render(<MainPage/>, containerRef.current)
    });

    const onMount = () => {
        NAV.match(location.search)
    }

    return <div class={className} ref={containerRef} onMount={onMount}>
        Loading...
    </div>;
};
