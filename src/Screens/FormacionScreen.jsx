import { FormacionItem } from "../components/FormacionItem"
const { v4: uuidv4 } = require('uuid');
const formacion = [
    {
        title: "FP Superior Imagen",
        geo: "CIDISI -noreña",
        date: "2011 - 2013",
        text: "Trabajo de fotografía, videoy edición",

    },
    {
        title: "Ingeniera de videojuegos",
        geo: "ESNE Asturias",
        date: "2014 - 2017",
        text: "Modelado 3D, Animación, Programación etc.. ",

    },
    {
        title: "Certificado de profesionalidad Nivel 3",
        geo: "Intergrupo - Vía Servicio público de empleo",
        date: "2018",
        text: "Programación en Java y C, Linux basico y Maquinas virtuales",

    },
    {
        title: "Formación autonoma",
        geo: "Web y otros medios",
        date: "continuamente ",
        text: "Me formo continuamente con videos tutoriales, cursos sobre todo online",
    },
]


export const FormacionScreen = () => {
    return (
        <div className="container text-center mt-3">
            <h1>Formación</h1>
            <hr />

           <div style={{
               display: "flex",
               flexWrap: 'wrap',
               justifyContent: "center"
           }}>
                {
                     formacion.map( ({title, geo, date, text}, i)=> {
                         return ( <FormacionItem key={uuidv4()} title ={title} geo ={geo} date ={date} text ={text} delay={(i <= 5) ? i.toString() : '5'} />)
                     })
                 }
           </div>

            {/* <FormacionItem title ={title} geo ={geo} date ={date} text ={text}/> */}
        </div>
    )
}


