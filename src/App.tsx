import { useState } from "react";
import { board } from "./data/data";
import { ReactSortable } from "react-sortablejs";
import { Header } from "./components/Header/Header";
import { Aside } from "./components/Aside/Aside";
import { TasksManager } from "./components/TasksManager/TasksManager";
import "./App.css";

const App = () => {
  return (
    <>
        <Header />
        <main className="main">
        <Aside />
        <TasksManager />
        </main>
    </>
  );
};

export default App;

{/* <div className="container">      </div> */}

// const [list1, setList1] = useState(data);
// const [list2, setList2] = useState(data);
// const [list3, setList3] = useState(data);
// const [list4, setList4] = useState(data);

{
  /* <ReactSortable
        list={list1}
        setList={(data) => {
          console.log("setList1", data);
          setList1(data);
        }}
        animation={150}
        group="shared-group-name"
      >
        {list1.map((item) => (
          <div className='item' key={item.id}>{item.text}</div>
        ))}
      </ReactSortable>
      <ReactSortable
        list={list2}
        setList={(data) => {
          console.log("setList2", data);
          setList2(data)
        }}
        animation={150}
        group="shared-group-name"
      >
        {list2.map((item) => (
          <div className='item' key={item.id}>{item.text}</div>
        ))}
      </ReactSortable>
      <ReactSortable
        list={list3}
        setList={(data) => {
          console.log("setList3", data);
          setList3(data)
        }}
        animation={150}
        group="shared-group-name"
      >
        {list3.map((item) => (
          <div className='item' key={item.id}>{item.text}</div>
        ))}
      </ReactSortable>
      <ReactSortable
        list={list2}
        setList={(data) => {
          console.log("setList4", data);
          setList4(data)
        }}
        animation={150}
        group="shared-group-name"
      >
        {list4.map((item) => (
          <div className='item' key={item.id}>{item.text}</div>
        ))}
      </ReactSortable> */
}
