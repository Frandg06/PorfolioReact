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
      document.querySelector('header').classList.add('backdrop-blur-md');
    }
    if (window.scrollY < 120) {
      document.querySelector('.scroll').classList.add('opacity-0');
      document.querySelector('header').classList.remove('backdrop-blur-md');
    }
  };
  return (
    <header className="h-[72px] sticky top-0 z-50 flex items-center">
      <div className="max-w-7xl flex items-center h-full gap-4 mx-auto justify-between w-full px-4 md:px-14">
        <div className="flex items-center gap-4 scroll opacity-0 transition-all duration-500">
          <figure className=" overflow-hidden border-1 border-primary rounded-full aspect-square w-14 bg-neutral-800 sm:block">
            <img src="/img/avatar.webp" alt="Imagen de perfi (avatar)" className="object-cover w-full h-full" />
          </figure>
          <h1 className="text-xl font-mono text-primary">{name}</h1>
        </div>
        <button
          onClick={handleClick}
          className="cursor-pointer p-2 rounded-lg bg-gray-200 dark:bg-gray-700/50 hover:bg-gray-300 dark:hover:bg-gray-600/50 hover:-translate-y-1 duration-500 flex items-center justify-center"
        >
          <Icon icon="tabler:sun" className="size-6 text-white dark:block hidden" />
          <Icon icon="tabler:moon" className="size-5 text-black dark:hidden" />
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
