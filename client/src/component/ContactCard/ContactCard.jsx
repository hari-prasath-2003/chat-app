import { Image, Header } from "semantic-ui-react";
import styles from "./ContactCard.module.css"
import receiverContext from "../../chatContext";
import { useContext } from "react";
const ContactCard = ({ receiver }) => {
    const { setReceiver } = useContext(receiverContext)
    return (
        <div className={styles.contactCard} onClick={() => setReceiver(receiver)}>
            <Image src='/assets/man.png' className={styles.profile} size='medium' circular />
            <Header className={styles.uerName} size='medium'>{receiver}</Header>
        </div>
    );
}

export default ContactCard;