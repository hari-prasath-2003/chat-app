import styles from "./ContactList.module.css"
import { Input } from 'semantic-ui-react'
import ContactCard from "../ContactCard/ContactCard";
import { useState } from "react";
const ContactList = () => {
    const [chatList, setChatList] = useState(["hari prasath", "Sam prasath", "Dinesh", "Ramesh", "suresh", "Tommy"])
    return (
        <div className={styles.contactList}>
            <Input icon='search' placeholder='Search...' fluid className={styles.search} />
            <div className={styles.cardContainer}>{
                chatList.map((user) => {
                    return <ContactCard receiver={user} />
                })
            }
            </div>
        </div>);
}

export default ContactList;