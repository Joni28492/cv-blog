
const referentes = {
    shRamos: {
        nombre:'Santiago Hernandez Ramos',
        'img-url':'https://media-exp1.licdn.com/dms/image/C4D03AQFvQpEvYinVTg/profile-displayphoto-shrink_800_800/0/1530440684537?e=1645660800&v=beta&t=RUbPge2Ot5QAirXzCNaYXqrjE-zGuZdYg4zwG4ctwOs',
        especialidad: 'Seguridad de la Información',
        desc: 'Experto en seguridad de la información y Hacking Ético, muy buen comunicador para hacer sencillos temas bastante complejos',
        twitter: 'shramos'
    },
    FernandoHerrera: {
        nombre:'Fernando Herrera',
        'img-url':'https://yt3.ggpht.com/ytc/AKedOLTgdFQ9YfNLWeK_7fmJWzys25xahZvkMibBqQcSJA=s900-c-k-c0x00ffffff-no-rj',
        especialidad:'JavaScript FullStack',
        desc:'fdsfsdfsdfsdfsdfsd',
        twitter:'dfdsfsdf'
    },
    SergioHuade: {
        nombre:'Sergio Hualde',
        'img-url':'https://pbs.twimg.com/profile_images/1181228337919922177/oWOP4oNx_400x400.png',
        especialidad:'Zbrush',
        desc:'fdsfsdfsdfsdfsdfsd',
        twitter:'dfdsfsdf'
    },
}

const styleIcon = {
    fontSize: '16px',
    marginLeft:"12px"
}



export const ReferentesScreen = () => {
    return (
        <div className="container">
            <h1 className="text-center">Mis Referentes</h1>
            <hr />


          <ul style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
          }}>
              {/* inicio tarjeta */}
              <li style={{
                  margin: '12px',
                  width: '500px',
                  padding: '15px',
                  border: '1px solid gray',
                  borderRadius: '25px',
                  display: 'flex',
                  flexDirection: 'row'
              }}>
                  <img src={referentes.shRamos["img-url"]} alt="" style={{
                      borderRadius:'150px',
                      width: '120px',
                      height: '120px',
                      border: '3px solid dodgerblue'
                      
                  }}/>

                  <div style={{
                      marginLeft: '10px'
                  }}>
                    <h4> {referentes.shRamos.nombre}</h4>
                   
                   <div style={{
                       display:'flex',
                       flexDirection: 'row',
                       justifyContent: 'space-around'
                   }}>
                   <p>{referentes.shRamos.especialidad}</p>
                    <i className={`fab fa-twitter`} style={styleIcon} />
                   </div>


                    <small>{referentes.shRamos.desc}</small>
                  
                  
                  </div>
              </li>
                  {/* fin tarjeta */}
              {/* inicio tarjeta */}
              <li style={{
                  margin: '12px',
                  width: '500px',
                  padding: '15px',
                  border: '1px solid gray',
                  borderRadius: '25px',
                  display: 'flex',
                  flexDirection: 'row'
              }}>
                  <img src={referentes.FernandoHerrera["img-url"]} alt="" style={{
                      borderRadius:'150px',
                      width: '120px',
                      height: '120px',
                      border: '3px solid dodgerblue'
                      
                  }}/>

                  <div style={{
                      marginLeft: '10px'
                  }}>
                    <h4> {referentes.FernandoHerrera.nombre}</h4>
                   
                   <div style={{
                       display:'flex',
                       flexDirection: 'row',
                       justifyContent: 'space-around'
                   }}>
                   <p>{referentes.FernandoHerrera.especialidad}</p>
                    <i className={`fab fa-twitter`} style={styleIcon} />
                   </div>


                    <small>{referentes.FernandoHerrera.desc}</small>
                  
                  
                  </div>
              </li>
                  {/* fin tarjeta */}
              {/* inicio tarjeta */}
              <li style={{
                  margin: '12px',
                  width: '500px',
                  padding: '15px',
                  border: '1px solid gray',
                  borderRadius: '25px',
                  display: 'flex',
                  flexDirection: 'row'
              }}>
                  <img src={referentes.SergioHuade["img-url"]} alt="" style={{
                      borderRadius:'150px',
                      width: '120px',
                      height: '120px',
                      border: '3px solid dodgerblue'
                      
                  }}/>

                  <div style={{
                      marginLeft: '10px'
                  }}>
                    <h4> {referentes.SergioHuade.nombre}</h4>
                   
                   <div style={{
                       display:'flex',
                       flexDirection: 'row',
                       justifyContent: 'space-around'
                   }}>
                   <p>{referentes.SergioHuade.especialidad}</p>
                    <i className={`fab fa-twitter`} style={styleIcon} />
                   </div>


                    <small>{referentes.SergioHuade.desc}</small>
                  
                  
                  </div>
              </li>
                  {/* fin tarjeta */}

          </ul>
        </div>
    )
}
