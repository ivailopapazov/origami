import { Redirect, useHistory, withRouter, Switch, Route } from 'react-router-dom'

const About = ({
    match,
    history
}) => {
    // if (Math.random() > 0.6) {
    //     return <Redirect to="/" />
        //  history.push('/');
         
        //  return null;
    // }

    return (
        <main className="main-container">
            <h1>About {match.params.name} Page</h1>

            <Switch>
                <Route path="/about/pesho">
                    <h2>Pesho is the Best!!!</h2>
                </Route>
            </Switch>
        </main>
    );
}

export default About;