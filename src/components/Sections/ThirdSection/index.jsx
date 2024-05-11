import Phone from "../../../assets/phone.webp";
import style from "./style.module.scss"

export const ThirdSection = () => {
    return (
        <section className={style.sectionBox}>
            <div className={style.imgDiv}>
                <img src={Phone} alt="men happy using cm capital app" />
            </div>
            <div className={style.textDiv}>
                <h2 className="title two white">Mais proximidade e independência</h2>
                <p className="text white">Converse com nossos especialistas e tenha acesso a análises e relatórios completos sobre o mercado financeiro.</p>
                <p className="text white">Somos uma corretora independente, colocando você em primeiro lugar, sem conflito de interesses.</p>
                <p className="text white">Conte com nossa equipe para alcançar seus objetivos financeiros com confiança e segurança.</p>
                <button className="button large white">
                    Começar a investir
                </button>
            </div>
        </section>
    )
}