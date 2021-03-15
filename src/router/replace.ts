import {API} from "./interface/API";

export const replace = (url: string, state: any, history: API) => {
    history.history.replaceState(state, null, url);
}
