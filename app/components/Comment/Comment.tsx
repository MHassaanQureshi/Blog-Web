"use client";
import { useState } from "react";

interface Comment {
  name: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  console.log(postId)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newComment: Comment = { name, text };

    // Here you would send the comment to your API or backend
    // For simplicity, let's just append the comment locally
    setComments((prevComments) => [...prevComments, newComment]);

    // Reset form
    setName("");
    setText("");
  };

  return (
    <div className="w-[90%] py-8">
      <div className="w-full max-w-3xl mx-auto p-4">
        <h2 className="font-bold text-2xl text-center mb-4">Comments</h2>
        <div className="flex flex-col items-center space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className="comment p-4 bg-gray-100 rounded-lg w-full">
              <h3 className="font-semibold">{comment.name}</h3>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center flex-col">
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border-[1px] border-black px-2 py-4"
          />
          <textarea
            placeholder="Your Comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            className="border-[1px] border-black px-2 py-4"
          ></textarea>
          <button type="submit" className="bg-gray-300 px-2 py-4 w-[50%] flex justify-center">
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
