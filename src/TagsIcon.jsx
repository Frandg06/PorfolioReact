import { Icon } from '@iconify/react/dist/iconify.js';
import PropTypes from 'prop-types';

export const TagsIcon = ({ iconName, className }) => {
  switch (iconName) {
    case 'Laravel':
      return <Icon icon="devicon:laravel" className={className} />;
    case 'Livewire':
      return <Icon icon="devicon:livewire" className={className} />;
    case 'JavaScript':
      return <Icon icon="devicon:javascript" className={className} />;
    case 'TailwindCSS':
      return <Icon icon="logos:tailwindcss-icon" className={className} />;
    case 'MySQL':
      return <Icon icon="logos:mysql" className={className} />;
    case 'PHP':
      return <Icon icon="logos:php" className={className} />;
    case 'PostgreSQL':
      return <Icon icon="logos:postgresql" className={className} />;
    case 'Node.js':
      return <Icon icon="logos:nodejs-icon" className={className} />;
    case 'React':
      return <Icon icon="logos:react" className={className} />;
    case 'Socket.IO':
      return <Icon icon="cib:socket-io" className={className} />;
    case 'Cloudflare':
      return <Icon icon="devicon:cloudflare" className={className} />;
    case 'CSS':
      return <Icon icon="devicon:css3" className={className} />;
    case 'TanStack Query':
      return <img src="/img/tanstacklogo.png" alt="TanStack Query" className={className} />;
    case 'HTML':
      return <Icon icon="skill-icons:html" className={className} />;
    case 'jQuery':
      return <Icon icon="devicon:jquery" className={className} />;
    case 'Twig':
      return <Icon icon="material-icon-theme:twig" className={className} />;
    case 'Bootstrap':
      return <Icon icon="logos:bootstrap" className={className} />;
    case 'SCSS':
      return <Icon icon="vscode-icons:file-type-scss" className={className} />;
    case 'Git':
      return <Icon icon="devicon:git" className={className} />;
    case 'Docker':
      return <Icon icon="devicon:docker" className={className} />;
    case 'Swagger':
      return <Icon icon="logos:swagger" className={className} />;
    case 'PHPUnit':
      return <Icon icon="material-icon-theme:phpunit" className={className} />;
    case 'Vercel':
      return <Icon icon="simple-icons:vercel" className={className} />;
    case 'Inertia.js':
      return <Icon icon="devicon:inertiajs" className={className} />;
    case 'shadcn/ui':
      return <Icon icon="simple-icons:shadcnui" className={className} />;
    case 'Hono':
      return <Icon icon="logos:hono" className={className} />;
    case 'TypeScript':
      return <Icon icon="logos:typescript-icon" className={className} />;
    case 'OpenAI':
      return <Icon icon="simple-icons:openai" className={className} />;
  }
};

TagsIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
