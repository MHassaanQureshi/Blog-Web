import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostData {
  id: string;
  title: string;
  date: string;
  content: string;
}

export interface PostMeta {
  id: string;
  title: string;
  date: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

// Get metadata and content of a single post
export function getPostData(id: string): PostData {
  const filePath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    id,
    title: data.title as string,
    date: data.date as string,
    content,
  };
}

// Get all post IDs
export function getAllPostIds(): { params: { id: string } }[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, '') },
  }));
}

// Get metadata for all posts
export function getSortedPostsData(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fileContents = fs.readFileSync(
      path.join(postsDirectory, fileName),
      'utf8'
    );
    const { data } = matter(fileContents);
    return {
      id,
      title: data.title as string,
      date: data.date as string,
    };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));
}
