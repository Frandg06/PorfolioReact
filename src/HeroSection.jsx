import { Icon } from '@iconify/react/dist/iconify.js';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
export const HeroSection = ({ user }) => {
  return (
    <section className="flex flex-col sm:items-center gap-4 border-b border-gray-500 border-dotted sm:flex-row pb-14">
      <div className="flex items-center gap-2">
        <figure className="overflow-hidden border border-primary rounded-full aspect-square sm:size-48 bg-neutral-800 size-32">
          <img src="/img/avatar.webp" alt="Imagen de perfi (avatar)" className="object-cover w-full h-full" />
        </figure>
        <h1 className="text-2xl font-mono text-center text-primary sm:text-4xl sm:hidden">{user.short_name}</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-mono text-center text-primary sm:text-4xl sm:text-start sm:block hidden">
            {user.name}
          </h1>
          <p className="my-3 text-md sm:text-md sm:text-balance max-w-[50ch] text-secondary">
            {parse(user.hero_desc1)}
          </p>
        </div>
        <div className="flex gap-4 text-md">
          <div className="tooltip size-10" data-tip="Abierto a nuevas oportunidades">
            <button className="p-2 rounded-lg bg-emerald-500 block size-10 hover:bg-emerald-700 hover:-translate-y-1 duration-500">
              <Icon icon="gravity-ui:target-dart" className="mx-auto text-white size-5" />
            </button>
          </div>
          <a
            className="flex items-center justify-center gap-2 p-2 font-semibold duration-500 bg-indigo-500 rounded-lg text-white/80 font-mono hover:bg-indigo-600 hover:-translate-y-1 text-sm"
            data-tooltip-target="descargar-cv"
            href="/Francisco_Diez_Gutierrez.pdf"
            download
          >
            <Icon icon="solar:user-id-bold" className="mx-auto size-5 text-white/80" />
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
