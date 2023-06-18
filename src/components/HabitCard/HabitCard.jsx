/* eslint-disable react/prop-types */
import { useState } from "react";
import { HabitDetails } from "./HabitDetails";
import { useHabit } from "../../context/HabitContext";

import styles from "./HabitCard.module.css";

const HabitCard = ({ id, habitName }) => {
  const [showDetail, setShowDetail] = useState(false);

  const { archiveAHabit, deletedAHabit } = useHabit();

  const closeDetail = () => {
    setShowDetail(false);
  };

  const archiveHandler = (id) => {
    archiveAHabit(id);
  };

  const deletedHandler = (id) => {
    deletedAHabit(id);
  };

  return (
    <>
      <div className={styles.habit}>
        <div onClick={() => setShowDetail(true)}>
          <h2>{habitName}</h2>
        </div>
        <button onClick={() => deletedHandler(id)}>Delete</button>
        <button onClick={() => archiveHandler(id)}>Acrhive</button>
      </div>
      {showDetail && <div className={styles.wrapper}></div>}
      {showDetail && <HabitDetails habitId={id} closeDetail={closeDetail} />}
    </>
  );
};

export { HabitCard };
