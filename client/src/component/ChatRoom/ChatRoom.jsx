import styles from "./ChatRoom.module.css"
import { Input, TextArea, Image, Header } from "semantic-ui-react";
import receiverContext from "../../chatContext";
import { useContext } from "react";
const ChatRoom = () => {
    const { receiver } = useContext(receiverContext)
    return (
        <div className={styles.chatRoom}>
            {
                receiver && <>
                    <div className={styles.header}>
                        <Image src='/assets/man.png' className={styles.profile} size='medium' circular />
                        <Header className={styles.uerName} size='medium'>{receiver}</Header>
                    </div>
                    <div className={styles.chatWindow}></div>
                    <div className={styles.controll}>
                        <Input placeholder='Type something...' fluid icon="send" />
                    </div>
                </>

            }
        </div>);
}

export default ChatRoom;