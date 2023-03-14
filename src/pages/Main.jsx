import React from "react";
import MovieCard from "../components/MovieCard";

const Main = () => {
  return (
    <div>
      <div className="flex justify-center flex-wrap">
        loading ? (
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        )
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...MovieCard} />
        ))}
      </div>
    </div>
  );
};

export default Main;
