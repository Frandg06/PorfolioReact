import PropTypes from "prop-types";
export const Header = ({ name }) => {
  return (
    <header className="h-[72px] max-w-5xl mx-auto sticky top-0 z-50 backdrop-blur-md px-4 sm:block hidden">
      <div className="flex items-center h-full gap-4 scroll">
        <div className="hidden overflow-hidden border-4 border-gray-900 rounded-full aspect-square w-14 bg-gray-700/50 sm:block">
          <img
            src="/img/avatar.webp"
            alt="Imagen de perfi (avatar)"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-xl font-bold text-white">{name}</h1>
      </div>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
