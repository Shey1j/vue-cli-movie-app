import Movies from './components/Movies.vue';
import MovieById from './components/MovieById.vue';

export default [
    {path: '/', component: Movies},
    {name: 'single-movie', path: '/:movieId', component: MovieById}
]