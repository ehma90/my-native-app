import Link from 'next/link';
import articleStyle from '../styles/article.module.css'

const ArticleItem = ({article}) => {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`}>
      <p className={articleStyle.card}>
          <h3>{article.title} &rarr;</h3>
          <p>{article.excerpt}</p>
      </p>
    </Link>
  );
}

export default ArticleItem;

