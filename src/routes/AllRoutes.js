import { Routes , Route } from "react-router-dom";
import { MoviesList,MovieDetails,Search, PageNotFound } from "../pages";
import React from 'react';

export const AllRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path="" element={<MoviesList apipath="movie/now_playing" title="Home" />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="movies/popular" element={<MoviesList apipath="movie/popular" title="popular" />} />
            <Route path="movies/top" element={<MoviesList apipath="movie/top_rated" title="Top Rated" />} />
            <Route path="movies/upcoming" element={<MoviesList apipath="movie/upcoming" title="Upcoming" />} />
            <Route path="/search" element={<Search apipath="search/movie" />} />
            <Route path="*" element={<PageNotFound title="Page Not Found" />} />
        </Routes>
    </main>
  )
}
