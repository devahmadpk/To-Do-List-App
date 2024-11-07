import { useState } from 'react';
import './App.css';
import TaskPanel from './components/TaskPanel';
import WelcomeBanner from './components/WelcomeBanner';

function App() {
    const [showForm, setShowForm] = useState(false);
    const [taskTitle, setTaskTitle] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAddTaskClick = () => {
        setShowForm(true);
    };

    const handleCreateTask = () => {
        if (taskTitle.trim()) {
            setTasks([...tasks, { title: taskTitle }]);
            setTaskTitle('');
            setShowForm(false);
        }
    };

    return (
        <div className='app'>
            <WelcomeBanner onAddTaskClick={handleAddTaskClick} />
            
            {showForm && (
                <div className="task-form">
                  <div className='btn-div'>
                  <button className='close-btn' onClick={() => {setShowForm(false)}}>x</button>
                  </div>
                  <div className='form-div'>
                  <input
                        type="text"
                        placeholder="Enter task name"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                    />
                    <button onClick={handleCreateTask}>Create Task</button>
                  </div>
                    
                </div>
            )}

            <TaskPanel tasks={tasks} />
        </div>
    );
}

export default App;
