/* eslint-disable @typescript-eslint/no-explicit-any */
import {} from "@/redux/hook";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  //*local todos
  // const { todos } = useAppSelector((state) => state.todos);
  //live server
  const { data: todos, isLoading } = useGetTodosQuery(undefined);

  if (isLoading) {
    return <p>Loading.......</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <TodoModal />

        <TodoFilter />
      </div>
      <div className="bg-primary-gradient rounded-xl h-full p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3 ">
          {todos.data?.map((item) => (
            <TodoCard key={item.id} {...item} />
          ))}
        </div>

        {/* <div className="bg-white flex rounded-md justify-center items-center p-5 font-semibold">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
