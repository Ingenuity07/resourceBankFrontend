
import { useState,useEffect } from "react";
import { Link } from "react-router-dom"

const Cards = ({ data, title }) => {
   const [year,setYear]=useState([])
 
   const key = 'year';
   
   function compare(a, b) {
    if (a.year> b.year) return 1;
    if (a.year < b.year) return -1;
    return 0;
  }


    useEffect(() => {
        const unique = [...new Map(data.map(item =>
            [item[key], item])).values()];
          
        console.log(unique)
        unique.sort(compare)
        setYear(unique)
        
        console.log(year)
    }, [])
    


    return (

        <div>
            <h1 style={{ margin: "1rem", color: "white" }} >{title}</h1>
            <div className="cards cards-crd">
                {
                    year.map(element => (
                        <Link to={`/Resources/${element.year}`}>
                            <div className="card card-crd" >
                                {/* <img  className="card-img-top" alt="..." /> */}
                                <div className="card-body">
                                    <h5 className="card-title">{element.branch}</h5>
                                </div>
                            </div>
                         </Link>
                    ))
                }
            </div>
        </div>
        );
}

export default Cards;