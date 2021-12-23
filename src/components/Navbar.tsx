

import { Link, NavLink } from "react-router-dom"
import "../styles/navbar.css"
import { useResponsiveWidth } from '../hooks/useResponsiveWidth';
import { useState } from "react";

const navLinkStyle = {
    color: "white",
    textDecoration: 'none',
    marginLeft: '10px',
    marginRight: '10px',
}

export const Navbar = () => {


    const { width } = useResponsiveWidth()
    const [visible, setVisible] = useState(false);

    const handleVisible = () => {
        console.log('handle hamburger')
        setVisible(!visible);
    }

    //TODO.: Subir el texto del Navbar
    return (
        <div  >
            <nav className="  navbar-dark" style={{
                backgroundColor: 'purple',
                height: '60px',
                display: "flex",
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '15px',
                paddingBottom: '10px'
            }}>

                <Link to="/" style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <i className="fas fa-user-secret" style={{
                        fontSize: 40,
                        color: "white",
                        marginBottom: '5px',
                        marginTop: '-10px',

                    }} />
                    {(width > 1140) && <p style={{
                        marginLeft: '12px',
                        textDecoration: 'none',
                        color: "white",

                    }}>Joni</p>}
                </Link>




                {
                    (width > 1024) ?
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                            {/* <NavLink style={navLinkStyle} to="/portfolio">Portfolio</NavLink> */}
                            <NavLink style={navLinkStyle} to="/experiencia">Experiencia</NavLink>
                            <NavLink style={navLinkStyle} to="/formacion">Formación</NavLink>
                            <NavLink style={navLinkStyle} to="/programas">Programas</NavLink>
                            {/* <NavLink style={navLinkStyle} to="/certificaciones">Certificaciones</NavLink> */}
                            <NavLink style={navLinkStyle} to="/referentes">Referentes</NavLink>
                            {/* <NavLink style={navLinkStyle} className="active" to="/blog">Blog</NavLink> */}
                            <NavLink style={navLinkStyle} to="/sobremi">Mas</NavLink>
                        </div> :
                        <i className="fas fa-bars" onClick={handleVisible} />
                }




            </nav>

            {/* menu desplegable */}
            {
                (visible && width < 1024) &&
                <nav style={{
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#b570b4',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {/* <NavLink style={navLinkStyle} onClick={() => setVisible(false)} to="/portfolio">Portfolio</NavLink> */}
                    <NavLink style={navLinkStyle} onClick={() => setVisible(false)} to="/experiencia">Experiencia</NavLink>
                    <NavLink style={navLinkStyle} onClick={() => setVisible(false)} to="/formacion">Formación</NavLink>
                    <NavLink style={navLinkStyle} onClick={() => setVisible(false)} to="/programas">Programas</NavLink>
                    {/* <NavLink style={navLinkStyle} onClick={() => setVisible(false)} to="/certificaciones">Certificaciones</NavLink> */}
                    <NavLink style={navLinkStyle} onClick={() => setVisible(false)} to="/referentes">Referentes</NavLink>
                    {/* <NavLink style={navLinkStyle} onClick={() => setVisible(false)} className="active" to="/blog">Blog</NavLink> */}
                    <NavLink style={navLinkStyle} onClick={() => setVisible(false)} to="/sobremi">Sobre mi</NavLink>
                </nav>
            }




        </div>
    )
}
