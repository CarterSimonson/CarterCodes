import styles from "./ContactForm.module.scss";

export default function ContactForm() {
    return (
        <form className={styles.contactForm} action="https://formspree.io/f/mleozjnv" method="POST">
            <input type="text" name="name" placeholder="Name"/>
            <input type="email" name="_replyto" placeholder="Email"/>
            <textarea type="text" name="message" placeholder="Message"/>
            <button type="submit">Send</button>
        </form>
    );
}