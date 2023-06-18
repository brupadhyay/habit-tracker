import { useState } from "react";

import { HabitInputModal } from "../index";

const HabitCreator = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Create a new habit</button>
      {showModal && <HabitInputModal closeModal={closeModal} />}
    </>
  );
};

export { HabitCreator };
