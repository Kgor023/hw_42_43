import { createContext, useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Statistics from "./components/Statistics";
import  './style/App.css'
type typeContextColor = {
  color: boolean;
  setColor: (value: boolean) => void;
};
type typeContextStatistic = {
  stat:typeStat;
  setStat: (value: typeStat) => void;
};
type typeTask = {
  id: number;
  title: string;
  completed: boolean;
  body: string;
};
type typeStat ={
  deleted:number;
  checked:number;
  edited:number;
}
export const Theme = createContext<typeContextColor>({
  color: true,
  setColor: () => {},
});
export const Statistic = createContext<typeContextStatistic>({
  stat: {
    deleted:0,
    checked:0,
    edited:0,
  },
  setStat: () => {},
});
function App() {
  const [color, setColor] = useState<boolean>(true);
  const [stat, setStat] = useState<typeStat>({
    deleted:0,
    checked:0,
    edited:0,
  });
  const [task, setTask] = useState<typeTask[]>([]);

  return (
      <Theme.Provider value={{ color: color, setColor: setColor }}>
        <Statistic.Provider value={{stat:stat,setStat:setStat}}>
        <Header />
        <AddTask task={task} setTask={setTask} />
        <Statistics task={task}/>
        <Tasks task={task} setTask={setTask} />
  
        </Statistic.Provider>
      </Theme.Provider>
  );
}

export default App;
