import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const privateRoute = ({component: Component, ...rest}) => {  
    // ...rest will contain exact and path
    return <Route {...rest} component={(props) => {
        const token = window.localStorage.getItem('token');
        
        //either we get token or we get null
        if(token){
            return <Component {...props} />
        }else{
            return <Redirect to={`/signin`}/>
        }
    }}/>
}  

export default privateRoute; 