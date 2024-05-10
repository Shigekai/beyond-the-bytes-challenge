import { MdArrowRight } from "react-icons/md";
import Noronha from "../../../assets/noronha.jpeg";
import style from "./style.module.scss"

export const BannerSection = () => {
    return(
        <section className={style.sectionBox}>
            <div>
                <div className={style.textDiv}>
                    <h1 className="title one white">
                    Toda a excelência de mercado focada no seu futuro
                    </h1>

                    <p className="text white">
                    Com quase 40 anos de atuação global, somos a maior corretora independente do Brasil e Espanha, dedicada a proporcionar uma experiência de investimento completa e segura para você.
                    </p>

                    <button className="button mobile white">
                        Abra sua conta
                    </button>
                </div>

                <div className={style.imgDiv}>
                        <img src={Noronha} alt="Marcio Noronha sentado em um escritório" />
                        <div className={style.headlineBox}>
                            <p className="headline large white">MARCIO NORONHA</p>
                            <p className="headline medium white">{`O "papa"da análise técnica no Brasil`}</p>
                            <div>
                                <a className="headline small white">
                                    Conheça melhor o Noronha
                                </a>
                                <MdArrowRight size={24} color="white"/>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}