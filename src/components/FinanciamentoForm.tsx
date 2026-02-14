import { useState, type ChangeEvent, type FormEvent } from "react";
import "./FinanciamentoForm.css";
import { redirectWhatsapp } from "../utils/redirectWhatsapp";
import type { IMoto } from "../types/Moto";

interface FormData {
    valorEntrada: string;
    cpf: string;
    dataNascimento: string;
    nome: string;
    telefone: string;
    habilitacao: string;
}

export function FinanciamentoForm({ moto }: { moto: IMoto }) {
    const [formData, setFormData] = useState<FormData>({
        valorEntrada: "",
        cpf: "",
        dataNascimento: "",
        nome: "",
        telefone: "",
        habilitacao: "",
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const peers = Object.entries(formData)

        for (let i = 0; i < peers.length; i++) {
            if (peers[i][1].length <= 0) {
                alert('Preencha todos os campos')
                return
            }
        }
        const [year, month, day] = formData.dataNascimento.split('-')
        const msg = `Olá, meu nome é ${formData.nome}, tenho interesse no financiamento da ${moto.nome}, segue abaixo meus dados para a APROVAÇÃO
    Nome: ${formData.nome},
    CPF: ${formData.cpf},
    Data Nascimento: ${day}/${month}/${year},
    Telefone: ${formData.telefone},
    Valor Entrada: ${formData.valorEntrada},
    Habilitação: ${formData.habilitacao}
    `
        redirectWhatsapp(msg)
    }

    return (
        <div className="form-container">
            <i style={{display: 'inline-block', color: 'gray', paddingTop: '5px', paddingBottom: '10px'}}>
                Preencha o formulário abaixo para que o vendedor possa trazer pra você as melhores cotações do mercado.
            </i>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>CPF</label>
                    <input
                        type="text"
                        name="cpf"
                        value={formData.cpf}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        onChange={handleChange}
                        maxLength={11}
                    />
                </div>

                <div className="form-group">
                    <label>Data de Nascimento</label>
                    <input
                        type="date"
                        name="dataNascimento"
                        value={formData.dataNascimento}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Telefone</label>
                    <input
                        type="text"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Valor de Entrada (R$)</label>
                    <input
                        type="number"
                        name="valorEntrada"
                        value={formData.valorEntrada}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Possui Habilitação</label>
                    <select
                        name="habilitacao"
                        value={formData.habilitacao}
                        onChange={handleChange}
                    >
                        <option value="">Selecione</option>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                    </select>
                </div>

                <button type="submit" className="btn-cta">
                    Enviar
                </button>
            </form>
        </div>
    );
};
