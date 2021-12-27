import { useState } from "react"
// delay solo hasta 5


export const FormacionItem = ({ title = '', geo = '', date = '', text = '', delay = '0' }) => {



    const [arrow, setArrow] = useState("down")
    const [showText, setShowText] = useState(false)

    const handleArrow = () => {
        if (arrow === 'down') {
            setShowText(true);
            setArrow("up")
        } else {
            setShowText(false);
            setArrow("down")
        }
    }

    return (
        <div className={`text-center m-2 animate__animated animate__flipInY animate__delay-${delay}s`} style={{
            height: '320px',
            width: '250px',
            padding: '15px',
            border: '3px dotted magenta',
            borderTopRightRadius: '35%',
            borderBottomRightRadius: '35%',
            borderLeft: '5px solid turquoise',
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: 'space-evenly'
            }}>
                <h3 style={{
                    marginLeft: 0,
                    paddingLeft: 0
                }}>{title}</h3>
                <span>{geo}</span>
                <small>{date}</small>
                <i className={`fas fa-caret-${arrow}`}
                    onClick={handleArrow}
                ></i>
            </div>

            {
                (showText) &&
                <div className="container " >
                    <p >
                        {text}
                    </p>
                </div>
            }

        </div>
    )
}


