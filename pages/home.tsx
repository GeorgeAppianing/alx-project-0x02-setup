import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

export default function HomePage() {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header />

      <div className="p-6">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={() => setOpen(true)}
        >
          Add Post
        </button>

        <PostModal
          open={open}
          onClose={() => setOpen(false)}
          onSubmit={(data) => {
            setPosts([...posts, data]);
            setOpen(false);
          }}
        />

        <div className="mt-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </div>
    </>
  );
}