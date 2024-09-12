import { Avatar } from "./Avatar";
import { ThumbsUp, Trash } from "@phosphor-icons/react"
import styles from "./Comment.module.css"

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/nalitakao.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Nalita K.</strong>
                            <time title="9 de Setembro às 08:13 h" dateTime="2024-09-09 08:13:45">Cerca de 5h atrás</time>
                        </div>
                        <button title="Deletar Comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}