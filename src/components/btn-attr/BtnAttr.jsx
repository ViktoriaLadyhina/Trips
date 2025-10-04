import { useNavigate } from 'react-router';
import './BtnAttr.scss'

const BtnAttr = ({ lang, path }) => {
    const navigate = useNavigate();

const handleClick = () => {
    navigate(path);
};

    return (
        <button className='button' onClick={handleClick}>
            {lang === "ru" ? "Достопримечательности" : lang === "de" ? "Sehenswürdigkeiten" : "Пам'ятки"}
        </button>
    )
}

export default BtnAttr