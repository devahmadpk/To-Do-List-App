import { useState } from 'react';
import '../stylesheets/taskcard.css';

const TaskCard = ({ title }) => {
    const [taskFlag, setTaskFlag] = useState(false); 

    const flagHandler = () => {
        setTaskFlag((prevFlag) => !prevFlag);
    };

    return (
        <div className='task-card'>
            <h3 className={`task-title ${taskFlag ? 'strikethrough' : ''}`}>{title}</h3>
            <button 
                className={`check-button ${taskFlag ? 'blue-button' : ''}`} 
                onClick={flagHandler}
            >
            </button>
        </div>
    );
};

export default TaskCard;
