

interface ExperienciaInterface {
    color: string;
    year: string;
    title: string;
    company: string;
    more: string;
}



export const ExperienciaItem = ({ color = 'red', year = '2020-2021', title = 'titulo', company = 'compañia', more = 'lorem' }: ExperienciaInterface) => {
    return (
        <div className="animate__animated animate__lightSpeedInRight" style={{
            margin: '5px',
            border: `2px solid ${color}`,
            width: '420px',
            height: '180px',
            borderRadius: '20px',
            overflow: 'hidden'
        }}>

            <header style={{
                margin: 0,
                padding: 0,
                backgroundColor: `${color}`,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <h4 style={{
                    marginLeft: '12px'
                }}>{title}</h4>
                <span style={{
                    marginRight: '12px'
                }}>{year}</span>
            </header>
            <p style={{
                margin: '12px'
            }}>
                {more}
            </p>
        </div>
    )
}
