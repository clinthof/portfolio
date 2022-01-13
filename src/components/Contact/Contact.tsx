
const Contact: React.FC = () => {
    return (
        <div id='contact' className='content-container'>
            <h1 className='title'>Contact</h1>
            <div id="contact-form-container">
                <form method='POST'>
                    <div>
                        <label htmlFor='name'>Your name</label>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Your email</label>
                        <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                required
                            />
                    </div>
                    <div>
                        <label htmlFor='message'>Message</label>
                        <textarea
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