
export default function NoteHistoryPage({ notes }) {

  return (
    <>
      <h1>Note History</h1>
      {notes.length > 0 ? (
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      ) : (
        <p>No Notes Yet!</p>
      )}
    </>
  );
}

