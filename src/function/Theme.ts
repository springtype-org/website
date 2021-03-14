import {Color, RGB} from "../classes/Color";

interface TColor {
    main: string;
    dark: string;
    light: string;
}

const hexToTColor = (rgb: string | RGB) => {
    const color = new Color(rgb);
    return {
        main: color.toRGBString(),
        dark: color.darker().toRGBString(),
        light: color.lighter().toRGBString(),

    }
}

export const PRIMARY_COLOR: TColor = hexToTColor('#1a6da9');

export const FOOTER_COLOR: TColor = hexToTColor('#333333');

export const BACKGROUND_COLOR: TColor = hexToTColor('#F4F4F5');
