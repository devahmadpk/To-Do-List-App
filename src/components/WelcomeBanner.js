import '../stylesheets/welcomebanner.css';

const WelcomeBanner = ({ onAddTaskClick }) => {
    return (
        <div className='banner-div'>
            <h2>Welcome to your tasks</h2>
            <button onClick={onAddTaskClick}>+ New Task</button>
        </div>
    );
};

export default WelcomeBanner;
