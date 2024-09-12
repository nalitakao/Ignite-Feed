import { Header } from "./components/Header.jsx"
import { Post } from "./components/Post.jsx"
import { Sidebar } from "./components/Sidebar.jsx";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
          <main>
            <Post
              author="Nalita Kao"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum quasi dolor nesciunt explicabo magnam ullam quae, odit necessitatibus veritatis fugit obcaecati cumque vero a praesentium, autem sed exercitationem cupiditate." 
            />

            <Post
              author="Paulo Coelho"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum quasi dolor nesciunt explicabo magnam ullam quae, odit necessitatibus veritatis fugit obcaecati cumque vero a praesentium, autem sed exercitationem cupiditate." 
            />
          </main>
        
      </div>
    </div>
  )
}