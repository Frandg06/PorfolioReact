export const sendEmail = async (data) => {
  try {
    await fetch(import.meta.env.VITE_EMAIL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: import.meta.env.VITE_EMAIL_API_KEY,
      },
      body: JSON.stringify(data),
    });

    return {
      status: 'success',
      message: 'He recibido su mensaje! Muchas gracias por su interés. Te responderé lo antes posible.',
    };
    // eslint-disable-next-line
  } catch (error) {
    return {
      status: 'error',
      message: 'Ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
    };
  }
};
