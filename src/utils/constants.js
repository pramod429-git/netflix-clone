export const NETFLIX_LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NETFLIX_USER_LOGO =
  "https://i.pinimg.com/736x/91/86/1b/91861b749841221d52122f0c2933d8a6.jpg";

export const BG_LOGO_Url =
  "https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_small.jpg";

export const MainMurl = "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const PopularMovieUrl =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TopRatedMovieUrl =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const upcomingMovieUrl =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const GET_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_APIKEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w200/";

export const SUPPORTED_LANGUAGE = [
  { identifier: "english", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "kannada", name: "Kannada" },
];
