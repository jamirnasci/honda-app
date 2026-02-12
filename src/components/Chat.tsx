import { useState, useRef, useEffect } from 'react';
import './Chat.css';
import type { IMoto } from '../types/Moto';
import { IoSend } from 'react-icons/io5';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

interface ChatProps {
  motoNome?: string;
  toogleModal: Function
}

export function Chat({ motoNome, toogleModal }: ChatProps) {

  const [input, setInput] = useState<string>('');
  const [motoInteresse, setMotoInteresse] = useState<IMoto>();
  const [pagamentoInteresse, setPagamentoInteresse] = useState<string>();
  const [nomeCliente, setNomeCliente] = useState<string>('');
  const [motos, setMotos] = useState<IMoto[]>([])
  const metodosPagamento = [
    '1.  À VISTA',
    '2.  FINANCIAMENTO',
    '3.  CONSÓRCIO',
    '4.  CARTÃO DE CRÉDITO',
  ]
  const [chatOption, setChatOption] = useState<string>('nome')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `Bem-vindo à REVEMAR! Sou Jamir Cardoso e vou te ajudar a escolher sua próxima moto Honda. Qual o seu nome ?`,
      sender: 'bot',
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll para a última mensagem
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    const loadMotos = async () => {
      const res = await fetch('data.json', {

      })
      const obj: IMoto[] = await res.json()
      setMotos(obj)
    }
    loadMotos()
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
    };

    setMessages((prev) => [...prev, newMessage]);
    setTimeout(() => {


      if (chatOption == 'nome') {
        setNomeCliente(input)
        const motosList = motos.map((item, i) => {
          return `\n${i + 1}. ${item.nome}`
        })
        setMessages((prev) => [...prev, {
          id: Date.now() + 1,
          text: `Legal ${input}, agora me fale a moto Honda do seu interesse.${motosList}`,
          sender: 'bot'
        }])
        setChatOption('moto')
      }
      if (chatOption == 'moto') {
        const moto: IMoto = motos[Number(input) - 1]
        setMotoInteresse(moto)
        setMessages((prev) => [...prev, {
          id: Date.now() + 1,
          text: `Muito bom ${nomeCliente}, a ${moto.nome} tem sistema de partida ${moto.sistemaDePartida}, potência de ${moto.potenciaMaxima} e tanque com capacidade de ${moto.capacidade}`,
          sender: 'bot'
        }])
        const pagamentoLista = metodosPagamento.map((item) => {
          return `\n${item}`
        })
        setMessages((prev) => [...prev, {
          id: Date.now() + 1,
          text: `Me diga a modalidade de pagamento que você tem interesse: ${pagamentoLista}`,
          sender: 'bot'
        }])
        setChatOption('pagamento')
      }
      if (chatOption == 'pagamento') {
        const pagamentoMetodo = Number(input) - 1
        setMessages((prev) => [...prev, {
          id: Date.now() + 1,
          text: `OK ${nomeCliente} !, essa modalidade é tratada direto pelo nosso time especializado. Vou te encaminhar agora pro WhatsApp pra seguir com todos os detalhes.`,
          sender: 'bot'
        }])
        setPagamentoInteresse(metodosPagamento[pagamentoMetodo])
        setChatOption('whatsapp')
      }
      setInput('');
      inputRef.current?.blur()
    }, 2000)
  };

  return (
    <div className='modal-background'>
      <div className="chat-modal">
        <div className="chat-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="img/profile.jpg" alt="" height={50} width={50} style={{ borderRadius: '50%', margin: 5 }} />
            <div>
              <strong>Atendimento Jamir Revemar</strong>
              <small style={{ color: 'green', fontWeight: 'bold' }}>Online</small>
            </div>
          </div>
          <div>
            <button className='close-btn' onClick={() => {
              toogleModal()
            }}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <div className="chat-body" ref={scrollRef}>
          {messages.map((msg) => (
            <div style={{ display: 'flex', alignItems: 'start', justifyContent: msg.sender == 'user' ? 'right' : 'left' }}>
              {msg.sender == 'bot' ? <img src="img/profile.jpg" alt="" height={35} width={35} style={{ borderRadius: '50%', margin: 5 }} /> : null}
              <div key={msg.id} className={`message-bubble ${msg.sender} message`}>
                <span style={{ whiteSpace: 'pre-line' }}>{msg.text}</span>
              </div>
            </div>
          ))}
          {chatOption == 'whatsapp' ?
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
              <img src="img/profile.jpg" alt="" height={35} width={35} style={{ borderRadius: '50%', margin: 5 }} />
              <button className='whatsapp-btn'>Fale comigo no WhatsApp</button>
            </div> :
            null}
        </div>

        <div className="chat-footer">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Digite sua mensagem..."
          />
          <button onClick={handleSend}><IoSend size={20} /></button>
        </div>
      </div>
    </div>
  );
}