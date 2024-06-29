import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <TodoModal />

        <TodoFilter />
      </div>
      <div className="bg-primary-gradient rounded-xl h-full p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3 ">
          <TodoCard />
        </div>

        {/* <div className="bg-white flex rounded-md justify-center items-center p-5 font-semibold">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
