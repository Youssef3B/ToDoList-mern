import { FaRegTrashAlt } from "react-icons/fa";
import { MdDone, MdModeEditOutline } from "react-icons/md";

function Task() {
  return (
    <div className="flex justify-between items-center   bg-white rounded-lg p-3 my-2 w-[640px]">
      <div className="">
        <h3 className="font-bold">Html</h3>
      </div>
      <div>
        <button className="bg-green-500 p-2 mx-1">
          <MdDone />
        </button>
        <button className="bg-yellow-400 p-2 mx-1">
          <MdModeEditOutline />
        </button>
        <button className="bg-red-500 p-2 mx-1">
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default Task;
