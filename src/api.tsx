import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = "1d57d32e03781626b0ed9e46d134c77d";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

interface IMovie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  original_language: string;
  original_title: string;
  overview: string;
}
interface ITv {
  id: number;
  original_name: string;
  backdrop_path: string;
  poster_path: string;
  original_language: string;
  original_title: string;
  overview: string;
}

export interface IGetMovies {
  dates: {
    maximum: number;
    minimum: number;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IGetTv {
  dates: {
    maximum: number;
    minimum: number;
  };
  page: number;
  results: ITv[];
  total_pages: number;
  total_results: number;
}

export interface IGetVideos {
  results: IVideo[];
}

export interface IVideo {
  id: string;
  key: string;
  name: string;
}

export const getMovies = async () =>
  instance
    .get(`movie/now_playing?api_key=${API_KEY}`)
    .then((response) => response.data);

export const getMovieInfo = async ({ queryKey }: QueryFunctionContext) => {
  const [_, movieId] = queryKey;
  return instance
    .get(`movie/${movieId}?api_key=${API_KEY}`)
    .then((response) => response.data);
};

export const getMovieVideo = async ({ queryKey }: QueryFunctionContext) => {
  const [_, movieId] = queryKey;
  return instance
    .get(`movie/${movieId}/videos?api_key=${API_KEY}`)
    .then((response) => response.data);
};

export const getTv = async () =>
  instance
    .get(`tv/top_rated?api_key=${API_KEY}`)
    .then((response) => response.data);

export const getTvInfo = async ({ queryKey }: QueryFunctionContext) => {
  const [_, tvId] = queryKey;
  return instance
    .get(`tv/${tvId}?api_key=${API_KEY}`)
    .then((response) => response.data);
};

export const getTvVideo = async ({ queryKey }: QueryFunctionContext) => {
  const [_, tvId] = queryKey;
  return instance
    .get(`tv/${tvId}/videos?api_key=${API_KEY}`)
    .then((response) => response.data);
};
