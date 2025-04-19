import { Resend } from "resend";

export const sendEmail = async () => {
  const resend = new Resend("re_DSKN1Q3x_PhWp2RkEg1mkqThXxxpvJEi1");
  await resend.emails.send({
    from: "fdiez86@gmail.com",
    to: "fdiez86@gmail.com",
    subject: "hello world",
    react: "<h1>IAFJOIUDHFsoidf</h1>",
  });
};
