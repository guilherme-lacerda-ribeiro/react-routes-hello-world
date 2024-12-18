import { useParams } from "react-router-dom";
import posts from 'json/posts.json';
import PostModelo from "components/PostModelo";
import ReactMarkdown from 'react-markdown'
import './Post.css'
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "components/PaginaPadrao";
import styles from './Post.module.css'
import PostCard from "components/PostCard";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    // return post.id === parametros.id //parametros é sempre string, pode ser qq coisa
    return post.id === Number(parametros.id)
  })

  if (!post) {
    return <NaoEncontrada />
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4)

  return (
    <PaginaPadrao>
      <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >

        <div className='post-markdown-container'>
          <ReactMarkdown>
            {post.texto}
          </ReactMarkdown>
        </div>

        <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>

        <ul className={styles.postsRecomendados}>
          {postsRecomendados.map((post) => 
            <PostCard post={post} />
            // <PostCard key={post.id} id={post.id} titulo={post.titulo} />
          )}
        </ul>

      </PostModelo>          
    </PaginaPadrao>
  );
}
