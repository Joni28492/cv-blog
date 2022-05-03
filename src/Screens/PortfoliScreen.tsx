import { repoProyects, visibleProjects } from '../data/projects';



export const PortfoliScreen = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h1 className='text-center'>Mis proyectos</h1>
            <hr />

            <div className="container"
                style={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}
            >


                <ul className='text-center'>
                    <i className="fa-solid fa-code"
                        style={{
                            fontSize: 90,
                            color: 'lightGray'
                        }}
                    />

                    {
                        visibleProjects.map(({ nameProyect, url }) => {
                            return <li key={url} className='mt-2'>
                                <a style={{
                                    textDecoration: 'none',
                                    color: "white",
                                    fontSize: '30px',
                                }} href={url}>{nameProyect}</a>
                            </li>
                        })
                    }



                </ul>

                <ul>
                    <i className="fa-brands fa-github-square"
                        style={{
                            fontSize: 110,
                            color: 'lightGray'
                        }}
                    />
                    {
                        repoProyects.map(({ nameProyect, url }) => {
                            return <li key={url} className='mt-2'>
                                <a
                                    style={{
                                        textDecoration: 'none',
                                        color: "white",
                                        fontSize: '30px',
                                    }}
                                    href={url}>{nameProyect}</a>
                            </li>
                        })
                    }

                </ul>

                <hr />




            </div>

            <div className="container mt-3">
                <h3 className='text-center'>Algunas maquinas de HACK THE BOX</h3>
                <hr />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <img width='820px' className='mt-4' src="https://media-exp1.licdn.com/dms/image/C4E22AQEGeFQ06kSLJQ/feedshare-shrink_2048_1536/0/1640196811894?e=2147483647&v=beta&t=t2mcSmCPFwcAkXYSr5sknlh9gWYACdm4my9cWcuAXKQ" alt="tier 1" />
                    <img width='820px' className='mt-4' src="https://media-exp1.licdn.com/dms/image/C4E22AQFm2JL7cYDykg/feedshare-shrink_2048_1536/0/1639840666771?e=2147483647&v=beta&t=yHn7xAMZLYZorPRuYJGXYM9bsT4WTRBw8aG16BKv2OA" alt="tier 0" />
                </div>

            </div>
        </div>
    )
}
