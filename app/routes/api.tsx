import type { Route } from "../+types/api";
import * as v from "valibot"; // 1.24 kB

// este pattern se conoce como "modular".
const EmailSchema = v.pipe(
  v.string(),
  v.nonEmpty("Se necesita un email."),
  v.email("Esto no es un email."),
  v.maxLength(30, "No cabe tu email.")
);

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  // error si no es valido (usas bloques try, catch aquí)
  const email = v.parse(EmailSchema, formData.get("email"));
  // el schema va primero   👆🏼       ^el email después

  console.log("Nuevo suscriptor: ", email); // guardamos en DB
  return { confetti: 1 };
};
