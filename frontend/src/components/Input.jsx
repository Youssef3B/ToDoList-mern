import { IoMdAdd } from "react-icons/io";

function Input() {
  return (
    <form action="">
      <div className="my-11 flex justify-center ">
        <input
          className="w-[600px] p-2 border border-solid border-blue-200 focus:outline-none"
          type="text"
          placeholder="Add New Task"
        />

        <button className="bg-blue-500 p-3 rounded-lg">
          <IoMdAdd />
        </button>
      </div>
    </form>
  );
}

export default Input;
