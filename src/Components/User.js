// import { useState } from "react";
// import { useHistory } from "react-router";
// import { Link } from "react-router-dom";
// import useFetch from "./UseFetch";

// const User = (props) => {

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [email, setEmail] = useState("");
//     const [registered, setRegistered] = useState(false);
//     const [choice, setChoice] = useState(true);
//     const [isValid, setIsValid] = useState(false);
//     const history = useHistory();

//     const { data, error, isPending } = useFetch('http://localhost:8000/userinfo');

//     const handleSignUp = (event) => {
//         event.preventDefault();
//         const user_data = { username, email, password };
//         setRegistered(true);
//         fetch("http://localhost:8000/userinfo", {
//             method: "POST",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify(user_data)
//         }).then(
//             setRegistered(false),
//             history.push("/")
//         )
//     }   

//     const handleSignIn =(event)=>{
//         let milGya=false;
//         event.preventDefault();
//         setRegistered(true);
//         data.map((element)=>{

//             if(email === element.email)
//             {   milGya=true;
//                 props.setProfile(true);
//                 props.setUserData(element.id);
//                 setRegistered(false);
//                 history.push('/');    
//             }
//         })

//         if(!milGya){
//             console.log("nhi mila");
//             setIsValid(true);
//             setRegistered(false); 
//         }

//         }


//     return (

//         <div className="signup-content">
//             <div className="login-box">
//                 <h2>CODE EASY</h2>
//                 { !choice && 
//                 <form onSubmit={handleSignUp} className="form">
//                     <div className="textbox">
//                         <i className="fas fa-user"></i>
//                         <input
//                             type="text"
//                             placeholder="Username"
//                             required
//                             value={username}
//                             onChange={(event) => setUsername(event.target.value)}
//                         />
//                     </div>
//                     <div className="textbox">
//                         <i className="fas fa-envelope"></i>
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             required
//                             value={email}
//                             onChange={(event) => setEmail(event.target.value)}
//                         />
//                     </div>
//                     <div className="textbox">
//                         <i className="fas fa-lock"></i>
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             required
//                             value={password}
//                             onChange={(event) => setPassword(event.target.value)}
//                         />
//                     </div>
//                     {!registered && <button className="btn btn-outline-success" type="submit" style={{ color: "white" }}><i className="fa fa-fw fa-user"></i>SignUp</button>}
//                     {registered && <button className="btn btn-outline-success" type="submit" style={{ color: "white" }} disabled><i className="fa fa-fw fa-user"></i>Signing..</button>}
                    
//                     <button className="btn btn-outline-success" onClick={()=>setChoice(true)}>Login</button>
//                </form>
//                 }

//                 { choice && <form onSubmit={handleSignIn}>
                    
//                     <div className="textbox">
//                         <i className="fas fa-user"></i>
//                         <input
//                             type="text"
//                             placeholder="Email"
//                             required
//                             value={email}
//                             onChange={(event) => setEmail(event.target.value)}
//                         />
//                     </div>
//                     <div className="textbox">
//                         <i className="fas fa-lock"></i>
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             required
//                             value={password}
//                             onChange={(event) => setPassword(event.target.value)}
//                         />
//                     </div>
//                     {isValid && <p style={{color:"red"}} >Invalid username or password !</p> }
//                     {!registered && <button className="btn btn-outline-success" type="submit" style={{ color: "white" }} ><i className="fa fa-fw fa-user"></i>Login</button>}
//                     {registered && <button className="btn btn-outline-success" type="submit" style={{ color: "white" }} disabled><i className="fa fa-fw fa-user"></i>Loging...</button>}
//                     <button className="btn btn-outline-success" onClick={()=>setChoice(false)}>Create Account</button>
//                 </form>}
//             </div>
//         </div>

//     );
// }

// export default User;
