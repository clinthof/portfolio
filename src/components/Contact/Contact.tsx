import './Contact.css';
import { motion } from 'framer-motion';
import { staggerVariant, contactTextVariant } from '../../variants';

const Contact: React.FC = () => {
    return (
        <div className='content-container' id='contact-container'>
            <h1>Let's talk</h1>
            <motion.div
                id='contact-form-container'
                variants={staggerVariant}
                initial='hidden'
                animate='visible'
            >
                <form method='POST'>
                    <motion.div
                        id='contact-email'
                        variants={contactTextVariant}
                    >
                        <label htmlFor='email'>Your email address</label>
                        <input
                            className='form-field'
                            id='email-field'
                            type='email'
                            name='email'
                            placeholder='Email'
                            required
                            />
                    </motion.div>
                    <motion.div 
                        id='contact-message'
                        variants={contactTextVariant}
                    >
                        <label htmlFor='message'>Message</label>
                        <textarea
                            className='form-field'
                            id='message-field'
                            placeholder='Message'
                            name='message'
                            required
                            />
                    </motion.div>
                    <motion.div 
                        id='submit-btn-wrapper'
                        variants={contactTextVariant}
                    >
                        <button id='submit-btn' type='submit'>
                            Send
                        </button>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    )
}

export default Contact