import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { IMoto } from '../types/Moto';

import './DetalhesMoto.css'
import { Chat } from '../components/Chat';
import { FaWhatsapp } from 'react-icons/fa';
import { TbMoneybag } from 'react-icons/tb';
import { BiSolidBank } from 'react-icons/bi';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { redirectWhatsapp } from '../utils/redirectWhatsapp';
import { Modal } from '../components/Modal';
import { ConsorcioComponent } from '../components/ConsorcioComponent';
import { FinanciamentoForm } from '../components/FinanciamentoForm';

export function DetalhesMoto() {
    const { nome } = useParams<{ nome: string }>();
    const navigate = useNavigate();
    const [moto, setMoto] = useState<IMoto | null>(null);
    const [isConsorcioModalVisible, setConsorcioModalVisible] = useState<boolean>(false)
    const [isFinanciamentoModalVisible, setFinanciamentoModalVisible] = useState<boolean>(false)
    const [isChatModalVisible, setChatModalVisible] = useState<boolean>(false)

    const toogleModal = () => {
        setChatModalVisible(!isChatModalVisible)
    }
    const toogleConsorcioModal = () => {
        setConsorcioModalVisible(!isConsorcioModalVisible)
    }
    const toogleFinanciamentoModal = () => {
        setFinanciamentoModalVisible(!isFinanciamentoModalVisible)
    }

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data: IMoto[]) => {
                const encontrada = data.find((m) => m.nome === nome);
                if (encontrada) {
                    setMoto(encontrada);
                }
            });
    }, [nome]);

    if (!moto) return <div className="loading">Carregando...</div>;

    return (
        <div className="details-wrapper">
            <header className="details-header">
                <button onClick={() => navigate(-1)} className="btn-back-icon"><IoMdArrowRoundBack size={25} /></button>
                <h1>{moto.nome}</h1>
            </header>

            <main className="details-container">
                <section className="details-visual">
                    <img src={'/' + moto.img1} alt={moto.nome} />
                </section>

                <section className="details-info">
                    <h2>Especificações Técnicas</h2>
                    <div className="specs-list">
                        <div className="spec-row"><span>Tipo</span><strong>{moto.tipo}</strong></div>
                        <div className="spec-row"><span>Cilindrada</span><strong>{moto.cilindrada}</strong></div>
                        <div className="spec-row"><span>Potência</span><strong>{moto.potenciaMaxima}</strong></div>
                        <div className="spec-row"><span>Torque</span><strong>{moto.torque_maximo}</strong></div>
                        <div className="spec-row"><span>Câmbio</span><strong>{moto.transmissso}</strong></div>
                        <div className="spec-row"><span>Partida</span><strong>{moto.sistemaDePartida}</strong></div>
                        <div className="spec-row"><span>Combustível</span><strong>{moto.combustivel}</strong></div>
                        <div className="spec-row"><span>Tanque</span><strong>{moto.capacidade}</strong></div>
                    </div>

                    <button className="btn-cta" onClick={()=>{
                        toogleFinanciamentoModal()
                    }}>
                        <BiSolidBank size={25} /> 
                        Financiamento
                    </button>
                    <button className="btn-cta" onClick={()=>{
                        toogleConsorcioModal()
                    }}>
                        <TbMoneybag size={25}/> 
                    Consórcio</button>
                    <button className="btn-cta btn-whatsapp" onClick={() => {
                        const msg = `Olá Jamir, tenho interesse na ${moto.nome}, poderia me fornecer mais informações sobre o modelo e as modalidades de aquisição ?`
                        redirectWhatsapp(msg)
                    }}> <FaWhatsapp size={25} /> WhatsApp</button>
                </section>
            </main>
            {isChatModalVisible ? <Chat toogleModal={toogleModal}/> : null}
            {isConsorcioModalVisible ? <Modal Component={<ConsorcioComponent moto={moto}/>} title='Planos Consórcio' toogleModal={toogleConsorcioModal} /> : null}
            {isFinanciamentoModalVisible ? <Modal Component={<FinanciamentoForm moto={moto}/>} title='Financiamento' toogleModal={toogleFinanciamentoModal} /> : null}
        </div>
    );
}