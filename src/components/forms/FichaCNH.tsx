import { useEffect, useState, type FormEvent } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { redirectWhatsapp } from "../../utils/redirectWhatsapp";
import { useNavigate } from "react-router-dom";
import type { IMoto } from "../../types/Moto";
import { formatDate } from "../../utils/formatDate";

export function FichaCNH() {
    const navigate = useNavigate()
        const [motos, setMotos] = useState<IMoto[]>([])
        useEffect(() => {
            const loadMotos = async () => {
                const res = await fetch('/data.json', {
    
                })
                const obj: IMoto[] = await res.json()
                setMotos(obj)
                console.log(motos)
            }
            loadMotos()
        }, [])
    const [dados, setDados] = useState({
        nome: "",
        telefone: "",
        email: "",
        cpf: "",
        rg: "",
        dataEmissaoRg: "",
        dataNascimento: "",
        cidadeNascimento: "",
        nomePai: "",
        nomeMae: "",
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
        ocupacao: "",
        renda: "",
        produto: ""
    });

    function alterarCampo(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setDados(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function enviarFormulario(e: FormEvent) {
        e.preventDefault();

        const mensagem = `
*FICHA DE CADASTRO*

Nome: ${dados.nome}
Telefone: ${dados.telefone}
Email: ${dados.email}

CPF: ${dados.cpf}
RG: ${dados.rg}
Emissão RG: ${formatDate(dados.dataEmissaoRg)}
Data Nascimento: ${formatDate(dados.dataNascimento)}
Cidade Nascimento: ${dados.cidadeNascimento}
Pai: ${dados.nomePai}
Mãe: ${dados.nomeMae}

*ENDEREÇO*
CEP: ${dados.cep}
Rua: ${dados.rua}, Nº ${dados.numero}
Bairro: ${dados.bairro}
Cidade: ${dados.cidade} - ${dados.estado}

*TRABALHO*
Ocupação: ${dados.ocupacao}
Renda mensal: R$ ${dados.renda}

Produto escolhido: ${dados.produto}
`;

        redirectWhatsapp(mensagem)
    }

    return (
        <div className="container my-5">
            <div className="card shadow-lg border-0 rounded-4">

                <div className="card-body p-4 p-md-5">

                    {/* Header */}
                    <div className="text-center mb-4">
                        <button onClick={() => navigate(-1)} className="btn-back-icon"><IoMdArrowRoundBack size={25} /></button>
                        <img
                            src="img/profile.jpg"
                            alt="Perfil"
                            height={100}
                            width={100}
                            className="rounded-circle shadow mb-3"
                        />
                        <h3 className="fw-bold">JAMIR CARDOSO</h3>
                        <p className="text-muted">Consultor de Vendas</p>
                    </div>
                    <form onSubmit={enviarFormulario}>
                        <h2 className="text-center mb-4">Ficha CNH</h2>
                        <div className="row g-3">

                            {/* Nome */}
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control"
                                        name="nome"
                                        placeholder="Nome completo"
                                        onChange={alterarCampo}
                                        required />
                                    <label>Nome completo</label>
                                </div>
                            </div>

                            {/* Telefone */}
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="tel" className="form-control"
                                        name="telefone"
                                        placeholder="Telefone"
                                        onChange={alterarCampo}
                                        required />
                                    <label>Telefone</label>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control"
                                        name="email"
                                        placeholder="Email"
                                        onChange={alterarCampo} />
                                    <label>Email</label>
                                </div>
                            </div>

                            {/* CPF */}
                            <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control"
                                        name="cpf"
                                        placeholder="CPF"
                                        onChange={alterarCampo} />
                                    <label>CPF</label>
                                </div>
                            </div>

                            {/* RG */}
                            <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control"
                                        name="rg"
                                        placeholder="RG"
                                        onChange={alterarCampo} />
                                    <label>RG</label>
                                </div>
                            </div>

                            {/* Emissão RG */}
                            <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="date" className="form-control"
                                        name="dataEmissaoRg"
                                        placeholder="Data emissão RG"
                                        onChange={alterarCampo} />
                                    <label>Data emissão do RG</label>
                                </div>
                            </div>

                            {/* Nascimento */}
                            <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="date" className="form-control"
                                        name="dataNascimento"
                                        placeholder="Data nascimento"
                                        onChange={alterarCampo} />
                                    <label>Data de nascimento</label>
                                </div>
                            </div>

                            {/* Cidade nascimento */}
                            <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control"
                                        name="cidadeNascimento"
                                        placeholder="Cidade nascimento"
                                        onChange={alterarCampo} />
                                    <label>Cidade de nascimento</label>
                                </div>
                            </div>

                            {/* Pai */}
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control"
                                        name="nomePai"
                                        placeholder="Nome do pai"
                                        onChange={alterarCampo} />
                                    <label>Nome do pai</label>
                                </div>
                            </div>

                            {/* Mãe */}
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control"
                                        name="nomeMae"
                                        placeholder="Nome da mãe"
                                        onChange={alterarCampo} />
                                    <label>Nome da mãe</label>
                                </div>
                            </div>

                            <hr className="my-4" />

                            {/* Endereço */}
                            <h5>Endereço</h5>

                            <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control"
                                        name="cep"
                                        placeholder="CEP"
                                        onChange={alterarCampo} />
                                    <label>CEP</label>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="form-floating">
                                    <input type="text" className="form-control"
                                        name="rua"
                                        placeholder="Rua"
                                        onChange={alterarCampo} />
                                    <label>Rua</label>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control"
                                        name="numero"
                                        placeholder="Número"
                                        onChange={alterarCampo} />
                                    <label>Número</label>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control"
                                        name="bairro"
                                        placeholder="Bairro"
                                        onChange={alterarCampo} />
                                    <label>Bairro</label>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control"
                                        name="cidade"
                                        placeholder="Cidade"
                                        onChange={alterarCampo} />
                                    <label>Cidade</label>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control"
                                        name="estado"
                                        placeholder="Estado"
                                        onChange={alterarCampo} />
                                    <label>Estado</label>
                                </div>
                            </div>

                            <hr className="my-4" />

                            {/* Trabalho */}
                            <h5>Dados do Trabalho</h5>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <select
                                        className="form-select"
                                        name="ocupacao"
                                        onChange={alterarCampo}>
                                        <option value="">Selecione</option>
                                        <option value="Assalariado">Assalariado</option>
                                        <option value="Autônomo">Autônomo</option>
                                        <option value="Empresário">Empresário</option>
                                        <option value="Aposentado/Pensionista">Aposentado/Pensionista</option>
                                    </select>
                                    <label>Ocupação</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="number"
                                        className="form-control"
                                        name="renda"
                                        placeholder="Renda mensal"
                                        onChange={alterarCampo} />
                                    <label>Renda mensal (R$)</label>
                                </div>
                            </div>

                            <hr className="my-4" />

                            {/* Produto */}
                            <div className="col-12">
                                <div className="form-floating">
                                    <select
                                        className="form-select"
                                        name="produto"
                                        onChange={alterarCampo}
                                        required>
                                        <option value="" disabled>Escolha a moto</option>
                                        {motos.map((item) => {
                                            return (
                                                <option value={item.nome}>{item.nome}</option>
                                            )
                                        })}
                                    </select>
                                    <label>Moto escolhida</label>
                                </div>
                            </div>

                            <div className="d-grid mt-4">
                                <button type="submit" className="btn btn-success btn-lg">
                                    Enviar para o vendedor
                                </button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
