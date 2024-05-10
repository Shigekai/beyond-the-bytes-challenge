import { MdKeyboardArrowDown } from "react-icons/md"

export const HeaderOption = ({option}) => {
    return (
        <li>
            <p className="link">{option}</p>
            <MdKeyboardArrowDown size={23} color="white"/>
        </li>
    )
}