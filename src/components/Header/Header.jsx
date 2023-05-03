import { useState } from "react";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { Modal } from "../Modal/Modal";

export function Header () {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => setModalOpen(false);

    return (
        <>
        <div className={style.nav__container}>
            <div className={style.nav__logo}>
                <div className={style.nav__logo_ellipse}></div>
                <div className={style.nav__logo_text}> NFT </div>
            </div>

            <div className={style.blur}></div>
            
            <div className={style.nav__menu}>
                <div className={style.nav__menu_item} onClick={() => navigate('/')} >Главная</div>
                <div className={style.nav__menu_item} onClick={() => navigate('/learn')} >Что даст обучение</div>
                <div className={style.nav__menu_button} onClick={()=> setModalOpen(true)}>Личный кабинет</div>
            </div>
        </div>
        
        <div className={style.modalWrapper}>
            <Modal isOpen = {modalOpen} closeModal = {closeModal}>
                <div className={style.modalBack}>
                    <div className={style.modal}>
                        <p className={style.modal__title}>Начни прямо сейчас!</p>
                        <p className={style.modal__descripton} >Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
                        <input placeholder="Ваш email" className={style.modal__input} type="text" />
                        <div className={style.modal__button}>Оплатить</div>
                        <div className={style.elipse}></div>
                        <div onClick={()=>setModalOpen(false)} className={style.closeModal}>X</div>
                    </div>
                </div>
            </Modal>
        </div>
    </>
    )
};