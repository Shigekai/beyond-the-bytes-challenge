import { MdExposureZero, MdHeadphones, MdOutlineAutoGraph, MdScreenSearchDesktop } from "react-icons/md"
import style from "./style.module.scss";

export const FourthSection = () => {
    return(
        <section className={style.sectionBox}>
            <div className={`${style.title}`}>
                <h2 className="title two black">Na CM Capital tem tudo o que você precisa para investir:</h2>
            </div>
            <div className={`${style.buttonDiv}`}>
                <button className="button large blue">Abra sua conta</button>
            </div>   
            <div className={`${style.card} ${style.card1}`}>
                <MdExposureZero size={38}/>
                <h3 className="title three black">
                    Corretagem zero
                </h3>
            </div>
            <div className={`${style.card} ${style.card2}`}>
                <MdHeadphones size={38}/>
                <h3 className="title three black">
                Atendimento rápido e humanizado
                </h3>
            </div>
            <div className={`${style.card} ${style.card3}`}>
                <MdScreenSearchDesktop size={38}/>
                <h3 className="title three black">
                Principais plataformas de negociação sem custo
                </h3>
            </div>
            <div className={`${style.card} ${style.card4}`}>
                <MdOutlineAutoGraph size={38}/>
                <h3 className="title three black">
                Variedade de títulos e modalidades de investimento
                </h3>
            </div>
        </section>
    )
}