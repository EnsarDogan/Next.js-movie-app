import HomeContainer from "../../containers/home";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjM1NzY4MzAxNmU3NDQ1OGNjMGEzZmRjZDYxYWYxYSIsInN1YiI6IjY0NWI4OGRkNmFhOGUwMDBlNGJlMWVhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GAOCgsuQR_Y1FRkVGmdaqjUCTxnG0VyN97lO1r5Nb6s",
  },
};
const getPopularMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&with_genres=16",
    options
  );
  return await res.json();
};
const getMovieListByCategory = async (genreId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&with_genres=${genreId}`,
    options
  );
  return await res.json();
};

const getTopRatedMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  );
  return await res.json();
};

const getCategories = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    options
  );
  const data = await res.json();
  const { genres } = data;
  return genres;
};

export default async function Home({ params }) {
  const categories = await getCategories();
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();
  let selectedCategoryMovies;
  let selectedCategoryTitle;
  if (params.categories?.length > 0) {
    selectedCategoryMovies = await getMovieListByCategory(params.categories[0]);
    selectedCategoryTitle = categories.find(
      ({ id }) => `${id}` === params.categories[0]
    )?.name;
  }
  return (
    <HomeContainer
      categories={categories}
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      selectedCategoryMovies={selectedCategoryMovies}
      selectedCategoryTitle={selectedCategoryTitle}
    />
  );
}
