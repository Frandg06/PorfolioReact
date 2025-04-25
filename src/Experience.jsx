import { Icon } from '@iconify/react/dist/iconify.js';
import PropTypes from 'prop-types';

export const Experience = ({ user }) => {
  return (
    <article className="mt-14">
      <h1 className="flex gap-2 mb-8 text-2xl text-primary">
        Experiencia
        <Icon icon="solar:suitcase-tag-bold-duotone" className="text-primary size-8" />
      </h1>
      <div className="pl-5">
        <ol className="relative dark:border-gray-700 pl-5 border-l-2">
          {user.experience.map((item, index) => (
            <li className="mb-10 ms-6" key={`${index}-experience`}>
              <span className="absolute content-center size-10 bg-indigo-500 rounded-full -start-5 ">
                <Icon icon="whh:html" className="mx-auto text-white size-4" />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-primary font-mono">
                {item.title}

                {item.label && (
                  <span className="text-xs font-semibold me-2 px-2.5 py-1 rounded-lg bg-indigo-500 text-blue-100 ms-3 font-sans">
                    {item.label}
                  </span>
                )}
              </h3>
              <time className="block mb-2 text-sm  font-normal leading-none dark:text-gray-400 font-mono mt-4 text-neutral-700">
                {item.date}
              </time>
              {item.desc.map((desc, index) => (
                <p className="mb-4 font-normal text-primary max-w-[80ch] text-sm md:text-base" key={`${index}-desc`}>
                  {desc}
                </p>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
};

Experience.propTypes = {
  user: PropTypes.object.isRequired,
};
