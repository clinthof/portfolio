import './Resume.css';
import resume from '../../assets/Felix_Clinthorne_Resume.png';

const Resume: React.FC = () => {
    return (
        <div id='resume-page-container'>
            <div id="resume-wrapper">
                <img id='resume-img' alt='resume' src={String(resume)} />
            </div>
        </div>
    )
};

export default Resume;
