import { Route, Switch } from 'react-router-dom';
import { AboutPage } from '../../pages/AboutPage/AboutPage';
import { ExpPage } from '../../pages/ExpPage/ExpPage';
import { FormationPage } from '../../pages/FormationPage/FormationPage';
import { HomePage } from '../../pages/HomePage/HomePage';
import { SkillsPage } from '../../pages/SkillsPage/SkillsPage';

export function Routes() {

    return (
        
        <Switch>
        
            

            <Route path="/exp">
                <ExpPage/>
            </Route>

            <Route path="/formation">
                <FormationPage/>
            </Route>

            <Route path="/skills">
                <SkillsPage/>
            </Route>
            
            <Route path="/about">
                <AboutPage/>
            </Route>

           
            <Route path="/">
                <HomePage/>
            </Route>

            
        </Switch>
    );

}