import { Icon } from '@iconify/react/dist/iconify.js';
import PropTypes from 'prop-types';
import { TagsIcon } from './TagsIcon';
export const Projects = ({ user }) => {
  return (
    <article className="mt-14">
      <h1 className="flex gap-2 mb-8 text-2xl font-bold text-white">
        Projectos
        <Icon icon="fluent-emoji-high-contrast:star" className="size-8 text-white/80" />
      </h1>
      {user.projects.map((item, index) => (
        <article className="grid grid-cols-12 gap-6 mb-6 group/project h-72" key={`${index}-project`}>
          <a
            className="relative block w-full min-h-full col-span-5 overflow-hidden cursor-pointer bg-gray-700/50 rounded-xl"
            href={item.url}
            target="_blank"
          >
            <figure className="absolute transition-all duration-500 h-72 group-hover/project:top-0 group-hover/project:left-0 top-10 left-10">
              <img src={item.image} alt="" className="object-cover w-full h-full duration-700 scale-110 rounded-xl" />
            </figure>
          </a>
          <div className="flex flex-col justify-between w-full col-span-7 space-y-3 ">
            <h1 className="block p-0 m-0 text-2xl font-bold text-white">{item.title}</h1>
            <p className="block p-0 m-0 text-sm text-white/70 text-balance">{item.desc}</p>
            <div className="flex gap-2">
              {item.tags.map((tag, index) => (
                <div className="tooltip" data-tip={tag} key={`${index}-tag`}>
                  <div className="flex items-center w-10 h-10 p-1 transition-all duration-200 rounded-lg bg-gray-700/50 hover:-translate-y-2">
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
                  className="flex items-center gap-2 px-5 py-2 font-bold duration-300 bg-white rounded-lg w-fit hover:bg-gray-300"
                >
                  <Icon icon="mdi:github" className="size-5" />
                  Codigo
                </a>
              )}
              <a
                href={item.url}
                target="_blank"
                className="flex items-center gap-2 px-5 py-2 font-bold duration-300 bg-white rounded-lg w-fit group/link hover:bg-gray-300"
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
