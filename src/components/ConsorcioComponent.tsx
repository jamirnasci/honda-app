import { FaWhatsapp } from "react-icons/fa";
import type { IMoto } from "../types/Moto";
import { redirectWhatsapp } from "../utils/redirectWhatsapp";
import './ConsorcioComponent.css'
import { useState } from "react";

export function ConsorcioComponent({ moto }: { moto: IMoto }) {
    const obj = Object.entries(moto.consorcio)
    const [parcelas, setParcelas] = useState<string>('')
    const [valorParcelas, setValorParcelas] = useState<number>(-1)

    return (
        <div className="consorcio-container">
            {obj.map((item) => {
                const parcelasN = Number(item[1])
                return (
                    <div className="consorcio-line">
                        <div>
                            <input type="radio" name="parcelas" className="parcela-radio" value={item[1]} onInput={() => {
                                setParcelas(item[0])
                                setValorParcelas(parcelasN)
                            }} />
                            <strong style={{ color: '#cc0000' }}>{item[0]}</strong>
                        </div>
                        <span className="price">R$ {parcelasN.toFixed(2)}</span>
                    </div>
                )
            })}
            <button className="btn-cta btn-whatsapp" onClick={() => {
                if (valorParcelas <= 0 || parcelas.length <= 0) {
                    alert('Selecione algum plano')
                    return
                }
                const msg = `Olá Jamir, tenho interesse na ${moto.nome}, poderia me fornecer mais informações sobre o consórcio no plano de ${parcelas} e parcelas de R$ ${valorParcelas}`
                redirectWhatsapp(msg)
            }}> <FaWhatsapp size={25} />Chamar no WhatsApp</button>
        </div>
    );
}