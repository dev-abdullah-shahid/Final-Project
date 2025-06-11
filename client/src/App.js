import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/about" component={About} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;