import {API} from "./interface/API";

export const back = (history: API) => {
    history.history.back();
}
