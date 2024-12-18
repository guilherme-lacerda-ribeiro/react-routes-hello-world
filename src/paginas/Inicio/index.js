import styles from "./Inicio.module.css";
import posts from "json/posts.json";
import PostCard from "components/PostCard";

export default function Inicio() {
  return (
      <ul className={styles.posts}>
        {posts.map((post) =>
          <PostCard post={post}/>
          // <PostCard key={post.id} id={post.id} titulo={post.titulo}/>
          // <li key={post.id}>{post.titulo}</li>
        )}
      </ul>
  );
}
