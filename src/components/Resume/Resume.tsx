import React from 'react'
import resume from '../../assets/Felix_Clinthorne_Resume.png';

const Resume: React.FC = () => {
    return (
        <div>
            <div id="resume-page-container" style={{
                'display':'flex',
                'justifyContent':'center',
                'alignContent':'center',
                'width':'100%',
            }}>
                <img 
                    alt='resume'
                    src={String(resume)}
                    style={{
                        'width':'60%',
                    }}
                />
            </div>
        </div>

    )
}

export default Resume
