import { Icon } from '@iconify/react/dist/iconify.js';
import PropTypes from 'prop-types';
import { TagsIcon } from './TagsIcon';
import parser from 'html-react-parser';

export const Projects = ({ user }) => {
  return (
    <article className="mt-20">
      <h1 className="flex gap-2 mb-8 text-2xl  dark:text-white">
        Projectos
        <Icon icon="solar:star-bold-duotone" className="size-8 dark:text-white/80" />
      </h1>
      {user.projects.map((item, index) => (
        <article className="grid md:grid-cols-12 gap-12 mb-6 group/project md:h-72" key={`${index}-project`}>
          <div className="relative min-h-64 md:col-span-5">
            {item.images.map((image, index) => (
              <figure className="h-72 rounded-xl overflow-hidden" key={`${index}-project-image`}>
                <img src={image} alt="" className="object-cover w-full h-full duration-700" />
              </figure>
            ))}
          </div>
          <div className="flex flex-col justify-between w-full md:col-span-7 gap-4">
            <div className="flex items-center justify-between">
              <h1 className="block p-0 m-0 text-2xl  dark:text-white font-mono">{item.title}</h1>
              {item.label && (
                <span className="px-2 py-1 text-xs font-bold text-white bg-indigo-500 rounded-lg rotate-6">
                  {item.label}
                </span>
              )}
            </div>
            <p className="block p-0 m-0 text-sm md:text-base dark:text-white/70 text-balance text-neutral-700">
              {parser(item.desc)}
            </p>
            <div className="flex gap-2 flex-wrap">
              {item.tags.map((tag, index) => (
                <div className="tooltip" data-tip={tag} key={`${index}-tag`}>
                  <div className="flex dark:text-white items-center w-10 h-10 p-1 transition-all duration-200 rounded-lg dark:bg-neutral-800 bg-gray-200 hover:-translate-y-2">
                    <TagsIcon iconName={tag} className="mx-auto size-7" />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-2 font-bold duration-300 dark:bg-black text-primary border rounded-lg w-fit hover:bg-neutral-300 dark:hover:bg-neutral-800"
                >
                  <Icon icon="mdi:github" className="size-5" />
                  Código
                </a>
              )}
              <a
                href={item.url}
                target="_blank"
                className="flex items-center gap-2 px-5 py-2 font-bold duration-300 dark:bg-white dark:text-black rounded-lg w-fit group/link dark:hover:bg-gray-300 hover:bg-neutral-700 bg-black text-white"
              >
                Live
                <Icon icon="mdi:link" className="duration-500 size-5 group-hover/link:-rotate-45" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </article>
  );
};

Projects.propTypes = {
  user: PropTypes.object.isRequired,
};
