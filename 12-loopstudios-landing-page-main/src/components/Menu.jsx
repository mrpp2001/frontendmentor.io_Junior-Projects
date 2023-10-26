import { useState } from 'react';
import logo from "../assets/images/logo.svg";
import close from "../assets/images/icon-close.svg";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(true);

  const hideMenu = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className="w-full h-screen px-6 py-10 bg-black text-white absolute top-0">
        <div className="flex justify-between">
          <img src={logo} alt="" />
          <img className="w-7 h-7" src={close} alt="" onClick={hideMenu} />
        </div>
        <ul className="flex flex-col gap-5 mt-28 text-3xl font-light uppercase">
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">careers</a>
          </li>
          <li>
            <a href="">events</a>
          </li>
          <li>
            <a href="">products</a>
          </li>
          <li>
            <a href="">support</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
