import React from 'react';
import { Link } from 'react-router-dom';

// function Useritem (props) {

//         const {login, avatar_url, html_url} = props.user;
//         console.log(props)

//         return (
//             <div className="card text-center">
//               <img src={avatar_url} alt="user" className="round-img" style={{width:"60px"}}/>
//               <p>{login}</p>
//               <a  className="btn btn-dark my-1" href={html_url}>Read more</a>
//             </div>
//         )

// }

const Useritem =  (props) => {

    const {login, avatar_url, html_url} = props.user;
    console.log(props)

    return (
        <div className="card text-center">
          <img src={avatar_url} alt="user" className="round-img" style={{width:"60px"}}/>
          <p>{login}</p>
          <a  className="btn btn-dark my-1" href={html_url}>Read more</a>
          <Link className="btn btn-dark my-1" to={`/user/${login}`}>Read more</Link>
        </div>
    )


    }

export default Useritem;