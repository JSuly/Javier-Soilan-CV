import { Route, Switch } from 'react-router-dom';
import { AboutPage } from '../../pages/AboutPage/AboutPage';
import { HomePage } from '../../pages/HomePage/HomePage';

export function Routes() {

    return (
        
        <Switch>
        
            <Route path="/about">
                <AboutPage/>
            </Route>

           
            <Route path="/">
                <HomePage/>
            </Route>

            
        </Switch>
    );

}