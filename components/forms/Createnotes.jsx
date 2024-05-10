"use client"
import React, { useState } from "react";

const CreateNotes = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(), // Unique ID for each note (you can use a library for better uniqueness)
      title,
      content,
    };
    // Update notes array with the new note
    setNotes([...notes, newNote]);
    // Reset form fields after submission
    setTitle("");
    setContent("");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            Create a New Note
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={handleTitleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter title..."
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="content"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={content}
                onChange={handleContentChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                placeholder="Enter content..."
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mr-4"
              >
                Create Note
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-8 max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            Your Notes
          </h2>
          {notes.map((note) => (
            <div key={note.id} className="mb-4">
              <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
              <p className="text-gray-700">{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateNotes;