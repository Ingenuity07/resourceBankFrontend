import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import useFetch from "./UseFetch";
const Subjects = ({ globalData }) => {
    const { branch,year } = useParams();


    const [subjects, setSubjects] = useState([])

    function compare(a, b) {
        if (a.subject > b.subject) return 1;
        if (a.subject < b.subject) return -1;
        return 0;
    }


    useEffect(() => {
        const unique = globalData.filter((ele)=>{
            if(ele.year==year&&ele.branch==branch)
                return ele;
        })

        unique.sort(compare)
        setSubjects(unique)

        console.log(unique)

    }, [])



    return (

        <div >

            {subjects && (

                <article >
                    <h2 style={{ color: "white" }}>All Subjects</h2>
                    <div className="cards Resources-cards">
                        {
                            (subjects).map(element => (
                                <div>
                                    <Link to={`/Paper/${branch}/${year}/${element.subject}`}>
                                        <a  target="_blank">
                                            <div className="card Resources-card"  >
                                                <div className="card-body">
                                                    <h2 className="card-title">{element.subject}</h2>
                                                </div>
                                            </div>
                                        </a>
                                        </Link>
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

export default Subjects;