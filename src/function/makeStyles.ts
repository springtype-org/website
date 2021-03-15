import {jss} from "st-jss";
import {ClassProperty} from "st-jss/interface/ClassProperties";

export const makeStyles = <T extends string = string>(classProperty: ClassProperty<T>): Record<T, string> => {
    const [classes, style] = jss.makeStyles(classProperty)
    window.$st.render(style,document.head)
    return classes;

}
