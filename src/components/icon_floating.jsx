import React from '../assets/icons/react.png'
import Github from '../assets/icons/github.png'
import CSS from '../assets/icons/css.png'
import HTML from '../assets/icons/html.png'
import JS from '../assets/icons/js.png'
import NodeJS from '../assets/icons/nodejs.png'
import TS from '../assets/icons/typescript.png'
import MongoDB from '../assets/icons/mongodb.png'

const icon_floating = () => {
    return (
        <div className="fixed inset-0 z-10 h-screen w-screen bg-transparent">
            <img src={React} alt="React" className="absolute h-11 animate-float1" style={{
                left: '83%',
                top: '10%',
            }} />
            <img src={Github} alt="Github" className="absolute h-11 animate-float1" style={{
                left: '61%',
                top: '85%',
                filter: 'invert(1)',
            }} />
            <img src={CSS} alt="CSS" className="absolute h-11 animate-float1" style={{
                left: '60%',
                top: '35%',
            }} />
            <img src={HTML} alt="HTML" className="absolute h-11 animate-float1" style={{
                left: '59%',
                top: '62%',
            }} />
            <img src={JS} alt="JavaScript" className="absolute h-11 animate-float1" style={{
                left: '68%',
                top: '13%',
            }} />
            <img src={NodeJS} alt="NodeJS" className="absolute h-11 animate-float1" style={{
                left: '95%',
                top: '85%',
            }} />
            <img src={TS} alt="TypeScript" className="absolute h-11 animate-float1" style={{
                left: '94%',
                top: '22%',
            }} />
            <img src={MongoDB} alt="MongoDB" className="absolute h-11 animate-float1" style={{
                left: '96%',
                top: '55%',
            }} />
        </div>
    )
}

export default icon_floating
