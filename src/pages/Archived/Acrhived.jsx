import { useHabit } from "../../context/HabitContext";

const Archived = () => {
  const { state, deletedAHabit } = useHabit();

  console.log("archive", state);

  return (
    <div>
      <h1>This is archived page</h1>
      {state?.archived.map((habit) => (
        <>
          <h1>{habit.habitName}</h1>
          <button onClick={() => deletedAHabit(habit.id)}>Delete </button>
        </>
      ))}
    </div>
  );
};

export { Archived };
