import React from "react";
import FeaturedMovie from "../../components/featured-movie";
import Categories from "../../components/categories";
import MoviesSection from "../../components/movies-section";
function HomeContainer({
  selectedCategoryMovies,
  selectedCategoryTitle,
  categories,
  popularMovies,
  topRatedMovies,
}) {
  return (
    <>
      <FeaturedMovie movie={popularMovies.results[0]} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategoryMovies && (
        <MoviesSection
          title={selectedCategoryTitle}
          movies={selectedCategoryMovies.results.slice(2, 9)}
        />
      )}
      <MoviesSection
        title="Populer Films"
        movies={popularMovies.results.slice(2, 9)}
      />
      <MoviesSection
        title="Top Rated Movies"
        movies={topRatedMovies.results.slice(10, 17)}
      />
    </>
  );
}

export default HomeContainer;
