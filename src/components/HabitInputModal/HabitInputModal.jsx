import { useState } from "react";
import { v4 as uuid } from "uuid";

import styles from "./HabitInputModal.module.css";
import { useHabit } from "../../context/HabitContext";

const HabitInputModal = ({ closeModal }) => {
  const [habitName, setHabitName] = useState("");
  const [habitFrequency, setHabitFrequency] = useState("daily");
  const [habitStartDate, setHabitStartDate] = useState("today");
  const [habitGoal, setHabitGoal] = useState("1 times daily");
  const [habitTimeOfDay, setHabitTimeOfDay] = useState("any time");

  const { createAHabit } = useHabit();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary validation or data handling here
    // For this example, we'll just log the input values
    const newHabitData = {
      id: uuid(),
      habitName,
      habitFrequency,
      habitStartDate,
      habitGoal,
      habitTimeOfDay,
    };

    closeModal();

    createAHabit(newHabitData);
  };
  return (
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="habit-name">Habit Name:</label>
        <input
          type="text"
          id="habit-name"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          required
        />

        <label htmlFor="repeat">Repeat</label>
        <select
          value={habitFrequency}
          onChange={(e) => setHabitFrequency(e.target.value)}
          id="repeat"
        >
          <option value="daily">daily</option>
          <option value="weekly">weekly</option>
          <option value="monthly">monthly</option>
        </select>

        <label htmlFor="goal">Goal</label>
        <select
          id="goal"
          value={habitGoal}
          onChange={(e) => setHabitGoal(e.target.value)}
        >
          <option value="1 times daily">1 times daily</option>
          <option value="3 times daily">3 times daily</option>
          <option value="5 times daily">5 times daily</option>
        </select>

        <label htmlFor="time-of-day">Time of Day</label>
        <select
          value={habitTimeOfDay}
          onChange={(e) => setHabitTimeOfDay(e.target.value)}
          id="time-of-day"
        >
          <option value="any time">any time</option>
          <option value="morning">morning</option>
          <option value="evening">evening</option>
        </select>

        <label htmlFor="habit-start-date">Start Date</label>
        <select
          id="habit-start-date"
          value={habitStartDate}
          onChange={(e) => setHabitStartDate(e.target.value)}
        >
          <option value="today">today</option>
          <option value="tomorrow">tomorrow</option>
          <option value="next week">next week</option>
        </select>

        <button onClick={closeModal}>Discard</button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export { HabitInputModal };
