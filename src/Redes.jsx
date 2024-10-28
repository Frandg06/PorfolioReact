import { RedesIcon } from "./RedesIcon";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react/dist/iconify.js";

export const Redes = ({ user }) => {
  return (
    <article className="mt-14">
      <h1 className="flex gap-2 mb-8 text-2xl font-bold text-white">
        Redes
        <RedesIcon />
      </h1>
      <div className="flex flex-col gap-4 md:flex-row">
        <a
          href={user.linkedin}
          target="_blank"
          className="text-[#0A66C2] font-semibold flex gap-2 justify-center items-center p-4 border-2 border-white/20 rounded-xl hover:bg-gray-600/10 hover:scale-105 transition-transform"
        >
          <Icon icon="skill-icons:linkedin" className="size-7" />
          LinkedIn
        </a>
        <a
          href={user.github}
          target="_blank"
          className="flex items-center justify-center gap-2 p-4 font-semibold text-white transition-transform border-2 border-white/20 rounded-xl hover:bg-gray-600/10 hover:scale-105"
        >
          <Icon icon="mdi:github" className="size-7" />
          GitHub
        </a>
      </div>
    </article>
  );
};

Redes.propTypes = {
  user: PropTypes.object.isRequired,
};
