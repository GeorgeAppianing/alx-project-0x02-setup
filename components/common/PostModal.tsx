import { useState } from "react";

export default function PostModal({ open, onClose, onSubmit }: any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Create Post</h2>

        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full mb-3"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Content"
          className="border p-2 w-full mb-3"
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={onClose}>
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
            onClick={() => onSubmit({ title, content })}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}