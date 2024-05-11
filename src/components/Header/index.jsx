import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";
import { HeaderOption } from "./HeaderOption";
import LogoSmall from "../../assets/small-logo.png";
import LogoLarge from "../../assets/logo.webp";
import style from "./style.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {

    return (
        <header className={style.headerBox}>
            <img className={style.logoSmall}
            id="logo-small"
            src={LogoSmall}
            alt="cm capital logo"
            />
            <img
            className={style.logoLarge}
            id="logo-large"
            src={LogoLarge}
            alt="cm capital logo"
            />
            <ul>
                <HeaderOption option={"Sobre Nós"}/>
                <HeaderOption option={"Área do Trader"}/>
                <HeaderOption option={"Investimentos"}/>
                <HeaderOption option={"Blog"}/>
                <HeaderOption option={"Ajuda"}/>
                <IoEllipsisHorizontalCircleOutline size={32} color="white"/>
            </ul>
            
            <div className={style.buttonsDiv}>
                <button className={`${"button mobile white"} ${style.createButton}`}>
                    Abra sua conta
                </button>
    
                <button className={`${"button large transparent"} ${style.loginButton}`}>
                    Login
                </button>
            </div>

            <GiHamburgerMenu className={style.hamburguerMenu} color="white" size={24}/>

        </header>
    )
}