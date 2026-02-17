import { useEffect, useState } from "react"
import type { IMoto } from "../types/Moto"
import { MotoCard } from "../components/MotoCard"
import { Chat } from "../components/Chat"
import { IoChatbubbleEllipsesOutline } from "react-icons/io5"
import { FaInstagram, FaWpforms } from "react-icons/fa"
import { HiOutlineClipboardDocumentList } from "react-icons/hi2"

export function HomePage() {
    const [motoList, setMotoList] = useState<IMoto[]>([])
    const [isModalVisible, setModalVisible] = useState<boolean>(false)
    const toogleModal = () => {
        setModalVisible(!isModalVisible)
    }
    useEffect(() => {
        const loadMotos = async () => {
            const res = await fetch('data.json', {

            })
            const obj: IMoto[] = await res.json()
            setMotoList(obj)
        }
        loadMotos()
    }, [])
    return (
        <>
            <div className="hero">
                <img src="img/profile.jpg" alt="profile-photo" className="profile-img" />
            </div>
            <div className="profile-info">
                <div>
                    <div className="profile-head">
                        <div className="profile-name-box">
                            <h2 className="profile-name">JAMIR CARDOSO</h2>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.51447 2.91542C8.90071 3.43846 8.1376 3.75455 7.33377 3.8187C5.45794 3.96839 3.96839 5.45794 3.8187 7.33377C3.75455 8.1376 3.43846 8.90071 2.91542 9.51447C1.69486 10.9467 1.69486 13.0533 2.91542 14.4855C3.43846 15.0993 3.75455 15.8624 3.8187 16.6662C3.96839 18.5421 5.45794 20.0316 7.33377 20.1813C8.1376 20.2455 8.90071 20.5615 9.51447 21.0846C10.9467 22.3051 13.0533 22.3051 14.4855 21.0846C15.0993 20.5615 15.8624 20.2455 16.6662 20.1813C18.5421 20.0316 20.0316 18.5421 20.1813 16.6662C20.2455 15.8624 20.5615 15.0993 21.0846 14.4855C22.3051 13.0533 22.3051 10.9467 21.0846 9.51447C20.5615 8.90071 20.2455 8.1376 20.1813 7.33377C20.0316 5.45794 18.5421 3.96839 16.6662 3.8187C15.8624 3.75455 15.0993 3.43846 14.4855 2.91542C13.0533 1.69486 10.9467 1.69486 9.51447 2.91542Z"
                                    fill="#0788F5"></path>
                                <path d="M9 12L11 14L15.5 9.5" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg>
                        </div>
                        <p className="profile-txt">Conectando você à sua próxima moto com as melhores condições!</p>
                    </div>
                    <div className="links-box d-flex justify-content-left align-items-start flex-wrap">
                        <button className="profile-link" onClick={() => {
                            location.href = "https://www.instagram.com/jamir.honda/"
                        }}>
                            <FaInstagram size={25} />
                            Instagram
                        </button>
                        <button className="profile-link" onClick={() => {
                            toogleModal()
                        }}>
                            <IoChatbubbleEllipsesOutline size={25} />
                            Fale Comigo
                        </button>
                        <button className="profile-link" onClick={() => {
                            location.href = "/fichacdc"
                        }}>
                            <FaWpforms size={25} />
                            Ficha CDC
                        </button>
                        <button className="profile-link" onClick={() => {
                            location.href = "/fichacnh"
                        }}>
                            <HiOutlineClipboardDocumentList size={25} />
                            Ficha CNH
                        </button>
                    </div>
                </div>
            </div>
            <div className="motorcycles-container" id="motorcyclesContainer">
                {
                    motoList.map((item) => {
                        return <MotoCard moto={item} />
                    })
                }
            </div>
            {isModalVisible ? <Chat toogleModal={toogleModal} /> : null}
        </>
    )
}