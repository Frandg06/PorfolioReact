import { Icon } from '@iconify/react/dist/iconify.js';
import PropTypes from 'prop-types';

export const Experience = ({ user }) => {
  return (
    <article className="mt-14">
      <h1 className="flex gap-2 mb-8 text-2xl  dark:text-white">
        Experiencia
        <Icon icon="solar:suitcase-tag-bold-duotone" className="dark:text-white size-8" />
      </h1>
      <div className="pl-5">
        <ol className="relative dark:border-gray-700 pl-5 border-l-2">
          {user.experience.map((item, index) => (
            <li className="mb-10 ms-6" key={`${index}-experience`}>
              <span className="absolute content-center w-10 h-10 bg-indigo-500 rounded-full -start-5 border-[6px] border-gray-900">
                <Icon icon="whh:html" className="mx-auto dark:text-white size-4" />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold dark:text-white font-mono">
                {item.title}

                {item.label && (
                  <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-indigo-900 bg-indigo-500 text-blue-100 ms-3">
                    {item.label}
                  </span>
                )}
              </h3>
              <time className="block mb-2 text-sm  font-normal leading-none dark:text-gray-400 font-mono mt-4 text-neutral-700">
                {item.date}
              </time>
              {item.desc.map((desc, index) => (
                <p
                  className="mb-4 font-normal dark:text-gray-400 text-neutral-700 max-w-[80ch] text-sm md:text-base"
                  key={`${index}-desc`}
                >
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
