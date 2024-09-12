import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/nalitakao.png" />
                    <div className={styles.authorInfo}>
                        <strong>Nalita Kao</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="5 de setembro às 14:45" dateTime="2024-05-09 14:45:07">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum dolor sit, </p>
                <p>Amet consectetur adipisicing elit. Nisi cupiditate labore facilis, eligendi nulla tenetur corrupti laborum! Quae quis excepturi, fugit dicta tempore culpa est ea dolor esse amet!</p>
                <p>Velit?</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário" />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>
        </article>
    )
}