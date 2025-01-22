import { useFetcher } from "react-router";
import { motion } from "motion/react";
import { EmojiConfetti } from "./EmojiConfetti";

export const Subscriber = () => {
  const fetcher = useFetcher();
  const isLoading = fetcher.state !== "idle";

  // esto funcionará solo después de hacer post. ✅
  const isSuccess = fetcher.data?.success === 1;

  if (isSuccess) {
    return (
      <>
        <EmojiConfetti />
        <p className="rounded-3xl bg-gradient-to-r from-green-700 to-green-950 p-8 text-md text-center">
          ¡Gracias por unirte! ☺️
          <br />
          Ahora confirma tu correo para que empieces a recibir mis
          correspondencia. 😉
        </p>
      </>
    );
  }

  return (
    <>
      <section>
        <fetcher.Form
          action="/api"
          method="post"
          className="grid place-content-center"
        >
          <div className="rounded-3xl bg-gradient-to-r from-green-700 to-green-950 p-8">
            <h4 className="font-bold">Suscríbete a mi lista de correo</h4>
            <p className="text-xs">
              De vez en vez, escribo honestamente sobre cómo estoy llevando mi
              carrera profesional de manera completamente independiente. Indi
              hacking en tu mail. 🤓
            </p>
            <div className="flex items-center">
              <motion.input
                whileFocus={{ x: 0 }}
                style={{ x: 50 }}
                type="email"
                name="email"
                className="py-3 px-6 rounded-l-2xl -mr-4 w-[320px] flex-grow focus:outline-dashed focus:outline-green-200"
              />
              <button
                className="py-3 px-10 text-lg font-bold rounded-2xl bg-green-400 z-10 active:bg-green-500"
                type="submit"
              >
                {isLoading ? (
                  <div className="border-4 h-6 w-6 rounded-full border-t-green-800 animate-spin" />
                ) : (
                  "Suscribirme"
                )}
              </button>
            </div>
          </div>
        </fetcher.Form>
      </section>
    </>
  );
};
