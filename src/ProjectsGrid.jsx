import PropTypes from 'prop-types';
import { ArrowIcon } from './ArrowIcon';
import { TagsIcon } from './TagsIcon';

export const ProjectsGrid = ({ user }) => {
  return (
    <article className="grid gap-8 md:grid-cols-2 mt-14">
      {user.secondary_projects.map((item, index) => (
        <a
          href={item.url}
          target="_blank"
          key={`${index}-project-grid`}
          className="relative p-4 duration-300 border-2 h-fit min-h-44 border-white/30 rounded-2xl group/project2 hover:border-white/70 hover:-translate-y-2"
        >
          <div className="flex flex-col justify-between h-36 min-h-fit">
            <h1 className="block p-0 m-0 text-xl font-bold text-white">{item.title}</h1>
            <p className="block p-0 m-0 text-white/70 text-balance text-sm">{item.desc}</p>
            <div className="flex gap-2 py-2">
              {item.tags.map((tag, index) => (
                <TagsIcon iconName={tag} className="size-5" key={`${index}-tag-grid`} />
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 p-4 transition-transform scale-0 group-hover/project2:scale-100">
            <ArrowIcon />
          </div>
        </a>
      ))}
    </article>
  );
};

ProjectsGrid.propTypes = {
  user: PropTypes.object.isRequired,
};
