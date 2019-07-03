import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

export class User extends Component {

    componentDidMount() {
        console.log(this.props.match.params.login)
        this.props.getUser(this.props.match.params.login)
    }
    render() {
        const {name,
               location,
               avatar_url,
               bio,
               blog,
               login,
               html_url,
               followers,
               following,
               public_repos,
              } = this.props.user


        const { loading } = this.props;

        if(loading) return <Spinner />
        return (
            <Fragment>
                <Link to='/' className="btn btn-light">Back to search</Link>
                <div className='card grid-2'>
                    <div className='all-center'>
                        <img src={avatar_url} className='round-img' style={{width: '150px'}}/>
                        <h1>{name}</h1>
                        <p>Location:{location}</p>
                    </div>
                    <div>
                        {bio && (
                            <Fragment>
                                <h3>Bio:</h3>
                                <p>{bio}</p>
                            </Fragment>
                        )}
                        <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default User
