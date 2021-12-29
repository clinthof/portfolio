import React from 'react'
import resume from '../../assets/Felix_Clinthorne_Resume.png';
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '../../Styles';

const Resume: React.FC = () => {
    return (
        <div>
            <div id="resume-container" style={{
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
            <div id='download-btn'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '2%',
                }}>
                <Button>
                    <DownloadIcon />
                    download
                </Button>
            </div>
        </div>

    )
}

export default Resume
