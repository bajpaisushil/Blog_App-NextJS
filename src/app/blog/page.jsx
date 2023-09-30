import React from 'react';
import styles from '@/app/blog/blogPage.module.css';
import CardList from '@/components/cardList/CardList';
import Menu from '@/components/menu/Menu';


const BlogPage = ({searchParams}) => {
  const page=parseInt(searchParams) || 1;
  const {cat}=searchParams;

  return (
    <div className={styles.container}>
      <div className={styles.title}>{cat} blog</div>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  )
}

export default BlogPage;
