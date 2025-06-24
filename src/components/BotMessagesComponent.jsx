import { useState } from 'react'
import './BotMessagesComponent.css'
function BotMessagesComponent({ BotMessageText }){
    
    return (
        <>
            {BotMessageText.map((BotmessageItem, index) => (<p className="messageBot" key={index}>{BotmessageItem}</p>))}
            
        </>
    )
}

//background-color: rgb(59, 59, 59);

export default BotMessagesComponent