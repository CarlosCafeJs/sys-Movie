'use client';

// components/FilmesPopulares.js
import useSWR from 'swr';
import fetcher from '@/utils/fatcher';
import { useState } from 'react';

const API_KEY = '9912861af6d0cdd28decc331714f2232'; // Coloque sua chave da TMDB aqui
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`;

export default function HOME() {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  const [randomMovies, setRandomMovies] = useState<any[]>([]);

  // Função para sortear 5 filmes aleatórios
  const getRandomMovies = () => {
    if (data && data.results) {
      const shuffled = [...data.results].sort(() => 0.5 - Math.random());
      setRandomMovies(shuffled.slice(0, 5));
    }
  };

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os filmes.</p>;

  return (
    <div>
      <h2>Filmes Populares</h2>
      <button onClick={getRandomMovies}>Mostrar 5 Filmes Aleatórios</button>
      <div className="movie-grid">
        {(randomMovies.length ? randomMovies : data.results).map((filme: any) => (
          <div key={filme.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
              alt={filme.title}
              className="movie-poster"
            />
            <h3>{filme.title}</h3>
            <p>{filme.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
