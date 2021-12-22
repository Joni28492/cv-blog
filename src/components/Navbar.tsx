

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
            <nav className="  navbar-dark bg-success" style={{
                display: "flex",
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '15px',
                paddingBottom: '10px'
            }}>

                <Link className="navbar-brand " to="/">Joni Fernández</Link>




                {
                    (width > 1024) ?
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                            <NavLink style={navLinkStyle} to="/portfolio">portfolio</NavLink>
                            <NavLink style={navLinkStyle} to="/experiencia">experiencia</NavLink>
                            <NavLink style={navLinkStyle} to="/formacion">formacion</NavLink>
                            <NavLink style={navLinkStyle} to="/programas">programas</NavLink>
                            <NavLink style={navLinkStyle} to="/certificaciones">certificaciones</NavLink>
                            <NavLink style={navLinkStyle} to="/referentes">referentes</NavLink>
                            <NavLink style={navLinkStyle} className="active" to="/blog">blog</NavLink>
                            <NavLink style={navLinkStyle} to="/sobremi">sobremi</NavLink>
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
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <NavLink style={navLinkStyle} onClick={() => setVisible(false)} to="/portfolio">portfolio</NavLink>
                    <NavLink style={navLinkStyle} onClick={() => setVisible(false)} to="/experiencia">experiencia</NavLink>
                    <NavLink style={navLinkStyle} onClick={() => setVisible(false)} to="/formacion">formacion</NavLink>
                    <NavLink style={navLinkStyle} onClick={() => setVisible(false)} to="/programas">programas</NavLink>
                    <NavLink style={navLinkStyle} onClick={() => setVisible(false)} to="/certificaciones">certificaciones</NavLink>
                    <NavLink style={navLinkStyle} onClick={() => setVisible(false)} to="/referentes">referentes</NavLink>
                    <NavLink style={navLinkStyle} onClick={() => setVisible(false)} className="active" to="/blog">blog</NavLink>
                    <NavLink style={navLinkStyle} onClick={() => setVisible(false)} to="/sobremi">sobremi</NavLink>
                </nav>
            }




        </div>
    )
}
