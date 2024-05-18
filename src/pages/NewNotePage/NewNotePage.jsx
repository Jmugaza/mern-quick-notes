import { useState } from "react"

export default function NewNotePage({addNote}) {
  const [newNote, setNewNote] = useState("")

  function handleAddNote(evt){
    evt.preventDefault();
    addNote(newNote)
    setNewNote("")
  }

  return(
    <div>
      <h1>New Note</h1>
      <form onSubmit={handleAddNote}>
        <textarea
          value={newNote}
          onChange={(evt) => setNewNote(evt.target.value)}
          placeholder="Enter your note here"
          required
          pattern=".{3,}"
        />
        <br />
        <button type="submit">Add Note</button>
      </form>
   </div>
  )

}