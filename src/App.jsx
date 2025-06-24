import { useState } from 'react'
import './App.css'
import SubjectComponent from './components/SubjectComponent'
import MessagesComponent from './components/MessagesComponent'
import historyDatas from './historyDatas.js'
import subImg from './assets/enviar.png'

function App() {
  const [chat, setChat] = useState(false)
  const [inputValue, setInputValue] = useState('') 
  const [messages, setMessages] = useState([])

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // impede quebra de linha se for <textarea>
      initialChat()
    }
  }

  function initialChat() {

  if (inputValue.trim() === '') return;
  setChat(true);

  setMessages(prevMessages => [
    ...prevMessages,
    { sender: 'user', text: inputValue }
  ]);


  respond()

  setInputValue('');
}

  function handleInputChange(event) {
    setInputValue(event.target.value)
  }




        function respond() {
            const input = inputValue

            let maxSimilaridade = 0;
            let melhorResposta = "Desculpe, não entendi. Pode tentar perguntar de outro jeito?";

            historyDatas.forEach(par => {
                const sim = similaridade(input, par.frase);
                if (sim > maxSimilaridade) {
                    maxSimilaridade = sim;
                    melhorResposta = par.resposta;
                }
            });

       
    setMessages(prevMessages => [
        ...prevMessages,
        { sender: 'bot', text: '' }
    ]);


    escreverTexto(melhorResposta);
}

function escreverTexto(texto) {
    let index = 0;
    let parcial = "";

    const intervalo = setInterval(() => {
        if (index < texto.length) {
            parcial += texto.charAt(index);
            index++;

            setMessages(prevMessages => [
                ...prevMessages.slice(0, -1), 
                { sender: 'bot', text: parcial }
            ]);
        } else {
            clearInterval(intervalo);
        }
    }, 30); 
}

        function similaridade(a, b) {
            const limparTexto = texto => texto
                .toLowerCase()
                .normalize('NFD').replace(/[\u0300-\u036f]/g, '') 
                .replace(/[^\w\s]/g, '') 
                .split(" ")
                .filter(p => p.length > 1); 

            const aPalavras = limparTexto(a);
            const bPalavras = limparTexto(b);

            const intersecao = aPalavras.filter(p => bPalavras.includes(p)).length;
            const total = new Set([...aPalavras, ...bPalavras]).size;

            return intersecao / total;  
        }


  return (
    <>
      <div className='test'>
        <SubjectComponent setInitialChat={chat}/>
        {chat && 
          <section className='sectionChat slide-top'>
              <MessagesComponent messageText={messages}/>
          </section>}
          <div className='containerAreaText'>
            <input type="text" placeholder='Pergunte alguma coisa' className='textInput' value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            <button onClick={initialChat} className='btn-submit'><img src={subImg} className='subImgIcon' /></button>
          </div>
        
      </div>
      
    </>
  )
}

export default App
