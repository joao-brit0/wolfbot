import { useState } from 'react'
import './MessagesComponent.css'
import iconWolf from '../assets/lobo.png'
function MessagesComponent({ messageText }){
    
    return (
        <>
            {messageText.map((msg, index) => (
    <p

      key={index}
      className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
    >
      <img src={iconWolf} className={`message ${msg.sender === 'user' ? 'img-user-message' : 'img-bot-message'}`}/>
      {msg.text}
    </p>
  ))}
            
        </>
    )
}

export default MessagesComponent