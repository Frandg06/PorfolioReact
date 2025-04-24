import { RedesIcon } from './RedesIcon';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react/dist/iconify.js';

export const Redes = ({ user }) => {
  return (
    <article className="mt-14">
      <h1 className="flex gap-2 mb-8 text-2xl  dark:text-white">
        Redes
        <RedesIcon />
      </h1>
      <div className="flex flex-col gap-4 md:flex-row">
        <a
          href={user.linkedin}
          target="_blank"
          className="text-[#0A66C2] font-semibold flex gap-2 justify-center items-center p-4 border-2 dark:border-white/20 duration-500 rounded-xl hover:-translate-y-2 hover:bg-white/10 dark:hover:border-white/70 hover:border-gray-600 border-gray-200 transition-all"
        >
          <Icon icon="skill-icons:linkedin" className="size-7" />
          LinkedIn
        </a>
        <a
          href={user.github}
          target="_blank"
          className="flex items-center justify-center gap-2 p-4 font-semibold dark:text-white transition-all border-2 dark:border-white/20 duration-500 rounded-xl hover:-translate-y-2 hover:bg-white/10 dark:hover:border-white/70 hover:border-gray-600 border-gray-200"
        >
          <Icon icon="mdi:github" className="size-7" />
          GitHub
        </a>
      </div>
    </article>
  );
};

Redes.propTypes = {
  user: PropTypes.object.isRequired,
};
