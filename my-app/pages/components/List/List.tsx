import React from 'react';
import styles from './List.module.css';

interface ListProps {
  title: string;
  posts: string[];
}

function List({ posts, title }: ListProps) {
  return (
    <div className={styles.list}>
        <h1 className = {styles.title}>{title}</h1>
        {posts.map((post: string, index: number) => (
            <div key={index} className={styles.post}>
                <p>{post}</p>
            </div>
        ))}
    </div>
  );
}

export default List;