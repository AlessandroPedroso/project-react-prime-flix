import { useEffect, useState } from "react"
import api from '../../services/api'
import {API_KEY} from '../../config'

export default function Home() {

    const [filmes,setFilmes] = useState([]);

    useEffect(() => {

        async function loadFilmes() {
            const {data:{results}} = await api.get("movie/now_playing", {
                params: {
                    api_key: API_KEY,
                    language: 'pt-BR',
                    page:1
                }
            })

            console.log(results)
        }

        loadFilmes();
    },[])


    return (
        <div>
            <h1>BEM VINDO A HOME</h1>
        </div>
    )
}