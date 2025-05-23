import PropTypes from 'prop-types';
import { ArrowIcon } from './ArrowIcon';
import { TagsIcon } from './TagsIcon';
import { LinkPreview } from './LinikPreview';

export const ProjectsGrid = ({ user }) => {
  return (
    <article className="grid gap-8 md:grid-cols-2 mt-14">
      {user.secondary_projects.map((item, index) => (
        <LinkPreview
          url={item.url}
          imageSrc={item.image ?? null}
          isStatic
          key={`${index}-project-grid`}
          className="relative p-4 duration-300 border-2 h-fit min-h-44 z-50 dark:border-white/30 rounded-2xl group/project2 dark:hover:border-white/70 hover:-translate-y-2 border-gray-200 hover:border-gray-600"
        >
          <div className="flex flex-col justify-between h-40 min-h-fit gap-2">
            <h1 className="block p-0 m-0 text-xl font-mono dark:text-white">{item.title}</h1>
            <p className="block p-0 m-0 dark:text-white/70 text-balance text-sm text-neutral-700">{item.desc}</p>
            <div className="flex gap-2 py-2">
              {item.tags.map((tag, index) => (
                <TagsIcon iconName={tag} className="size-5" key={`${index}-tag-grid`} />
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 p-4 transition-transform scale-0 group-hover/project2:scale-100">
            <ArrowIcon />
          </div>
        </LinkPreview>
      ))}
    </article>
  );
};

ProjectsGrid.propTypes = {
  user: PropTypes.object.isRequired,
};
