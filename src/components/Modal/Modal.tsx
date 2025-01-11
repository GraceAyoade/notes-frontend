import { FC, useState } from "react";
import "./Modal.css";
import axios from "axios";

const Modal: FC<IModal> = ({ note, closeModal, refetch }) => {
  const [noteDetails, setNoteDetails] = useState(note);

  function handleTitleInput(e: any) {
    setNoteDetails((prev: any) => ({
      ...prev,
      title: e.target.value,
    }));
  }
  function handleContent(e: any) {
    setNoteDetails((prev: any) => ({
      ...prev,
      content: e.target.value,
    }));
  }
  async function updateNote(note: any) {
    const payload = {
      title: note.title,
      content: note.content,
    };
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/${note._id}` as string,
        payload
      );
      if (response.data) {
        closeModal();
        refetch();
        alert("Data updated successfully.");
      }
    } catch (error) {}
    console.log("Note update", noteDetails);
  }
  
  async function addNote() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}` as string,
        noteDetails
      );
      if (response.data) {
        closeModal();
        refetch();
        alert("Note created successfully.");
      }
    } catch (error) {}
  }

  return (
    <div className="modal-wrapper">
      <div className="modal-mainbox">
        <input
          className="title-input"
          type="text"
          name=""
          id=""
          value={noteDetails.title}
          onChange={handleTitleInput}
        />
        <textarea
          className="note-content"
          name=""
          id=""
          onChange={handleContent}
          defaultValue={noteDetails.content}
        />
        <div className="flex justify-end gap-1 footer">
          <button onClick={closeModal}>Cancel</button>
          <button
            onClick={() =>
              noteDetails._id ? updateNote(noteDetails) : addNote()
            }
          >{`${noteDetails._id ? "Update" : "Add Note"}`}</button>
        </div>
      </div>
    </div>
  );
};

export const DeleteModal: FC<IDeleteModal> = ({ noteId, closeModal, refetch }) => {
  async function deleteNote(note: any): Promise<void> {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/${noteId}` as string
      );
      if (response.data) {
        closeModal();
        refetch()
        alert("Data deleted successfully.");
      }
    } catch (error) {}
  }

  return (
    <div className="delmodal-wrapper">
      <div className="delmodal-mainbox">
        <p className="text">Are you sure you want to delete this note?</p>
        <div className="delmodal-footer">
          <button onClick={closeModal}>No</button>
          <button onClick={() => deleteNote(noteId)}>Yes</button>
        </div>
      </div>
    </div>
  );
};

interface IModal {
  note: any;
  closeModal: () => void;
  refetch: () => void;
}

interface IDeleteModal {
  noteId: any;
  closeModal: () => void;
  refetch: ()=> void;
}

export default Modal;
