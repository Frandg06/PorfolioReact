import { Icon } from '@iconify/react/dist/iconify.js';
import PropTypes from 'prop-types';

export const HeroSection = ({ user }) => {
  return (
    <section className="flex flex-col items-center gap-4 border-b border-gray-500 border-dotted sm:flex-row pb-14">
      <div className="overflow-hidden border-8 border-gray-900 rounded-full aspect-square w-44 bg-gray-700/50">
        <img src="/img/avatar.webp" alt="Imagen de perfi (avatar)" className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold text-center text-white sm:text-4xl sm:text-start">{user.name}</h1>
          <p className="my-3 text-md sm:text-md text-white/70 sm:text-balance max-w-[95ch]">{user.hero_desc1}</p>
          <p className="text-md sm:text-md text-white/70 sm:text-balance max-w-[95ch]">{user.hero_desc2}</p>
        </div>
        <div className="flex gap-4 text-md">
          <div className="tooltip size-10" data-tip="Abierto a nuevas oportunidades">
            <button className="p-2 rounded-lg bg-emerald-500 block size-10 hover:bg-emerald-700 hover:-translate-y-1 duration-500">
              <Icon icon="gravity-ui:target-dart" className="mx-auto text-white size-5" />
            </button>
          </div>
          <a
            className="flex items-center justify-center gap-2 p-2 font-semibold duration-500 bg-indigo-500 rounded-lg text-white/70 hover:bg-indigo-700 hover:-translate-y-1"
            data-tooltip-target="descargar-cv"
            href="/Francisco_Diez_Gutierrez.pdf"
            download
          >
            <Icon icon="solar:user-id-bold" className="mx-auto size-5 text-white/70" />
            Currículum
          </a>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  user: PropTypes.object.isRequired,
};
