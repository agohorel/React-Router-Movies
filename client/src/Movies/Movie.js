import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import MovieCard from "./MovieCard";

const Movie = ({ addToSavedList }) => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = addToSavedList;
  //   addToSavedList(movie);
  // };

  return <MovieCard movie={movie} addToSavedList={addToSavedList}></MovieCard>;
};

export default Movie;
