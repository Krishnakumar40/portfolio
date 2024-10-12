import React from 'react';
import styles from './ContactStyles.module.css';
import emailjs from 'emailjs-com'; // Correct import

function Contact() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      to_name: "Krishna Kumar",
      to_email: "krishnakumarcoder03@gmail.com",
      from_name: name,
      from_email: email,
      message,
    };

    emailjs.send(
      'service_bos6x9f',   
      'template_ez9wbj8',   
      templateParams,
      'BmOAJRZYmCV7Z5o7K'     )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((error) => {
      console.log('FAILED...', error);
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className='sectionTitle'>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label htmlFor='name' hidden>
            Name
          </label>
          <input
            type="text"
            name='name'
            id='name'
            placeholder='Name'
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='email' hidden>
            Email
          </label>
          <input
            type="email" 
            name='email'
            id='email'
            placeholder='Email'
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='message' hidden>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            placeholder='Message'
            required
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>
        </div>
        <input className='hover btn' type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
