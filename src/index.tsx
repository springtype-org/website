import {render, tsx} from "springtype";
import {App} from "./App";


render(<App/>, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
    module.hot.dispose((data) => {
        // perform cleanup
        location.reload()
    })
}
