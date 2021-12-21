import React from 'react'

export const IconAwesome = ({color="grey", icon="js"}) => {
    return (
        <div >
            <i className={`fab fa-${icon}`} style={{
                color,
                marginLeft: "25px",
                fontSize: "45px"
            }}></i>
        </div>
    )
}
