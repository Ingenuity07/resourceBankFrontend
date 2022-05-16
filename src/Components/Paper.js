import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import useFetch from "./UseFetch";
const Paper = () => {
    
    const { branch , year , subject } = useParams();

    const {data:paper,isPending,error}=useFetch(`http://localhost:8000/document/download?year=`+year+`&branch=`+branch+`&subject=`+subject)

    console.log(paper)

    const handleDownload=(pdf)=>{
        console.log("jgsafdj")
    }

    return (

        <div >
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {paper && (
                    
                <article >
                    {console.log(paper)}
                    <h2 style={{ color: "white" }}>All Subjects</h2>
                    <div className="cards Resources-cards">
                        {
                            (paper).map(element => (
                                <div >
                                        <a  target="_blank">
                                            <div className="card Resources-card"  >
                                                <div className="card-body">
                                                    <h2 className="card-title">{element.subject}</h2>
                                                    <button  onClick={()=>{handleDownload(element.document)}} >DOWNLOAD</button>
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

export default Paper;