import './Contact.css'

const Contact = () => {
  return (
    <section className='contact'>
      <div className="contact-container">
        <h1>Contact US </h1>
        <p className="contact-subtext">
          feel free to reach out to us anytime!!!
        </p>

        <form className="contact-form">
          <input type="text" placeholder='Name' name="Your name" required />
          <input type="email" placeholder='Email' name="Your Email" required />
          <textarea placeholder='Your Message' rows='5' required></textarea>
          <button type='submit' >Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact