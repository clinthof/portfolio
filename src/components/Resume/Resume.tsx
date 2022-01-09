import React from 'react';
import resume from '../../assets/Felix_Clinthorne_Resume.png';
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '../../Styles';

const Resume: React.FC = () => {
    return (
        <div id='resume-page-container'>
            <div id="resume-wrapper"
                style={{
                    'display':'flex',
                    'justifyContent':'center',
                    'alignContent':'center',
                    'width':'100%',
                }}
            >
                <img 
                    alt='resume'
                    src={String(resume)}
                    style={{
                        'width':'60%',
                    }}
                />
            </div>
            <div id='download-btn-wrapper'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '2%',
                }}>
                <a href="path_to_file">
                    <Button>
                        <DownloadIcon />
                        download
                    </Button>
                </a>
            </div>
        </div>

    )
};

export default Resume;
