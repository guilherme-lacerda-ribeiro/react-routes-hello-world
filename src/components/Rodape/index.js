import styles from "./Rodape.module.css";

// https://react-svgr.com/
// já vem por padrão em um projeto React. Esse pacote permite que utilizemos um SVG como um componente React, assim não precisamos utilizá-lo como uma tag img.
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg";

export default function Rodape() {
  return <footer className={styles.rodape}>
    <MarcaRegistrada />
    Desenvolvido por Guilherme pelos cursos da Alura
  </footer>;
}
