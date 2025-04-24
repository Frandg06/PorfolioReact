import { Icon } from '@iconify/react/dist/iconify.js';
import PropTypes from 'prop-types';
export const Header = ({ name }) => {
  const handleClick = () => {
    const html = document.querySelector('html');
    const isDarkMode = html.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  };
  window.onscroll = function () {
    if (window.scrollY > 120) {
      document.querySelector('.scroll').classList.remove('opacity-0');
    }
    if (window.scrollY < 120) {
      document.querySelector('.scroll').classList.add('opacity-0');
    }
  };
  return (
    <header className="h-[72px] max-w-7xl mx-auto sticky top-0 z-50 backdrop-blur-md px-4 flex justify-between items-center ">
      <div className="flex items-center h-full gap-4 scroll opacity-0 transition-all duration-500">
        <div className=" overflow-hidden border-4 border-gray-900 rounded-full aspect-square w-14 bg-gray-700/50 sm:block">
          <img src="/img/avatar.webp" alt="Imagen de perfi (avatar)" className="object-cover w-full h-full" />
        </div>
        <h1 className="text-xl font-bold dark:text-white text-black">{name}</h1>
      </div>
      <button
        onClick={handleClick}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700/50 hover:bg-gray-300 dark:hover:bg-gray-600/50 hover:-translate-y-1 duration-500 flex items-center justify-center"
      >
        <Icon icon="tabler:sun" className="size-6 text-white dark:block hidden" />
        <Icon icon="tabler:moon" className="size-5 text-black dark:hidden" />
      </button>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
