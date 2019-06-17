import React from 'react';
import UserItem from './Useritem';
import Spinner from '../layout/Spinner';

// export default class Users extends Component {
//     // constructor() {
//     //     super()
//     //     this.state = {
//     //         users : [
//     //             {
//     //                 id:'1',
//     //                 login: 'mojombo',
//     //                 avatar_url: "https://avatars0.githubusercontent.com/u/5?v=4",
//     //                 html_url: "https://github.com/ezmobius",
//     //             },
//     //             {
//     //                 id:'2',
//     //                 login: "evanphx",
//     //                 avatar_url: "https://avatars0.githubusercontent.com/u/7?v=4",
//     //                 html_url: "https://github.com/evanphx",
//     //             },
//     //             {
//     //                 id:'3',
//     //                 login: "vanpelt",
//     //                 avatar_url: "https://avatars1.githubusercontent.com/u/17?v=4",
//     //                 html_url: "https://github.com/vanpelt",
//     //             },
//     //         ]
//     //     }
//     // }

//     // state = {
//     //     users : [
//     //         {
//     //             id:'id',
//     //             login: 'mojombo',
//     //             avatar_url: "https://avatars0.githubusercontent.com/u/5?v=4",
//     //             html_url: "https://github.com/ezmobius",
//     //         },
//     //         {
//     //             id:'id',
//     //             login: "evanphx",
//     //             avatar_url: "https://avatars0.githubusercontent.com/u/7?v=4",
//     //             html_url: "https://github.com/evanphx",
//     //         },
//     //         {
//     //             id:'id',
//     //             login: "vanpelt",
//     //             avatar_url: "https://avatars1.githubusercontent.com/u/17?v=4",
//     //             html_url: "https://github.com/vanpelt",
//     //         },
//     //     ]
//     // }

//    render() {
//        const { users } = this.props
//        return (
//            <div style={userStyle}>
//               {users.map(user => (
//                   <UserItem key={user.id} user={user}/>
//               ))}
//            </div>
//        )
//    }
   
// }


//replace class component with functional component
const Users = (props) => {

    if (props.loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                 {props.users.map(user => (
                      <UserItem key={user.id} user={user}/>
                   ))}
            </div>
        )
    }
}

export default Users;

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}