import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage/HomePage';

export function Routes() {

    return (
        
        <Switch>
           
            <Route path="/">
                <HomePage/>
            </Route>

        </Switch>
    );

}