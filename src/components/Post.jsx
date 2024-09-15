import { format, formatDistanceToNow } from "date-fns";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

export function Post({author, content, publishedAt}) {
    const [comments, setComments] = useState(["Post testandoo",]);
    const [newComment, setNewComment] = useState("");

    const publishedDateFormat = format(publishedAt, "dd' de 'LLLL' às 'HH:mm'h'", {locale: ptBR});

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateComment() {
        event.preventDefault(); //previne que a página recarregue
        setComments([...comments, newComment]); //manipula a variável array comments e adiciona newComment
        setNewComment(""); //limpa o campo textarea
    }

    function handleNewComment() {
        event.target.setCustomValidity("");
        setNewComment(event.target.value);
    }

    function deleteComment(deletedComments) {
        
        const filteredActiveComments = comments.filter(comment => {
            return comment !== deletedComments;
        });
        setComments(filteredActiveComments);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity("Esse campo é obrigatório!");
    }

    const isNewCommentEmpty = newComment.length === 0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>{publishedDateRelativeNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(paragraph => (
                    <p key={paragraph.content}>{paragraph.content}</p>
                ))}
            </div>

            <form onSubmit={handleCreateComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name="comment" 
                    placeholder="Deixe um comentário" 
                    value={newComment} 
                    onChange={handleNewComment} 
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
            {comments.map(comment => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            );
          })}
            </div>
        </article>
    )
}