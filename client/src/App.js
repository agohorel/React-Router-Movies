import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <Router>
      <SavedList list={savedList} />
      <Switch>
        <Route path="/movies/:id">
          <Movie addToSavedList={addToSavedList}></Movie>
        </Route>
        <Route path="/">
          <MovieList addToSavedList={addToSavedList}></MovieList>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
