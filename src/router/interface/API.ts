export interface API {
    history: History;
    push: (url: string, state?: any) => void;
    replace:(url: string, state?: any) => void;
    forward: ()=> void;
    back: ()=> void;
}
