import { useEffect, useState, type FormEvent } from "react";
import { redirectWhatsapp } from "../../utils/redirectWhatsapp";
import './FichaCDC.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import type { IMoto } from '../../types/Moto';
import { formatDate } from "../../utils/formatDate";

export function FichaCDC() {
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
        dataNascimento: "",
        cidadeNascimento: "",
        nomePai: "",
        nomeMae: "",
        telefone: "",
        email: "",
        cpf: "",
        rg: "",
        dataEmissaoRg: "",
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
        nomeReferencia: "",
        telefoneReferencia: "",
        ocupacao: "",
        empresa: "",
        cargo: "",
        tempoEmpresa: "",
        rendaMensal: "",
        dataAdmissao: "",
        valorEntrada: "",
        motoEscolhida: "",
        possuiHabilitacao: ""
    });

    function alterarCampo(e: any) {
        const { name, value } = e.target;

        setDados(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function enviarFormulario(e: FormEvent) {
        e.preventDefault();

        const mensagem = `
*FICHA CDC*

Nome completo: ${dados.nome}
Data nascimento: ${formatDate(dados.dataNascimento)}
Cidade nascimento: ${dados.cidadeNascimento}
Nome do pai: ${dados.nomePai}
Nome da mãe: ${dados.nomeMae}

Telefone: ${dados.telefone}
Email: ${dados.email}
CPF: ${dados.cpf}
RG: ${dados.rg}
Data emissão RG: ${formatDate(dados.dataEmissaoRg)}

*ENDEREÇO*
CEP: ${dados.cep}
Rua: ${dados.rua}, Nº ${dados.numero}
Bairro: ${dados.bairro}
Cidade: ${dados.cidade} - ${dados.estado}

*REFERÊNCIA*
Nome: ${dados.nomeReferencia}
Telefone: ${dados.telefoneReferencia}

*DADOS DO TRABALHO*
Ocupação: ${dados.ocupacao}
Empresa: ${dados.empresa}
Cargo: ${dados.cargo}
Tempo na empresa: ${dados.tempoEmpresa}
Renda mensal: R$ ${dados.rendaMensal}
Data admissão: ${formatDate(dados.dataAdmissao)}

Valor da entrada: R$ ${dados.valorEntrada}
Moto escolhida: ${dados.motoEscolhida}
Possui habilitação: ${dados.possuiHabilitacao}
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

                        <h2 className="text-center mb-4">Ficha CDC</h2>

                        {/* ================= DADOS PESSOAIS ================= */}
                        <div className="row g-3">

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="nome" placeholder="Nome completo" onChange={alterarCampo} />
                                    <label>Nome completo</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="date" className="form-control" name="dataNascimento" placeholder="Data de nascimento" onChange={alterarCampo} />
                                    <label>Data de nascimento</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="cidadeNascimento" placeholder="Cidade de nascimento" onChange={alterarCampo} />
                                    <label>Cidade de nascimento</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="tel" className="form-control" name="telefone" placeholder="Telefone" onChange={alterarCampo} />
                                    <label>Telefone</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" name="email" placeholder="Email" onChange={alterarCampo} />
                                    <label>E-mail</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="cpf" placeholder="CPF" onChange={alterarCampo} maxLength={11} />
                                    <label>CPF</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="rg" placeholder="RG" onChange={alterarCampo} />
                                    <label>RG</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="date" className="form-control" name="dataEmissaoRg" onChange={alterarCampo} />
                                    <label>Data de emissão (RG)</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="nomePai" placeholder="Nome do pai" onChange={alterarCampo} />
                                    <label>Nome do pai</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="nomeMae" placeholder="Nome da mãe" onChange={alterarCampo} />
                                    <label>Nome da mãe</label>
                                </div>
                            </div>

                        </div>

                        <hr className="my-4" />

                        {/* ================= ENDEREÇO ================= */}
                        <h5 className="mb-3">Endereço</h5>

                        <div className="row g-3">

                            <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="cep" placeholder="CEP" onChange={alterarCampo} />
                                    <label>CEP</label>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="rua" placeholder="Rua" onChange={alterarCampo} />
                                    <label>Rua</label>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="numero" placeholder="Número" onChange={alterarCampo} />
                                    <label>Número</label>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="bairro" placeholder="Bairro" onChange={alterarCampo} />
                                    <label>Bairro</label>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="cidade" placeholder="Cidade" onChange={alterarCampo} />
                                    <label>Cidade</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="estado" placeholder="Estado" onChange={alterarCampo} />
                                    <label>Estado</label>
                                </div>
                            </div>

                        </div>

                        <hr className="my-4" />

                        {/* ================= REFERÊNCIA ================= */}
                        <h5 className="mb-3">Contato de Referência</h5>

                        <div className="row g-3">

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="nomeReferencia" placeholder="Nome da referência" onChange={alterarCampo} />
                                    <label>Nome da referência</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="tel" className="form-control" name="telefoneReferencia" placeholder="Telefone da referência" onChange={alterarCampo} />
                                    <label>Telefone da referência</label>
                                </div>
                            </div>

                        </div>

                        <hr className="my-4" />

                        {/* ================= TRABALHO ================= */}
                        <h5 className="mb-3">Dados do Trabalho</h5>

                        <div className="row g-3">

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="ocupacao" placeholder="Ocupação" onChange={alterarCampo} />
                                    <label>Ocupação</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="date" className="form-control" name="dataAdmissao" placeholder="Data de admissão" onChange={alterarCampo} />
                                    <label>Data de Admissão</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="empresa" placeholder="Nome da empresa" onChange={alterarCampo} />
                                    <label>Nome da empresa</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="cargo" placeholder="Cargo" onChange={alterarCampo} />
                                    <label>Cargo</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="tempoEmpresa" placeholder="Tempo na empresa" onChange={alterarCampo} />
                                    <label>Tempo na empresa</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="rendaMensal" placeholder="Renda mensal" onChange={alterarCampo} />
                                    <label>Renda mensal</label>
                                </div>
                            </div>

                        </div>

                        <hr className="my-4" />

                        {/* ================= FINANCIAMENTO ================= */}
                        <h5 className="mb-3">Financiamento</h5>

                        <div className="row g-3">

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="number" className="form-control" name="valorEntrada" placeholder="Valor da entrada" onChange={alterarCampo} />
                                    <label>Valor da entrada</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <select className="form-select" name="motoEscolhida" id="" onChange={alterarCampo} required>
                                        <option value="">Escolha a moto</option>
                                        {motos.map((item) => {
                                            return (
                                                <option value={item.nome}>{item.nome}</option>
                                            )
                                        })}
                                    </select>
                                    <label>Moto escolhida</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <select className="form-select" name="possuiHabilitacao" onChange={alterarCampo} required>
                                        <option value="">Selecione uma opção</option>
                                        <option value="SIM">SIM</option>
                                        <option value="NÃO">NÃO</option>
                                    </select>
                                    <label>Possui habilitação?</label>
                                </div>
                            </div>

                        </div>

                        <div className="d-grid mt-4">
                            <button type="submit" className="btn btn-success btn-lg">
                                Enviar para o vendedor
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    );
}
