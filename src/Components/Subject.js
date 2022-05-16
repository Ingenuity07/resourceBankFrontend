import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import useFetch from "./UseFetch";
const Subjects = ({ globalData }) => {
    const { id1,id2 } = useParams();

    console.log(id1,id2)

    const [year, setYear] = useState([])

    const key = 'year';

    function compare(a, b) {
        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;
        return 0;
    }


    useEffect(() => {
        const unique = [...new Map(globalData.map(item =>
            [item[key], item])).values()];

        unique.sort(compare)
        setYear(unique)

        console.log(year)
    }, [])



    return (

        <div >

            {year && (

                <article >
                    <h2 style={{ color: "white" }}>All Subjects</h2>
                    <div className="cards Resources-cards">
                        {
                            (year).map(element => (
                                <div>
                                        <a href={element.src} target="_blank">
                                            <div className="card Resources-card"  >
                                                <div className="card-body">
                                                    <h2 className="card-title">{element.year}</h2>
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

export default Subjects;