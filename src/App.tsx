import { Aside } from "@/components/Aside/Aside";
import { Header } from "@/components/Header/Header";
import { TasksManager } from "@/components/TasksManager/TasksManager";
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
