import { useState } from "react";
import { HabitDetails } from "./HabitDetails";
import { useHabit } from "../../context/HabitContext";

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
      <div onClick={() => setShowDetail(true)}>
        <h2>{habitName}</h2>
      </div>
      <button onClick={() => deletedHandler(id)}>Move to trash</button>
      <button onClick={() => archiveHandler(id)}>Acrhive</button>
      {showDetail && <HabitDetails habitId={id} closeDetail={closeDetail} />}
    </>
  );
};

export { HabitCard };
