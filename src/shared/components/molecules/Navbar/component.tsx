import type { FC } from "react";
import { ArrowIcon, CartIcon, CellaIcon, ProfileIcon } from "../../atoms/Icons";


export const Navbar: FC = () => {
  return (
    <header className="bg-gray-100 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="logo.png" alt="Cella Logo" className="h-8 mr-4" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-800">Главная</a></li>
              <li><a href="#" className="text-gray-800">Сотрудничество</a></li>
              <li><a href="#" className="text-gray-800">О нас</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <input type="text" placeholder="Поиск по товарам..." className="border rounded-full px-4 py-2" />
            <button className="absolute right-0 top-0 mt-2 mr-2 bg-red-500 text-white rounded-full p-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m2.1-5.4a7.5 7.5 0 11-10.6 0 7.5 7.5 0 0110.6 0z"></path>
              </svg>
            </button>
          </div>
          <nav className="flex items-center space-x-4 ml-4">
            <a href="#" className="text-gray-800">Аккаунт</a>
            <a href="#" className="text-gray-800">Избранное</a>
            <a href="#" className="text-gray-800">Корзина</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
