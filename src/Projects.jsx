import { Icon } from "@iconify/react/dist/iconify.js";
import PropTypes from "prop-types";
import { TagsIcon } from "./TagsIcon";
export const Projects = ({ user }) => {
  return (
    <article className="mt-14">
      <h1 className="flex gap-2 mb-8 text-2xl font-bold text-white">
        Projectos
        <Icon
          icon="fluent-emoji-high-contrast:star"
          className="size-8 text-white/80"
        />
      </h1>
      {user.projects.map((item, index) => (
        <div className="flex flex-col gap-8" key={`${index}-project`}>
          <article className="flex flex-col gap-6 md:flex-row group/project">
            <div className="w-full overflow-hidden cursor-pointer md:w-1/2 max-h-56 min-h-56 bg-gray-700/50 rounded-xl">
              <img
                src="/img/project1.webp"
                alt=""
                className="w-full duration-700 translate-x-10 translate-y-10 rounded-xl group-hover/project:translate-x-8 group-hover/project:translate-y-8"
              />
            </div>
            <div className="py-4 space-y-3">
              <h1 className="block p-0 m-0 text-3xl font-bold text-white">
                {item.title}
              </h1>
              <p className="block p-0 m-0 text-white/70 text-balance">
                {item.desc}
              </p>
              <div className="flex gap-2">
                {item.tags.map((tag, index) => (
                  <div
                    className="flex items-center w-10 h-10 p-1 rounded-lg bg-gray-700/50"
                    key={`${index}-tag`}
                  >
                    <TagsIcon iconName={tag} className="mx-auto size-7" />
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={item.github}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-2 font-bold duration-300 bg-white rounded-lg w-fit hover:bg-gray-300"
                >
                  Codigo
                </a>
                <a
                  href={item.url}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-2 font-bold duration-300 bg-white rounded-lg w-fit group/link hover:bg-gray-300"
                >
                  Live
                  <Icon
                    icon="mdi:link"
                    className="duration-500 size-5 group-hover/link:-rotate-45"
                  />
                </a>
              </div>
            </div>
          </article>
        </div>
      ))}
    </article>
  );
};

Projects.propTypes = {
  user: PropTypes.object.isRequired,
};
