import React, { useState } from 'react';
import styles from './ChatBot.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ChatBot = () => {
  const [chat, setChat] = useState(false);
  const showChat = () => setChat(!chat);

  return (
    <div className={styles.chatBot}>
      <div className={chat ? styles.chatBox : styles.hidden}>
        <h4 className={styles.header}>Chat Bot</h4>
        <div className={styles.chat}>
          <div className={styles.chatMessage}>
            <img
              src='https://www.chatbot.com/chatbot-templates/templates/customer-service/customer-service-icon.png'
              alt='bot'
            ></img>
            <span>How can I help You?</span>
          </div>
        </div>
        <div className={styles.message}>
          <input type='text' placeholder='Write Your message here'></input>
          <button>
            <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
          </button>
        </div>
      </div>
      <button variant='main' className={styles.button} onClick={showChat}>
        You need help?
      </button>
    </div>
  );
};

export default ChatBot;
