import { GetStaticProps } from 'next';
import { getSortedPostsData, PostMeta } from './lib/posts';

interface HomeProps {
  allPostsData: PostMeta[];
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
};

const Home: React.FC<HomeProps> = ({ allPostsData }) => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id}>
            <a href={`/blog/${id}`}>
              {title} <small>({date})</small>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
