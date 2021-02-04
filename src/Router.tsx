import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignIn from './UI/SignIn';
import SignUp from './UI/SignUp';

export class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route exact path='/create' component={SignUp} />
            </Switch>
        )
    }
};

export default Routes;