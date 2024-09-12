import styles from "./Sidebar.module.css";

import profileBG from "../assets/Profile-bg.png";
import { PencilSimpleLine } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={profileBG} />
            
            <div className={styles.profile}>
                <Avatar src="https://github.com/nalitakao.png" />

                <strong>Nalita Kao</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}