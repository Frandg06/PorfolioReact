import { Icon } from '@iconify/react/dist/iconify.js';
import { Marquee } from './Marque';
import PropTypes from 'prop-types';
import { TagsIcon } from './TagsIcon';

export const Stack = ({ user }) => {
  const { frontend, backend, tools } = user.stack;
  return (
    <article className="mt-14">
      <h1 className="flex gap-2 mb-8 text-2xl  dark:text-white">
        Stack
        <Icon icon="solar:layers-line-duotone" className="size-8 dark:text-white/80" />
      </h1>
      <Marquee pauseOnHover className="[--duration:30s]">
        {frontend.map((item, index) => (
          <div
            className="flex px-4 cursor-pointer items-center w-fit min-w-20 h-10 p-1 transition-all duration-500 rounded-lg bg-transparent hover:-translate-y-2 gap-2 border-2 border-gray-200 dark:border-white/30 dark:text-white hover:bg-white/10 dark:hover:border-white/70 hover:border-gray-600"
            key={`${index}-frontend`}
          >
            <TagsIcon iconName={item} className="mx-auto size-7" />
            {item}
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnHover reverse={true} className="[--duration:20s]">
        {backend.map((item, index) => (
          <div
            className="flex px-4 cursor-pointer items-center w-fit min-w-20 h-10 p-1 transition-all duration-500 rounded-lg bg-transparent hover:-translate-y-2 font-mono gap-2 border-2 border-gray-200 dark:border-white/30 dark:text-white hover:bg-white/10 dark:hover:border-white/70 hover:border-gray-600"
            key={`${index}-frontend`}
          >
            <TagsIcon iconName={item} className="mx-auto size-7" />
            {item}
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnHover reverse={true} className="[--duration:20s]">
        {tools.map((item, index) => (
          <div
            className="flex px-4 cursor-pointer items-center w-fit min-w-20 h-10 p-1 transition-all duration-500 rounded-lg bg-transparent hover:-translate-y-2  gap-2 border-2 border-gray-200 dark:border-white/30 dark:text-white hover:bg-white/10 dark:hover:border-white/70 hover:border-gray-600"
            key={`${index}-frontend`}
          >
            <TagsIcon iconName={item} className="mx-auto size-7" />
            {item}
          </div>
        ))}
      </Marquee>
    </article>
  );
};

Stack.propTypes = {
  user: PropTypes.object.isRequired,
};
