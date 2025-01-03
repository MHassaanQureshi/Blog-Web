import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
interface PostMeta {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

const getSortedPostsData = (): PostMeta[] => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id,
        title: data.title as string,
        date: data.date as string,
        excerpt: content.slice(0, 150) + '...', // Shorter excerpt to show preview
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};

// Extracting a small part of the content for the preview
const getPreviewContent = (content: string) => {
  // You can adjust this logic based on how you want to display the content
  const maxLength = 200; // Max length for preview
  const preview = content.slice(0, maxLength);

  return preview;
};

const BlogCard = () => {
  const posts = getSortedPostsData();

  return (
    <div className="flex flex-col items-center w-full py-4">
      <div className="w-[90%] p-2 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(({ id, title, content}) => (
          <div key={id} className="w-full p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold">{title}</h2>

            {/* Render only the preview content using ReactMarkdown */}
            <ReactMarkdown
              components={{
                img: ({ src, alt }) => <Image src={src} alt={alt} width={400} height={200} className="max-w-full" />,
                p: ({ children }) => <p className="text-gray-700">{children}</p>, // Optional: You can style paragraphs
              }}
            >
              {getPreviewContent(content)}
            </ReactMarkdown>

           

            <Link href={`/blog/${id}`}>
              <p className="text-blue-400 font-semibold hover:underline">Read More</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
