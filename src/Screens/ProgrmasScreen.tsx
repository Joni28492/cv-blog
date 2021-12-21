
import { IconAwesome } from '../components/IconAwesome'
import { ProgramWithOutIcon } from '../components/ProgramWithOutIcon';
import { iconProgrammingList } from '../data/IconsHardData'
import { programasSinIconos } from '../data/ProgramasSinIconos';
const { v4: uuidv4 } = require('uuid');

export const ProgrmasScreen = () => {
    return (
        <div className='container text-center'>
            <h1>Programas y tecnologias</h1>
            <hr />


            <div style={{
                display: "flex",
                flexWrap: "wrap",
                margin: '10px',
                marginTop: '25px',
                marginLeft: '25px',
                justifyContent: 'center'
            }}>
                {
                    iconProgrammingList.map(({ color, icon }) => {
                        return (<IconAwesome key={uuidv4()} color={color} icon={icon} />)

                    })
                }
            </div>


            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                {
                    programasSinIconos.map(({ nombre, stars, usedFor, img }) => {
                        return (
                            <div key={uuidv4()} className='m-1'>
                                <ProgramWithOutIcon nombre={nombre} stars={stars} usedFor={usedFor} img={img} />
                            </div>
                        )
                    })
                }
            </div>






        </div>
    )
}
