import { useParams } from "react-router";
import useFetch from "./UseFetch";
const Resources = ({globalData}) => {
    const { id } = useParams();

    


    return (

        <div >
            
            {globalData && (
         
                <article >
                <h2 style={{ color: "white" }}>{data.title}</h2>
                    <div className="cards Resources-cards">
                        {
                            (data.details).map(element => (
                                
                                <div>
                                    <a href={element.src} target="_blank">
                                        <div className="card Resources-card"  >
                                            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                <img src={data.src} className="card-img-top" alt="hb" />
                                            </div>
                                            <div className="card-body">
                                                <h2 className="card-title">{element.title}</h2>
                                                <h3>{element.org}</h3>
                                                <h3>{element.lang}</h3>
                                                <h3>{element.difficulty}</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </article>
            
            )

            }
        </div>
    );
}

export default Resources;