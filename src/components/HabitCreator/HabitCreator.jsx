import { useState } from "react";

import { HabitInputModal } from "../index";
import styles from "../HabitCard/HabitCard.module.css";

const HabitCreator = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Create a new habit</button>
      {showModal && <div className={styles.wrapper}></div>}
      {showModal && <HabitInputModal closeModal={closeModal} />}
    </>
  );
};

export { HabitCreator };
