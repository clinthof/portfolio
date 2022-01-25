
const Contact: React.FC = () => {
    return (
        <div className='content-container' id='contact-container'>
            <h1>Let's talk</h1>
            <div id="contact-form-container">
                <form method='POST'>
                    <div id='contact-email'>
                        <label htmlFor='email'>Your email address</label>
                        <input
                            className='form-field'
                            id='email-field'
                            type='email'
                            name='email'
                            placeholder='Email'
                            required
                            />
                    </div>
                    <div id='contact-message'>
                        <label htmlFor='message'>Message</label>
                        <textarea
                            className='form-field'
                            id='message-field'
                            placeholder='Message'
                            name='message'
                            required
                            />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact