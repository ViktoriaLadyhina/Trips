import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../store/features/languageSlice";
import './LangSelector.scss'

const LangSelector = () => {
  const lang = useSelector((state) => state.language.lang);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <div className="language-switcher">
      <select value={lang} onChange={handleChange}>
        <option value="ru">RU</option>
        <option value="ua">UA</option>
        <option value="de">DE</option>
      </select>
    </div>
  );
};

export default LangSelector;