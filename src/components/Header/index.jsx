import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";
import { HeaderOption } from "./HeaderOption";
import LogoSmall from "../../assets/small-logo.png";
import style from "./style.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {

    return (
        <header className={style.headerBox}>
            <img id="logo-small" src={LogoSmall} alt="cm capital logo"/>

            <ul>
                <HeaderOption option={"Sobre Nós"}/>
                <HeaderOption option={"Área do Trader"}/>
                <HeaderOption option={"Investimentos"}/>
                <HeaderOption option={"Blog"}/>
                <HeaderOption option={"Ajuda"}/>
                <IoEllipsisHorizontalCircleOutline size={24} color="white"/>
            </ul>
            
            <button className="button mobile white">
                Abra sua conta
            </button>

            <button className="button none">
                Login
            </button>

            <GiHamburgerMenu color="white" size={24}/>

        </header>
    )
}