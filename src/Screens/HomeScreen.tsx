
import { SocialMedia } from "../SocialMedia"
import { styleAnchorNone } from './ReferentesScreen';



export const HomeScreen = () => {



    return (
        <div className="container text-light" style={{
            display: "flex",
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: 'center',
            marginTop: '80px'
        }}>

            {/* <div style={{
                border: '1px solid gray',
                borderRadius: '20px',
                display: "flex",
                flexDirection: 'row',
                marginTop: '45px',
                width: '60%',
                height: 'auto',
                padding: '10px'
            }} >
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <h1 className="container"> Jonathan Fernández López</h1>
                    <hr />

                    <div style={{
                        fontSize: '24px',
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: 'stretch'

                    }}>

                        <a style={styleAnchorNone} href="mailto:joni28492@gmail.com" >
                            <i className="far fa-envelope m-2"></i>
                            Joni28492@gmail.com</a>
                        <a style={styleAnchorNone} href="tel:+34647835691">
                            <i className="fas fa-mobile-alt m-2"></i>
                            Telefono
                        </a>

                    </div>

                    <div style={{
                        marginTop: '90px',
                        display: 'flex',

                        alignItems: "flex-end"
                    }}>
                        <SocialMedia />
                    </div>
                </div>


                <img
                    style={{
                        width: '200px',
                        marginLeft: '25px',
                        height: '200px',
                        borderRadius: '50%',
                        border: '3px solid purple'
                    }}
                    src="https://scontent-mad1-1.xx.fbcdn.net/v/t1.18169-9/19510350_10213122251953601_6130245663942031445_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=KD_qntKDo_gAX9jLaWC&_nc_ht=scontent-mad1-1.xx&oh=00_AT8zAemfSArGED0SSHc4f2SK7dTUEdsxwBGBlqAhUVsmEw&oe=61EA889F" alt="" />

            </div> */}


            {/* Bootstrap */}
            <div className="card m-3 text-center animate__animated animate__flip animate__slower">
                <img src="https://cdna.artstation.com/p/users/covers/000/140/078/default/7a30a434b9d8bcf1d7844bfbb39c42a2.jpg?1524657610" className="card-img-top" alt="..." />
                <div className="card-body bg-dark">
                    <h5 className="card-title">Joni Fernández</h5>
                    <hr />
                    <p className="card-text">Bienvenidos a mi web personal, esta web esta orientada a mostrar mi trabajo, habilidades conocimientos e intereses</p>

                    <a style={styleAnchorNone} href="mailto:joni28492@gmail.com" >
                        <i className="far fa-envelope m-2"></i>
                        Joni28492@gmail.com</a>
                    <a style={styleAnchorNone} href="tel:+34647835691">
                        <i className="fas fa-mobile-alt m-2"></i>
                        Telefono
                    </a>


                    <SocialMedia />
                    <p className="card-text"><small className="text-muted">Por ahora esta web solo tiene visibles algunas secciones pero posteriormente irán aumentando</small></p>
                    <p className="card-text"><small className="text-muted">*Nota: Puede que algunas imagenes no carguen debido a que se obtienen de otras webs via url y esta puede cambiar</small></p>
                </div>
            </div>

        </div>
    )
}
