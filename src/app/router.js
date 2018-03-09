import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import React  from 'react';

import StarshipsLibraryContainer from "./starships-library/starships-library.container";
import Home from './home/home.component';
import Header from './header/header.component';

const AppRouter = () => {
  return (
    <Router>
      <main>
        <Header/>

        <hr/>

        <Route exact path="/"
               component={Home}/>
        <Route path="/library"
               component={StarshipsLibraryContainer}/>
      </main>
    </Router>
  );
};

export default AppRouter;
