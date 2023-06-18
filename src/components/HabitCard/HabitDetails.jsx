import { useState } from "react";
import { useHabit } from "../../context/HabitContext";
import styles from "../HabitInputModal/HabitInputModal.module.css";

const HabitDetails = ({ habitId, closeDetail }) => {
  const { state, editAHabit } = useHabit();

  const {
    habitName,
    habitFrequency,
    habitStartDate,
    habitGoal,
    habitTimeOfDay,
  } = state.habits.find(({ id }) => id === habitId);

  const [name, setName] = useState(habitName);
  const [frequency, setFrequency] = useState(habitFrequency);
  const [startDate, setStartDate] = useState(habitStartDate);
  const [goal, setGoal] = useState(habitGoal);
  const [timeOfDay, setTimeOfDay] = useState(habitTimeOfDay);
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = () => {
    const newHabitData = {
      id: habitId,
      habitName: name,
      habitFrequency: frequency,
      habitStartDate: startDate,
      habitGoal: goal,
      habitTimeOfDay: timeOfDay,
    };
    setEditMode(false);

    closeDetail();
    editAHabit(habitId, newHabitData);
  };

  return (
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="habit-name">Habit Name:</label>
        <input
          type="text"
          id="habit-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={!editMode} // Disable input when not in edit mode
        />

        <label htmlFor="repeat">Repeat</label>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          id="repeat"
          disabled={!editMode}
        >
          <option value="daily">daily</option>
          <option value="weekly">weekly</option>
          <option value="monthly">monthly</option>
        </select>

        <label htmlFor="goal">Goal</label>
        <select
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          disabled={!editMode}
        >
          <option value="1 times daily">1 times daily</option>
          <option value="3 times daily">3 times daily</option>
          <option value="5 times daily">5 times daily</option>
        </select>

        <label htmlFor="time-of-day">Time of Day</label>
        <select
          value={timeOfDay}
          disabled={!editMode}
          onChange={(e) => setTimeOfDay(e.target.value)}
          id="time-of-day"
        >
          <option value="any time">any time</option>
          <option value="morning">morning</option>
          <option value="evening">evening</option>
        </select>

        <label htmlFor="habit-start-date">Start Date</label>
        <select
          id="habit-start-date"
          value={startDate}
          disabled={!editMode}
          onChange={(e) => setStartDate(e.target.value)}
        >
          <option value="today">today</option>
          <option value="tomorrow">tomorrow</option>
          <option value="next week">next week</option>
        </select>

        {!editMode ? (
          <button onClick={() => setEditMode(true)}>Edit</button>
        ) : (
          <>
            <button type="submit">Save</button>
            <button onClick={() => setEditMode(false)}>Cancel</button>
          </>
        )}
        <button onClick={closeDetail}>Close</button>
      </form>
    </div>
  );
};

export { HabitDetails };
