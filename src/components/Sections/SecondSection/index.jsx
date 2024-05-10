import PaperTexture from "../../../assets/paper.jpg";
import style from "./style.module.scss";

export const SecondSection = () => {
    return(
        <section className={style.sectionBox}>
            <img src={PaperTexture} alt="paper texture" />
            <div className={style.textBox}>           
                <h2 className="title two black">Invista sem se preocupar com taxas</h2>
                <p className="text black">
                A CM Capital tem corretagem zero para tudo! Opere com ações, contratos futuros, minicontratos, opções, commodities, Fundos Imobiliários, BDR, ETF, S&P Futuro e muito mais, sem se preocupar com taxas!
                </p>
                <button className="button large blue">
                    Abra sua conta
                </button>
            </div>
        </section>
    )
}