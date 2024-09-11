import React from "react";
import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add A Task"}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col gap-3">
          <label htmlFor="title" className="font-medium">
            Title
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            {...register("title", { required: "Title is required" })}
            id="title"
            placeholder="Task title"
          />

          <label htmlFor="description" className="font-medium">
            Description
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            {...register("description")}
            id="description"
            placeholder="Description"
          />

          <label htmlFor="deadline" className="font-medium">
            Deadline
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="date"
            {...register("deadline")}
            id="deadline"
          />

          <label htmlFor="assign-to" className="font-medium">
            Assign To
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            {...register("assignTo")}
            id="assign-to"
          >
            <option value="">Select a person</option>
            <option value="Rabeya Akter">Rabeya Akter</option>
            <option value="John Doe">John Doe</option>
            <option value="Zim ">Zim </option>
            <option value="Disha">Disha</option>
          </select>

          <label htmlFor="priority" className="font-medium">
            Priority
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            {...register("priority")}
            id="priority"
          >
            <option value="">Select priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            className="px-3 py-2 bg-red-400 text-white rounded"
            type="button"
            onClick={() => onCancel()}
          >
            Cancel
          </button>
          <button
            className="px-3 py-2 bg-blue-500 text-white rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
