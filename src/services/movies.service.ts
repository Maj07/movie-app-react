const movieApiBaseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";

export function discoverMovies(): Promise<Movie[]> {
  return fetch(
    `${movieApiBaseUrl}/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((res) => res.json())
    .then((response) => mapResult(response.results))
    .catch((_) => {
      return [];
    });
}

export function searchMovies(search: string): Promise<Movie[]> {
  return fetch(
    `${movieApiBaseUrl}/search/movie?query=${search}&api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((res) => res.json())
    .then((response) => mapResult(response.results))
    .catch((_) => {
      return [];
    });
}

function mapResult(res: any[]): Movie[] {
  return res.map((movie) => {
    const {
      id,
      title,
      vote_average,
      overview,
      poster_path,
      release_date,
    } = movie;

    return {
      id,
      title,
      date: release_date,
      rating: vote_average,
      resume: overview,
      picture: poster_path ? `${posterBaseUrl}${poster_path}` : undefined,
    };
  });
}

export interface Movie {
  id: number;
  date: string;
  title: string;
  rating: number;
  resume: string;
  picture?: string;
}
