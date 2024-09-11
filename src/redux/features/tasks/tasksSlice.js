import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description: "lorem ispum dolar ismit",
      date: "10.20.2024",
      assignTo: "Rabeya Akter",
      priority: "high",
    },
  ],
  userSpecificTasks: [],
};

const taskSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((item) => item.id === payload.id);
      target.status = payload.status;
    },
    userTasks: (state, { payload }) => {
      state.userSpecificTasks = state.tasks.filter(
        (item) => item.assignTo === payload
      );
    },
  },
});

export const { addTask, removeTask, updateStatus, userTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
