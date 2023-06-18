/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
const initialState = {
  habits: [],
  archived: [],
  deleted: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_A_HABIT":
      return {
        ...state,
        habits: [
          ...state.habits,
          {
            ...action.payload,
          },
        ],
      };

    case "EDIT_A_HABIT":
      const { habitId, newHabitData } = action.payload;

      return {
        ...state,
        habits: state.habits.map((habit) =>
          habit.id === habitId ? { ...newHabitData } : habit
        ),
      };

    case "ARCHIVE_A_HABIT":
      const archiveId = action.payload;

      const habitToBeArchived = state.habits.find(({ id }) => id === archiveId);
      const habitsAfterFilter = state.habits.filter(
        ({ id }) => id !== archiveId
      );

      console.log("habits filter", habitsAfterFilter);

      return {
        ...state,
        habits: [...habitsAfterFilter],
        archived: [...state.archived, { ...habitToBeArchived }],
      };

    case "DELETE_A_HABIT":
      const deletedId = action.payload;
      const habitToBeDeleted = state.habits.find(({ id }) => id === deletedId);
      return {
        ...state,
        habits: state.habits.filter(({ id }) => id !== deletedId),
        archived: state.archived.filter(({ id }) => id !== deletedId),
        deleted: [...state.deleted, { ...habitToBeDeleted }],
      };

    default:
      break;
  }
};

export { initialState, reducer };
