import { HabitCard } from "../../components/HabitCard/HabitCard";
import { HabitCreator } from "../../components/index";
import { useHabit } from "../../context/HabitContext";
import styles from "./HabitListing.module.css";

const HabitListing = () => {
  const { state } = useHabit();

  return (
    <div className={styles.mainContainer}>
      <h3>Habit Lister</h3>
      <HabitCreator />
      <div className={styles.view}>
        {state?.habits.map((habit) => (
          <HabitCard key={habit.id} {...habit} />
        ))}
      </div>
    </div>
  );
};

export { HabitListing };
