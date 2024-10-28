import { Icon } from "@iconify/react/dist/iconify.js";
import PropTypes from "prop-types";

export const Experience = ({ user }) => {
  return (
    <article className="mt-14">
      <h1 className="flex gap-2 mb-8 text-2xl font-bold text-white">
        Experiencia
        <Icon
          icon="solar:suitcase-tag-bold-duotone"
          className="text-white size-8"
        />
      </h1>
      <div className="pl-5">
        <ol className="relative border-gray-700 border-s">
          {user.expirience.map((item, index) => (
            <li className="mb-10 ms-6" key={`${index}-experience`}>
              <span className="absolute content-center w-10 h-10 bg-indigo-500 rounded-full -start-5 border-[6px] border-gray-900">
                <Icon icon="whh:html" className="mx-auto text-white size-4" />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                {item.title}

                {item.label && (
                  <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300 ms-3">
                    {item.label}
                  </span>
                )}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                {item.date}
              </time>
              {item.desc.map((desc, index) => (
                <p
                  className="mb-4 text-base font-normal text-gray-400"
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
