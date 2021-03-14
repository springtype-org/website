export interface RGB {
    red: number;
    green: number;
    blue: number;
}

export class Color {

    rgb: RGB

    constructor(rgb: string | RGB) {
        if (typeof rgb === 'string') {
            this.rgb = {
                red: parseInt(rgb.slice(1, 3), 16),
                green: parseInt(rgb.slice(3, 5), 16),
                blue: parseInt(rgb.slice(5, 7), 16)
            }
            return;
        }
        if (typeof rgb === 'object'
            && typeof rgb.red !== 'undefined'
            && typeof rgb.green !== 'undefined'
            && typeof rgb.blue !== 'undefined'
        ) {
            this.rgb = rgb;
            return;
        }
        throw new Error('Unknown data type given to color object')
    }

    darker = (): Color => {
        const amt = Math.round(-2.55 * 10);
        return new Color({
            red: this.rgb.red + amt,
            green: this.rgb.green + amt,
            blue: this.rgb.blue + amt,
        })
    }

    lighter = (): Color => {
        const amt = Math.round(2.55 * 10);
        return new Color({
            red: this.rgb.red + amt,
            green: this.rgb.green + amt,
            blue: this.rgb.blue + amt,
        })
    }

    toRGBString = () => {
        return `rgb(${this.rgb.red},${this.rgb.green},${this.rgb.blue})`
    }
}

