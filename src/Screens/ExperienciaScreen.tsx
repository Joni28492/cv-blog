import { ExperienciaItem } from "../components/ExperienciaItem"
import { formacionListItmes } from "../data/IconsHardData"
const { v4: uuidv4 } = require('uuid');


export const ExperienciaScreen = () => {
    return (
        <div className="container text-center mt-2">
            <h1>Experiencia</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: "center"

            }}>

                {
                    formacionListItmes.map(({ color, year, title, company, more }, i) => {
                        return (<ExperienciaItem key={uuidv4()} color={color} year={year} title={title} company={company} more={more} delay={(i <= 5) ? i.toString() : '5'} />)
                    })
                }

            </div>

        </div>
    )
}
