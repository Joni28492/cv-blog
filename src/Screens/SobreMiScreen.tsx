import React from 'react'

export const SobreMiScreen = () => {
    return (
        <div className='container text-center animate__animated animate__fadeIn animate__slow'>
            <h1>Sobre mi</h1>
            <hr />
            <blockquote style={{
                fontStyle: 'italic',
                paddingLeft: '12px',
                borderLeft: '5px solid white'
            }} >
                <p>"Ver un video de un curso es como ver un capítulo de una serie, por lo que hacer una sección entera sería ver una temporada completa"</p>
                <footer>Joni Fernández</footer>
            </blockquote>
            <p className='mt-2'>
                Me considero una persona activa, trabajadora, empatica, siempre estoy aprendiendo y me gusta ponerlo en práctica, capacidad para comunicar el mismo concepto a 2 o mas personas que piensan diferente, Deportista, karateca y actualmente opositor
            </p>
        </div>
    )
}
