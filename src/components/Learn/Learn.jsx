import style from "./style.module.css";
import smile1 from "../../image/learn1.png"
import smile2 from "../../image/learn2.png"
import smile3 from "../../image/learn3.png"
import smile4 from "../../image/learn4.png"

export function Learn () {


    return (
        <div className={style.learn__wrapper}>
            <p className={style.learn__title} >Что даст тебе обучение ?</p>
            <div className={style.blueElipse}></div>
            <div className={style.purpleElipse}></div>
            <div className={style.purpleHalfElipse}></div>
            <div className={style.purpleElipseUp}></div>
            <div className={style.purpleElipseDown}></div>
            <div className={style.learn__upBlock}>
                
                <div className={style.learn__block_item} >
                    <div className={style.learn__block_itemBack}></div>
                    <img className={style.learn__image} src={smile1} alt="" />
                    <p className={style.learn__item_text}>Откроешь свой первый криптокошелек и научишься с ним работать</p>
                </div>
                
                <div className={style.learn__block_item} >
                    <div className={style.learn__block_itemBack}></div>
                    <img className={style.learn__image} src={smile2} alt="" />
                    <p className={style.learn__item_text} >Поймёшь, как выбирать правильные дропы</p>
                </div>
            </div>
            <div className={style.learn__downBlock} >
                
                <div className={style.learn__block_item} >
                    <div className={style.learn__block_itemBack}></div>
                    <img className={style.learn__image} src={smile3} alt="" />
                    <p className={style.learn__item_text} >Построишь план по быстрому приумножению заработанных средств</p>
                </div>
                
                <div className={style.learn__block_item} >
                    <div className={style.learn__block_itemBack}></div>
                    <img className={style.learn__image} src={smile4} alt="" />
                    <p className={style.learn__item_text} >Узнаешь кто такие холдеры и флипперы</p>
                </div>
            </div>
        </div>
    )
}