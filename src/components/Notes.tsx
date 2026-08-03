import { useState } from "react";

import "../styles/Notes.css";

export default function Notes() {
  const [notes, setNotes] = useState("");

  return (
    <div className="notes">

      <textarea
        placeholder="Comment s'est passée ta journée ?"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

    </div>
  );
}