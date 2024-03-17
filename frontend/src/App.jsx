import Header from "./components/Header";
import Input from "./components/Input";
import AllTasks from "./components/AllTasks";

function App() {
  return (
    <section className="bg-slate-200 h-[100vh] py-20 text-center ">
      {/* This Components Is The Header Of This App*/}
      <Header />
      {/* This Components Is Where user gonna add his Tasks*/}
      <Input />
      {/* This Components Is Where All Tasks Gonna display it*/}
      <AllTasks />
    </section>
  );
}

export default App;
