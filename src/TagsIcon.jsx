import { Icon } from "@iconify/react/dist/iconify.js";
import PropTypes from "prop-types";

export const TagsIcon = ({ iconName, className }) => {
  switch (iconName) {
    case "Laravel":
      return <Icon icon="devicon:laravel" className={className} />;
    case "Livewire":
      return <Icon icon="devicon:livewire" className={className} />;
    case "JavaScript":
      return <Icon icon="devicon:javascript" className={className} />;
    case "TailwindCSS":
      return <Icon icon="logos:tailwindcss-icon" className={className} />;
    case "MySQL":
      return <Icon icon="logos:mysql" className={className} />;
    case "PHP":
      return <Icon icon="logos:php" className={className} />;
  }
};

TagsIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
