import styles from "./App.module.css"
import ChatRoom from "./component/ChatRoom/ChatRoom"
import ContactList from "./component/ContactList/ContactList"
import { useState } from "react"
import chatContext from "./chatContext"

function App() {
  const [receiver, setReceiver] = useState("")

  return (
    <div className={styles.app}>
      <chatContext.Provider value={
        {
          receiver: receiver,
          setReceiver: setReceiver
        }
      }>
        <ContactList />
        <ChatRoom />
      </chatContext.Provider>
    </div>
  )
}

export default App
