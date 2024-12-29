import { useEffect, useState } from "react"
import api from '../../services/api'
import { API_KEY } from '../../config'
import { Link } from "react-router-dom";
import './home.css';

export default function Home() {

    const [filmes,setFilmes] = useState([]);

    useEffect(() => {

        async function loadFilmes() {
            const { data: { results } } = await api.get("movie/now_playing", {
                params: {
                    api_key: API_KEY,
                    language: 'pt-BR',
                    page: 1
                }
            })

            console.log(results.slice(0, 10));
            
            setFilmes(results.slice(0, 10));
        }

        loadFilmes();
    },[])


    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filmes.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}