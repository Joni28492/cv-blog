import { referentes } from '../data/ReferentsHardData';
const { v4: uuidv4 } = require('uuid');


const styleIcon = {
    fontSize: '16px',
    marginLeft: "12px"
}

export const styleAnchorNone = {
    textDecoration: 'none',
    color: "white"
}




export const ReferentesScreen = () => {


    return (
        <div className="container">
            <h1 className="text-center">Mis Referentes</h1>
            <hr />


            <ul style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>



                {/* inicio tarjeta */}

                {
                    referentes.map(({ nombre, img, especialidad, desc, web, icon = 'fas fa-link' }) => {


                        return (
                            <li key={uuidv4()} style={{
                                margin: '12px',
                                width: '500px',
                                padding: '15px',
                                border: '1px solid gray',
                                borderRadius: '25px',
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <img src={img} alt="" style={{
                                    borderRadius: '150px',
                                    width: '120px',
                                    height: '120px',
                                    border: '3px solid dodgerblue'

                                }} />

                                <div style={{
                                    marginLeft: '10px'
                                }}>
                                    <h4> {nombre}</h4>

                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-around'
                                    }}>
                                        <p>{especialidad}</p>


                                        <a key={img} href={web} style={styleAnchorNone}>
                                            <i className={icon} style={styleIcon} />
                                        </a>
                                    </div>
                                    <small>{desc}</small>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
