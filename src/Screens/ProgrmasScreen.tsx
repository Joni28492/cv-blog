import React from 'react'
import { IconAwesome } from '../components/IconAwesome'
import { iconProgrammingList } from '../data/IconsHardData'

export const ProgrmasScreen = () => {
    return (
        <div>
            <h1>Programs Screen</h1>
            <hr />


            <div style={{
                display: "flex",
                flexWrap: "wrap",
                marginLeft: '25px'
            }}>
                {
                    iconProgrammingList.map(({color, icon}) =>{
                        return (<IconAwesome color={color} icon={icon}/>)

                    })
                }
            </div>

            


            
        </div>
    )
}
