import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { IMoto } from '../types/Moto';

import './DetalhesMoto.css'
import { Chat } from '../components/Chat';
import { FaWhatsapp } from 'react-icons/fa';
import { TbMoneybag } from 'react-icons/tb';
import { BiSolidBank } from 'react-icons/bi';
import { IoMdArrowRoundBack } from 'react-icons/io';

export function DetalhesMoto() {
    const { nome } = useParams<{ nome: string }>();
    const navigate = useNavigate();
    const [moto, setMoto] = useState<IMoto | null>(null);
    const [isModalVisible, setModalVisible] = useState<boolean>(false)
    const toogleModal = () => {
        setModalVisible(!isModalVisible)
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

                    <button className="btn-cta"> <BiSolidBank size={25} /> Financiamento</button>
                    <button className="btn-cta"> <TbMoneybag size={25} /> Consórcio</button>
                    <button className="btn-cta btn-whatsapp"> <FaWhatsapp size={25} /> WhatsApp</button>
                </section>
            </main>
            {isModalVisible ?<Chat toogleModal={toogleModal}/> : null}
        </div>
    );
}