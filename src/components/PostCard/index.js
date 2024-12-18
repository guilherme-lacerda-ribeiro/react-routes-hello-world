import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import BotaoPrincipal from "components/BotaoPrincipal";

// export default function PostCard({id, titulo}) {
//   return (
//     <Link to={`/posts/${id}`}>
//       <div className={styles.post} key={id}>
//         <img
//           className={styles.capa}
//           alt={`Imagem da capa do post ${titulo}`}
//           src={`assets/posts/${id}/capa.png`}
//         />
//         <h2 className={styles.titulo} >{titulo}</h2>
//         <BotaoPrincipal>Ler</BotaoPrincipal>
//       </div>
//     </Link>
//   );
// }
export default function PostCard({post}) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post} key={post.id}>
        <img
          className={styles.capa}
          alt={`Imagem da capa do post ${post.titulo}`}
          src={`assets/posts/${post.id}/capa.png`}
        />
        <h2 className={styles.titulo} >{post.titulo}</h2>
        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  );
}
