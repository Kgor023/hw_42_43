import { useContext } from "react";
import { Theme } from "../App";
import '../style/Header.css'
export default function Header() {
  const contextColor = useContext(Theme);
  const handlerChangeColor = () => {
    contextColor.setColor(!contextColor.color);
  };
  return (
    <header className={contextColor.color ? 'header_light' : 'header_dark'}>
   <h1>ДЗ по Реакту</h1>
      <button className={contextColor.color ? 'header_lightButton header__button' : 'header_darkButton header__button'} onClick={handlerChangeColor}>Change the theme</button>
    </header>
  );
}
