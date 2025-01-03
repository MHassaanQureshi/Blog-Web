import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CommentSection from '@/app/components/Comment/Comment';
import Image from 'next/image';

interface BlogPostProps {
  params: { id: string };
}

const getPostData = (id: string) => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    title: data.title as string,
    date: data.date as string,
    content,
  };
};

// Custom image renderer for ReactMarkdown
const renderers: Components = {
  img({ src, alt, title }) {
    return <Image src={src} alt={alt} title={title} width={400} height={200} />;
  },
};

const BlogPost = ({ params }: BlogPostProps) => {
  const { id } = params;
  const post = getPostData(id);

  return (
    <div className='flex flex-col items-center gap-6'>
      <h1 className='w-[90%] font-bold'>{post.title}</h1>
      <p>{post.date}</p>
      <span className='w-[70%] flex flex-col items-center gap-6'>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={renderers}>
          {post.content}
        </ReactMarkdown>
      </span>
      <CommentSection postId={id} />
    </div>
  );
};

export default BlogPost;
