import { MdExposureZero, MdHeadphones, MdOutlineAutoGraph, MdScreenSearchDesktop } from "react-icons/md"

export const FourthSection = () => {
    return(
        <section>
            <div>
                <h2 className="title two black">Na CM Capital tem tudo o que você precisa para investir:</h2>
                <button className="button large blue">Abra sua conta</button>
            </div>
            <div>
                <div>
                    <MdExposureZero size={24}/>
                    <h3 className="title three black">
                        Corretagem zero
                    </h3>
                </div>
                <div>
                    <MdHeadphones size={24}/>
                    <h3 className="title three black">
                    Atendimento rápido e humanizado
                    </h3>
                </div>
                <div>
                    <MdScreenSearchDesktop size={24}/>
                    <h3 className="title three black">
                    Principais plataformas de negociação sem custo
                    </h3>
                </div>
                <div>
                    <MdOutlineAutoGraph size={24}/>
                    <h3 className="title three black">
                    Variedade de títulos e modalidades de investimento
                    </h3>
                </div>
            </div>
        </section>
    )
}