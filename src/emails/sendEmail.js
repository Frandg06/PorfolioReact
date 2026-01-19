export const sendEmail = async (data) => {
  try {
    const response = await fetch(import.meta.env.VITE_EMAIL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-TOKEN": import.meta.env.VITE_EMAIL_API_KEY,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error al enviar el email");
    }

    return {
      status: "success",
      message:
        "He recibido su mensaje! Muchas gracias por su interés. Te responderé lo antes posible.",
    };
    // eslint-disable-next-line
  } catch (error) {
    return {
      status: "error",
      message:
        "Ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.",
    };
  }
};
