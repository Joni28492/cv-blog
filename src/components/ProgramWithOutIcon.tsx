import ReactStars from 'react-stars';




// ReactStars docs https://www.npmjs.com/package/react-stars
export const ProgramWithOutIcon = ({ nombre = 'Nombre', stars = 5, usedFor = 'para que se usa', img = '' }) => {

    return (
        <div className="container border border-success rounded-3 " style={{
            marginTop: '25px',
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 8,
            paddingLeft: 0,
            paddingRight: 0,
            width: '550px'
        }}>
            <div style={{
                paddingRight: '15px',
                paddingLeft: '15px',
                backgroundColor: '#1f939c',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <h3>{nombre}</h3>
                <ReactStars
                    count={stars}
                    size={24}
                    color1={'#ebde34'}
                />
            </div>


            <div style={{
                marginLeft: '10px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',

            }}>
                <p style={{
                    marginRight: '10px'
                }}
                >{usedFor}</p>

                {
                    (img !== '')
                    && (<img src={`${img}`}
                        alt=""
                        style={{
                            height: '150px',
                        }}
                    />)
                }
            </div>
        </div>
    )
}
