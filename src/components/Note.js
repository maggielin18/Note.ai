import React, { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";

import '../styles/NoteStyle.css'

function Note() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [saving, setSaving] = useState(false);

  // const newNote = {
  //   title: 'My New Note Title',
  //   content: 'This is the content of my new note.'
  // };
  
  // const axiosInstance = axios.create({
  //   baseURL: "http://localhost:27017/database"  // Set the correct base URL for your backend
  // });

  axios.defaults.baseURL = "http://localhost:3005"

  const handleCreateNote = useCallback(async () => {
    try {
      setSaving(true);
      await axios.post("/database", { title, content});
      // await axiosInstance.post("/", { title, content});
      console.log("Note created successfully");
    } catch (error) {
      console.error("Error creating note:", error);
    } finally {
      setSaving(false);
    }
  }, [title, content]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && titleRef.current.selectionStart === titleRef.current.value.length) {
      contentRef.current.focus();
    } else if (e.key === "ArrowUp" && contentRef.current.selectionStart === 0) {
      titleRef.current.focus();
    }
  };

  // Fix this
  let savingStatusText = "Not Saved";
  if (saving) {
    savingStatusText = "Saving...";
  } else if (title && content) {
    savingStatusText = "Saved";
  }

  useEffect(() => {
    const autosaveTimer = setTimeout(() => {
      handleCreateNote();
    }, 2000); // Adjust the interval as needed

    return () => clearTimeout(autosaveTimer);
  }, [title, content, handleCreateNote]);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  return (
    <div className="note">
      <textarea
        ref={titleRef}
        className="titleInput"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <textarea
        ref={contentRef}
        className="contentInput"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div>
        {savingStatusText}
      </div>
      <div>
        <button onClick={handleCreateNote}>Save Note</button>
      </div>
    </div>
  );

  // // State to hold the inputted text
  // const [noteText, setNoteText] = useState('');

  // // Event handler to update the noteText state when textarea value changes
  // const handleNoteChange = (event) => {
  //   setNoteText(event.target.value);
  // };

  // return (
  //   <div className="note">
  //     <textarea placeholder="New Note" value={noteText} onChange={handleNoteChange}></textarea>
  //   </div>
  // );
}
export default Note;