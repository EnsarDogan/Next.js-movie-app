import React from "react";
import FeatureMovieLoading from "../../components/featured-movie/featured-movie-loading";
import CategoriesLoading from "../../components/categories/categories-loading";
import MoviesSectionLoading from "../../components/movies-section/movies-section-loading";

function Loading() {
  return (
    <div>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </div>
  );
}

export default Loading;
