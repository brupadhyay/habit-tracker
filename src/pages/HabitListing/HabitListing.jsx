import { HabitCard } from "../../components/HabitCard/HabitCard";
import { HabitCreator } from "../../components/index";
import { useHabit } from "../../context/HabitContext";

const HabitListing = () => {
  const { state } = useHabit();

  return (
    <>
      <h3>Habit Lister</h3>
      <HabitCreator />
      {state?.habits.map((habit) => (
        <HabitCard key={habit.id} {...habit} />
      ))}
    </>
  );
};

export { HabitListing };
