import {API} from "./interface/API";

export const forward = (history: API) => {
    history.history.forward();
}
