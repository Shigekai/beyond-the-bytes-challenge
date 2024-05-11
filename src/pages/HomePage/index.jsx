import { Header } from "../../components/Header"
import { BannerSection } from "../../components/Sections/BannerSection"
import { FourthSection } from "../../components/Sections/FourthSection"
import { SecondSection } from "../../components/Sections/SecondSection"
import { ThirdSection } from "../../components/Sections/ThirdSection"

export const HomePage = () => {
    
    return(
        <>
            <Header/>
            <BannerSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
        </>
    )
}