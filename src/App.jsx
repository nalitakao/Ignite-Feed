import { Header } from "./components/Header.jsx"
import { Post } from "./components/Post.jsx"
import { Sidebar } from "./components/Sidebar.jsx";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/nalitakao.png",
      name: "Nalita Kao",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph", 
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum quasi dolor nesciunt explicabo magnam ullam quae, odit necessitatibus veritatis fugit obcaecati cumque vero a praesentium, autem sed exercitationem cupiditate."
      },
    ],
    publishedAt: new Date("2024-09-11 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/nalitakao.png",
      name: "Armandinho",
      role: "Front-end Developer",
    },
    content: [
      {
        type: "paragraph", 
        content: "Apple's Icons Have That Shape for a Very Good Reason"
      },
      {
        type: "paragraph", 
        content: "If you haven't been immersed in iOS interface design, you might look at Apple's icons and think that they're just a rounded square or a ‘roundrect'. If you've been designing icons, you know that they're something different and may have heard the word squircle used (mathematical intermediate of a square and a circle). And if you're an Industrial Designer, you recognize this as a core signature of their hardware products."
      },
    ],
    publishedAt: new Date("2024-09-10 16:12:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
          <main>
            {posts.map(post => (
              <Post 
                key={post.id}
                author={post.author} 
                content={post.content} 
                publishedAt={post.publishedAt}
              />
            ))}
          </main>
        
      </div>
    </div>
  )
}