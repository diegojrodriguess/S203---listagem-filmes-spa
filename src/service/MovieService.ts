import Movie from '../models/Movie';

class MovieService{
    static getMovies(): Movie[]{
        //método para retornar uma lista de filmes
        return [
            {
                title: "Halloween",
                director: "John Carpenter",
                year: 1978,
                actors: ["Jamie Lee Curtis", "Nick Castle"]
              },
              {
                title: "Justice League - SnyderCut",
                director: "Zack Snyder",
                year: 2021,
                actors: ["Ben Affleck", "Henry Cavill"]
              },
              {
                title: "Butterfly Effect",
                director: "Eric Bress",
                year: 2004,
                actors: ["Ashton Kutcher", "Amy Smart"]
              },
              {
                title: "The Matrix",
                director: "Lana Watchowski",
                year: 1999,
                actors: ["Keanu Reeeves", "Laurence Fishburne"]
              },
        ];
    }
}

export default MovieService;