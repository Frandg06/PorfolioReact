import { EmailIcon } from "./EmailIcon";
import { sendEmail } from "./emails/sendEmail";

export const Email = () => {
  const handleSubmit = () => {
    sendEmail();
  };
  return (
    <article className="space-y-4 mt-14">
      <h1 className="flex gap-2 mb-8 text-2xl font-bold text-white">
        Email
        <EmailIcon />
      </h1>
      <form>
        <div className="flex gap-2 mb-3">
          <p
            id="emailInput"
            className="w-full p-2 text-gray-400 bg-gray-700 border border-gray-600 rounded-xl"
          >
            fdiez86@gmail.com
          </p>
          <button
            type="button"
            data-tooltip-target="copy-email"
            className="px-4 bg-indigo-500 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#ffffff"
                fillOpacity=".15"
                d="M232 706h142c22.1 0 40 17.9 40 40v142h250V264H232z"
              />
              <path
                fill="#ffffff"
                d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32"
              />
              <path
                fill="#ffffff"
                d="M704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32M350 856.2L263.9 770H350zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432z"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            data-tooltip-target="send-email"
            className="px-4 bg-indigo-500 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 256 256"
            >
              <g fill="#ffffff">
                <path
                  d="M219.91 134.86L51.93 231a8 8 0 0 1-11.44-9.67l31-90.71a7.89 7.89 0 0 0 0-5.38l-31-90.47a8 8 0 0 1 11.44-9.67l168 95.85a8 8 0 0 1-.02 13.91"
                  opacity=".2"
                />
                <path d="m223.87 114l-168-95.89a16 16 0 0 0-22.94 19.21l31 90.47a.42.42 0 0 0 0 .1a.3.3 0 0 0 0 .1l-31 90.67A16 16 0 0 0 48 240a16.14 16.14 0 0 0 7.92-2.1l167.91-96.05a16 16 0 0 0 .05-27.89ZM48 224v-.09L78.14 136H136a8 8 0 0 0 0-16H78.22L48.06 32.12L48 32l168 95.83Z" />
              </g>
            </svg>
          </button>
        </div>
        <div>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Escribe tu email aqui"
          ></textarea>
        </div>
      </form>
    </article>
  );
};
