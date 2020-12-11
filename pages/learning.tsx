import Layout from "../components/layout";

const BOOKS: ITodoItem[] = [
  {
    title: "Rich dad poor dad",
    status: undefined,
    url: "https://www.goodreads.com/book/show/69571.Rich_Dad_Poor_Dad",
  },
  {
    title: "The Alchemist",
    status: "completed",
    url: "https://www.goodreads.com/book/show/18144590-the-alchemist",
  },
];

const TECH: ITodoItem[] = [
  {
    title: "Tailwind CSS ",
    status: undefined,
    url: "https://tailwindcss.com/",
  },
  {
    title: "NEXT.js",
    status: undefined,
    url: "https://nextjs.org/",
  },
  {
    title: "Flutter",
    status: undefined,
    url: "https://flutter.dev/",
  },
];

const TODOS: ITodo[] = [
  {
    type: "Books",
    todoItems: BOOKS,
  },
  {
    type: "Tech stuff",
    todoItems: TECH,
  },
];

interface ITodo {
  type: string;
  todoItems: ITodoItem[];
}

interface ITodoItem {
  title: string;
  status: "completed" | "inprogress" | undefined;
  url: string;
}

const TodoItem = ({ type, todoItems }: ITodo) => {
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <h1 className="text-grey-darkest mb-5 text-blue-700 font-bold ">
          {type}
        </h1>
        {todoItems.map((item) => (
          <div className="flex mb-4 items-center justify-between">
            <p
              className={` text-grey-darkest ${
                item.status === "completed" && "line-through"
              } `}
            >
              {item.title}
            </p>
            <a
              href={item.url}
              target="_blank"
              className="text-blue-700 cursor-pointer hover:text-blue-500"
            >
              Check here
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

function LearningPage() {
  return (
    <Layout>
      <div>
        <div className="mb-4">
          {TODOS.map((todo) => (
            <TodoItem {...todo} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default LearningPage;
