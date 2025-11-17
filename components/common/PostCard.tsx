import { PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="border p-4 rounded-md bg-white shadow">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="mt-2 text-gray-700">{content}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
}