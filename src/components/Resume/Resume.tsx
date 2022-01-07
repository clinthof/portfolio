import React from 'react';
import resume from '../../assets/Felix_Clinthorne_Resume.png';
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '../../Styles';

const Resume: React.FC = () => {
    return (
        <div id='resume-page-container'
            style={{
                'border': '2px solid blue',
            }}
        >
            <div id="resume-wrapper"
                style={{
                    'display':'flex',
                    'justifyContent':'center',
                    'alignContent':'center',
                    'width':'100%',
                    'border': '2px solid green',
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
                <Button>
                    <DownloadIcon />
                    download
                </Button>
            </div>
        </div>

    )
};

export default Resume;
