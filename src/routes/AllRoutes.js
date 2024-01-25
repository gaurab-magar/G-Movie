import { Routes , Route } from "react-router-dom";
import { MoviesList,MovieDetails,Search, PageNotFound } from "../pages";
import React from 'react';

export const AllRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path="" element={<MoviesList apipath="movie/now_playing" />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="movies/popular" element={<MoviesList apipath="movie/popular" />} />
            <Route path="movies/top" element={<MoviesList apipath="movie/top_rated" />} />
            <Route path="movies/upcoming" element={<MoviesList apipath="movie/upcoming" />} />
            <Route path="/search" element={<Search apipath="search/movie" />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </main>
  )
}
