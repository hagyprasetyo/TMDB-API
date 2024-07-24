import API from './axiosWithConfig';
import { getAiringToday } from './tv-show/api';
import { getNowPlaying } from './movie/api';
import { getTopMovie } from './home/api-movie';
import { getTopTv } from './home/api-tv';
import { postLogin } from './auth/api';

export {API, getNowPlaying, getAiringToday, postLogin, getTopMovie, getTopTv}