import { iconSocialMediaList } from "./data/IconsHardData"

export const SocialMedia = () => {

    const styleIcon = {
        marginLeft:"12px"
    }

    const styleAnchorNone = {
        textDecoration: 'none',
        color:"white"
    }

    return (
        <div  style={{
            display: 'flex',
            textDecoration: 'none',
            fontSize: '28px',
          
           
        }}>
            
            {
                iconSocialMediaList.map(({url, icon}) => {
                    return ( <a key={url}href={url}  style={styleAnchorNone}>
                                 <i className={`fab fa-${icon}`} style={styleIcon}></i>
                            </a>)
                })
            }
           
           
        </div>
    )
}
