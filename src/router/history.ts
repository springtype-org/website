import {API} from "./interface/API";
import {push} from "./push";
import {replace} from "./replace";
import {back} from "./back";
import {forward} from "./forward";

//wrap push state to trigger change and push state event
window.history.pushState = ( f => function pushState(){
    const ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(window.history.pushState);

//wrap replace to trigger change and replace state event
window.history.replaceState = ( f => function replaceState(){
    const ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(window.history.replaceState);

//wrap pop state to trigger change event
window.addEventListener('popstate',()=>{
    window.dispatchEvent(new Event('locationchange'))
});

export const history : API = {
    history: window.history,
    push: (url, state) => push(url, state, history),
    replace: (url, state) => replace(url, state, history),
    back: ()=> back(history),
    forward: ()=> forward(history),
}
