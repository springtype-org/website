import {API} from "./interface/API";

export const push = (url: string, state: any, history: API) => {
    history.history.pushState(state, null, url);
}
