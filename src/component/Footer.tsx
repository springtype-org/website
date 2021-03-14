import {tsx} from "springtype";
import {FOOTER_COLOR} from "../function/Theme";
export interface FooterProps {
    classes?: string
}
export const Footer = ({classes}: FooterProps) => {

    const user: Array<{ name: string, imgSrc: string, url: string }> = [{
        name: 'Aron Homberg',
        imgSrc: 'https://avatars3.githubusercontent.com/u/454817?v=4&s=150',
        url: 'https://github.com/kyr0'
    }, {
        name: 'Michael Mannseicher',
        imgSrc: 'https://avatars2.githubusercontent.com/u/12079044?s=150&v=4',
        url:'https://github.com/mansi1'
    }, {
        name: 'Tom',
        imgSrc: 'https://avatars2.githubusercontent.com/u/17221813?s=150&v=4',
        url: 'https://github.com/jsdevtom'
    }]

    return <div style={{
        backgroundColor: FOOTER_COLOR.main,
        color: 'white',
    }}>
        <div class={classes} style={{
            backgroundColor: FOOTER_COLOR.light,
        }}>
                <div style={{fontSize: 18, textTransform: 'uppercase'}}>
                    Supporter
                </div>
                <div style={{display: 'flex'}}>

                    {user.map(({name, imgSrc}) => (<div style={{margin: 5}}>
                        <div><img
                            style={{
                                borderRadius: '70px',
                                width: 50,
                                height: 50,
                                filter: 'grayscale(70%)',
                            }}
                            onClick={() => window.open(imgSrc)}
                            src={imgSrc}
                            alt={`profile image of ${name}`}/></div>
                    </div>))}
                </div>
            </div>
    </div>
}
