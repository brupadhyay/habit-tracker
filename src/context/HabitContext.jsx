import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/Habitreducer";

const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createAHabit = (newHabitData) => {
    dispatch({
      type: "ADD_A_HABIT",
      payload: newHabitData,
    });
  };

  const editAHabit = (habitId, newHabitData) => {
    dispatch({
      type: "EDIT_A_HABIT",
      payload: { habitId, newHabitData },
    });
  };

  const archiveAHabit = (id) => {
    dispatch({
      type: "ARCHIVE_A_HABIT",
      payload: id,
    });
  };

  const deletedAHabit = (id) => {
    dispatch({
      type: "DELETE_A_HABIT",
      payload: id,
    });
  };

  return (
    <HabitContext.Provider
      value={{
        createAHabit,
        state,
        dispatch,
        editAHabit,
        archiveAHabit,
        deletedAHabit,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

const useHabit = () => useContext(HabitContext);

export { useHabit, HabitProvider, HabitContext };
