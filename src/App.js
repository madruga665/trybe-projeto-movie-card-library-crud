import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header />
    <Footer />
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route
          path="/movies/:id"
          render={ ({ match: { params: { id } } }) => <MovieDetails id={ id } /> }
        />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
