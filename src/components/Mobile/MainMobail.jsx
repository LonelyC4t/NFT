import style from "./style.module.css";
import manMobil from "../../image/manMobile.svg"
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SecondModal } from "../Modal/secondModal";

export function MainMobile () {
    
    const [modalOpen, setModalOpen ] = useState(false);
    const [secondModalOpen, setSecondModalOpen ] = useState(false);
    const closeModal = () => setModalOpen(false);
    const navigate = useNavigate();

    const modalDescription = () => {
        setModalOpen(false)
        setSecondModalOpen(true)
    };

    return (
        <div className={style.main__container}>
            <div className={style.blur}></div>
            <div className={style.main__container_wrapper}>
                <div className={style.main__logo}>
                    <div className={style.main__logo_ellipse}></div>
                    <div className={style.main__logo_text}> NFT </div>
                </div>

                <div onClick={() => setModalOpen(true)} className={style.main__menu_button}>
                    <p className={style.main__menu_button_item}>___</p>
                    <p className={style.main__menu_button_item}>___</p>
                </div>
            </div>
            <div className={style.main__title_wrapper}>
                <p className={style.main__title}>
                    Не упусти возможность войти <br/>в <span className={style.main__title_bolder}> прибыльную нишу </span>
                </p>
                <img className={style.main__image} src={manMobil} alt="" />
                <p className={style.main__title_description}> Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
                <div className={style.main__button}>Начать зарабатывать на NFT</div>
            </div>
            
            <Modal isOpen = {modalOpen} closeModal = {closeModal}> 
                <div className={style.modal__back}>
                    <div className={style.modal__mobile }>
                        <div className={style.modal__logo}>
                            <div className={style.main__logo}>
                                <div className={style.main__logo_ellipse}></div>
                                <div className={style.main__logo_text}> NFT </div>
                            </div>
                        
                            <div className={style.closeModal} onClick={() => setModalOpen(false)}>X</div>
                        </div>
                        <div className={style.modal__nav}>
                            <p onClick={() => setModalOpen(false)} className={style.modal__nav_item} >Главная </p>
                            <p onClick={() => navigate("learn")} className={style.modal__nav_item}>Что даст обучение</p>
                            <div onClick={() => modalDescription()} className={style.modal__nav_button}>Личный кабинет</div>
                        </div>
                    </div>
                </div>
            </Modal>

            <SecondModal isOpen = {secondModalOpen} closeModal = {closeModal}>
                <div className={style.modalBack}>
                    <div className={style.modal}>
                        <p className={style.modal__title}>Начни прямо сейчас!</p>
                        <p className={style.modal__descripton} >Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
                        <input placeholder="Ваш email" className={style.modal__input} type="text" />
                        <div className={style.modal__button}>Оплатить</div>
                        <div onClick={()=>setSecondModalOpen(false)} className={style.closeModal__second}>X</div>
                    </div>
                </div>
            </SecondModal> 
            
        </div>
    )
}