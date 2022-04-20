import reactRouterDom from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetails/MovieDetails'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Header from './components/Header/Header'
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">

      <Header></Header>
<div className='container'>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/movie/:imdbID' component={MovieDetail} />
          <Route component={PageNotFound} />
        </Switch>
        </div>
      <Footer />

    </div>
  );
}

export default App;
