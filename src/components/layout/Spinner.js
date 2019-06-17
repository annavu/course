import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = props => {
    return (
        <Fragment>
            <img src={spinner} alt="Loading..."/>
        </Fragment>
    )
}


export default Spinner;
