import React from 'react'
// import { ContactDiv } from '../../Styles'

const Contact: React.FC = () => {
    // const [submitted, setSubmitted] = useState(false);

    return (
        <div id="contact">
            <h1>Contact</h1>
            <div id="contact-form-container">
                <form
                    method='POST'
                >
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
