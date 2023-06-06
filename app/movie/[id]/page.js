import React from "react";
import MovieContainer from "../../../containers/movie-details";
import { notFound } from "next/navigation";
const getDetailedMovie = async (id) => {
  console.log({ id });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjM1NzY4MzAxNmU3NDQ1OGNjMGEzZmRjZDYxYWYxYSIsInN1YiI6IjY0NWI4OGRkNmFhOGUwMDBlNGJlMWVhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GAOCgsuQR_Y1FRkVGmdaqjUCTxnG0VyN97lO1r5Nb6s",
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  const data = await res.json();
  return data;
};

async function MovieDetailPage({ params, searchParams }) {
  const detailedMovie = await getDetailedMovie(params.id);

  if (searchParams.error === "true") {
    throw new Error("Error");
  }
  if (!detailedMovie) {
    notFound();
  }

  return <MovieContainer movie={detailedMovie} />;
}

export default MovieDetailPage;
