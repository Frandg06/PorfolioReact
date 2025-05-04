import toast from 'react-hot-toast';
import { Icon } from '@iconify/react/dist/iconify.js';
import { sendEmail } from './emails/sendEmail';
import { useState } from 'react';

export const Email = () => {
  const [loading, setLoading] = useState(false);

  const email = 'fdiez86@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast.success('Email copiado al portapapeles');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    if (!data.name || !data.email || !data.content) {
      toast.error('Por favor, complete todos los campos');
      return;
    }

    const respose = await sendEmail(data);
    toast[respose.status](respose.message);
    setLoading(false);
  };

  return (
    <article className="space-y-4 mt-14">
      <h1 className="flex gap-2 mb-8 text-2xl items-center dark:text-white">
        Email
        <Icon icon="solar:inbox-unread-bold-duotone" />
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 mb-3">
          <p id="emailInput" className="w-full p-2 text-gray-400 dark:bg-black border border-gray-600 rounded-xl">
            {email}
          </p>
          <button
            type="button"
            onClick={handleCopy}
            className="px-4 bg-indigo-500 rounded-xl cursor-pointer hover:scale-105 duration-200 transition-all hover:bg-indigo-600"
          >
            <Icon icon="uil:copy" className="text-white size-5" />
          </button>
          <button
            type="submit"
            className="px-4 bg-indigo-500 rounded-xl cursor-pointer hover:scale-105 duration-200 transition-all hover:bg-indigo-600"
          >
            {loading ? (
              <Icon icon="tabler:loader" className="text-white size-5 animate-spin" />
            ) : (
              <Icon icon="tabler:send" className="text-white size-5" />
            )}
          </button>
        </div>
        <div className="text-neutral-700 dark:text-gray-300">
          <div className="flex gap-2 mb-3 w-full">
            <input
              type="text"
              name="name"
              className="w-full p-2 dark:bg-black border border-gray-600 rounded-xl"
              placeholder="Escriba su nombre aquí"
              required
            />
            <input
              placeholder="Escriba su email aquí"
              name="email"
              type="email"
              required
              className="w-full p-2 dark:bg-black border border-gray-600 rounded-xl"
            />
          </div>
          <textarea
            id="content"
            rows="4"
            className="w-full p-2 dark:bg-black border border-gray-600 rounded-xl"
            placeholder="Escribe tu mensaje aquí"
            name="content"
            required
          ></textarea>
        </div>
      </form>
    </article>
  );
};
