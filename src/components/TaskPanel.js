import TaskCard from "./TaskCard";
import '../stylesheets/taskpanel.css';

const TaskPanel = ({ tasks }) => {
    return (
        <div className="task-panel">
            <h3>Your current tasks:</h3>
            {tasks.map((task, index) => (
                <TaskCard key={index} title={task.title} />
            ))}
        </div>
    );
};

export default TaskPanel;
