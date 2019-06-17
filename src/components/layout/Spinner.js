import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => <Fragment>
            <img src={spinner} alt="Loading..." style={{width:'200px', margin:'auto', display:'block'}}/>
        </Fragment>

//if we don't have any js we can return this directly - without return function
export default Spinner;
