import style from "./style.module.css";
import elipse from "../../image/elipse.png";
import lightning1 from "../../image/lightning1.png";
import lightning2 from "../../image/lightning2.png";
import money from "../../image/money.png";
import pig from "../../image/pig.png";
import smile from "../../image/smile.png";
import man from "../../image/man.png";

export function Main () {
    
    return (
        <div className={style.main__container}>
            <div className={style.main__wrapper}>
                <div className={style.main__title}>
                    <p className={style.main__title_text}>Не упусти <br/> возможность войти <br/> <span className={style.main__title_text_bolder}> в прибыльную нишу </span> </p>
                    <p className={style.main__title_text_additional} >Получи все нужные навыки для заработка <br/>на NFT всего за 28 дней!</p>
                    <div className={style.buttonNft}>Начать зарабатывать на NFT</div>
                </div>
                <div className={style.main__image_wrapper}>
                    <div className={style.blur}></div>
                    <img className={style.main__image_elipse} src={elipse} alt="" />
                    <img className={style.main__image_lightning1} src={lightning1} alt="" />
                    <img className={style.main__image_lightning2} src={lightning2} alt="" />
                    <img className={style.main__image_money} src={money} alt="" />
                    <img className={style.main__image_pig} src={pig} alt="" />
                    <img className={style.main__image_smile} src={smile} alt="" />
                    <img className={style.main__image} src={man} alt="" />
                </div>
            </div>
        </div>
    )
}