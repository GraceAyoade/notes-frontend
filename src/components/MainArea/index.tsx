import { FC, useState } from "react";
import "./MainArea.css";
import {
  FiDatabase,
  FiEdit,
  FiFilter,
  FiGrid,
  FiHeart,
  FiPlusSquare,
  FiTrash2,
} from "react-icons/fi";
import { formatDistance, formatRelative, subDays } from "date-fns";
import Modal, { DeleteModal } from "../Modal/Modal";

const MainArea: FC<IMainArea> = ({ notes, refetch }) => {
  const [modalDetails, setModalDetails] = useState({
    visible: false,
    note: null,
  });
  const [showDeleteModal, setShowDeleteModal] = useState({
    visible: false,
    noteId: null,
  });

  return (
    <>
      <section className="main-area">
        <nav className="main-header">
          <h2 className="lexend-font">Good Morning</h2>
          <p className="poppins-extralight">
            {formatRelative(subDays(new Date(), 0), new Date())}
          </p>
        </nav>

        <div className="main-body">
          <div className="mainbody-header">
            <div className="mainbody-header1">
              <h3>
                <b>Notes</b>
              </h3>
              <h3>Favourites</h3>
            </div>

            <div className="mainbody-header2">
              <FiGrid size={24} className="icon-method outlined-icon" />
              <FiPlusSquare
                onClick={() => setModalDetails({ visible: true, note: {title: "", content: ""} as any })}
                size={44}
                className="outlined-icon add-noteicon"
              />
              <FiFilter size={24} className="icon-method outlined-icon" />
            </div>
          </div>

          <div className="notes-box">
            {notes.map((note) => {
              return (
                <div key={note._id} className="notes-card">
                  <div>
                    <div className="notes-title">
                      <div className="title-div">
                        {" "}
                        <h3>{note.title}</h3>
                      </div>
                      <div className="heart">
                        {" "}
                        <FiHeart
                          size={24}
                          className="notes-reaction-icon icon-method fave-icon"
                        />
                      </div>
                    </div>
                    <div className="notes">
                      <p>{note.content}</p>
                    </div>
                  </div>
                  <div className="notes-footer">
                    <div className="footer-pair-one">
                      <p className="info date-created">
                        {formatDistance(note.createdAt, new Date(), {
                          addSuffix: true,
                        })}
                      </p>
                      <p className="info">
                        <FiDatabase className="db-icon" />
                        {note.category}
                      </p>
                    </div>

                    <div className="footer-pair-two">
                      <div className="footer-pair-two-smallbox">
                        <div className="likes">
                          <FiTrash2
                            onClick={() =>
                              setShowDeleteModal({
                                noteId: note._id,
                                visible: true,
                              })
                            }
                            size={24}
                            className="notes-reaction-icon"
                          />
                        </div>
                        <div className="edit">
                          <FiEdit
                            onClick={() =>
                              setModalDetails({
                                visible: true,
                                note: note,
                              })
                            }
                            size={24}
                            className="notes-reaction-icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {modalDetails.visible && (
        <Modal
          note={modalDetails.note}
          closeModal={() => setModalDetails({ note: null, visible: false })}
          refetch={refetch}
        />
      )}
      {showDeleteModal.visible && (
        <DeleteModal refetch={refetch}
          noteId={showDeleteModal.noteId}
          closeModal={() =>
            setShowDeleteModal({ noteId: null, visible: false })
          }
        />
      )}
    </>
  );
};

interface IMainArea {
  notes: any[];
  error?: Error | null;
  refetch:  () => void;
}

export default MainArea;
