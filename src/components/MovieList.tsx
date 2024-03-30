import React from 'react';
import Movie from '../models/Movie.ts';
import MovieService from '../service/MovieService.ts';
import '../styles/MovieList.css';

const MovieList: React.FC = () => {
    const movies: Movie[] = MovieService.getMovies();

    return (
        <div>
            <h2>Listagem de Filmes</h2>
            <ul>     
                {movies.map((movie, index) => (
                <li key={index}>
                    <strong>Título:</strong> {movie.title} <br />
                    <strong>Diretor:</strong> {movie.director} <br />
                    <strong>Ano:</strong> {movie.year} <br />
                    <strong>Atores:</strong> {movie.actors.join(', ')} {/* Exibe os atores separados por vírgula */}
                    <hr />
                </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieList;