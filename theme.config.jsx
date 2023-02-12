import clsx from "clsx";
import { motion } from "framer-motion";

const logoStyle = {
  height: "100%",
  position: "absolute",
  top: 0,
  left: 30,
  display: "flex",
  alignItems: "center",
};

const logoMotion = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 },
  },
};

const enLogoMotion = {
  initial: { opacity: 1, y: "0%", scale: 1 },
  hover: { opacity: 0, y: "-150%", scale: 1 },
};

const jpLogoMotion = {
  initial: { opacity: 0, y: "-150%", scale: 1 },
  hover: { opacity: 1, y: "0%", scale: 1 },
};

export default {
  logo: (
    <motion.div
      className={clsx("nomimono-style", "heading")}
      layout
      animate="animate"
      initial="initial"
      whileHover="hover"
      variants={logoMotion}
      style={{
        position: "relative",
        bg: "red",
        display: "flex",
        gap: "0.25em",
        fontSize: "1.4em",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* <svg
        width="22"
        height="22"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.864 9H19V37C25 37 29 36 30.393 29.985C31.167 26.643 32.056 17.65 32.056 12.144C32.056 10.279 30.623 9 27.864 9ZM9.892 9H19V37C13 37 9 36 7.485 29.985C6.647 26.658 5.761 17.65 5.761 12.144C5.761 10.279 7.132 9 9.892 9Z"
          fill="#8899A6"
        />
        <path
          d="M32.052 11.5C32.052 13.571 28.922 15.25 18.995 15.25C9.069 15.25 5.938 13.571 5.938 11.5C5.938 9.428 9.069 7.75 18.995 7.75C28.922 7.75 32.052 9.428 32.052 11.5Z"
          fill="#CCD6DD"
        />
        <path
          d="M19.025 13.997L7.516 13C7.516 20 8.62 27.382 9.197 29.572C9.859 32.081 12 31.981 19 31.998C26 31.98 28.166 32.081 28.827 29.572C29.405 27.382 30.52 20 30.52 13L19.025 13.997Z"
          fill="#CCD6DD"
        />
        <path
          d="M19 22V35C26 35 28 34 28.857 29.572C29.098 28.329 29.664 25.497 30.031 22H19ZM8.019 22C8.385 25.497 8.934 28.327 9.168 29.572C10 34 12 35 19 35V22H8.019Z"
          fill="#EE8355"
        />
        <path
          d="M19 31.16C14.444 31.16 10.751 32.055 10.751 33.16C10.751 33.169 10.756 33.178 10.757 33.188C12.154 34.598 14.578 35 19 35C23.413 35 25.836 34.6 27.241 33.197C27.242 33.185 27.249 33.173 27.249 33.16C27.249 32.055 23.556 31.16 19 31.16Z"
          fill="#C35C3B"
        />
        <path
          d="M18.995 24C25.079 24 30.011 23.1046 30.011 22C30.011 20.8954 25.079 20 18.995 20C12.911 20 7.979 20.8954 7.979 22C7.979 23.1046 12.911 24 18.995 24Z"
          fill="#F9A388"
        />
        <path
          d="M34.958 1.936L28.134 3.633C27.383 3.82 26.569 4.21 25.694 4.872C24.051 6.115 23.716 7.802 23.448 8.733L19.34 23H22.462L26.33 9.564C26.594 8.648 26.856 7.862 27.459 7.315C27.993 6.831 28.876 6.546 29.703 6.332L35.68 4.849C36.481 4.65 36.973 3.833 36.775 3.032C36.576 2.23 35.759 1.737 34.958 1.936Z"
          fill="#E1E8ED"
        />
        <path
          d="M19.34 23L16.669 32.277C16.441 33.07 16.903 33.905 17.695 34.134C18.488 34.362 19.323 33.9 19.551 33.108L22.462 23H19.34Z"
          fill="#F9BE88"
        />
        <path
          d="M19.641 23.677L19.053 23.999L18.78 24.946L20.846 28.615L21.622 25.919L20.361 23.678L19.641 23.677Z"
          fill="#AA804E"
        />
        <path
          d="M28.906 3.441L27.778 7.088C28.309 6.741 29.02 6.508 29.705 6.331L30.139 6.223L31.174 2.877L28.906 3.441Z"
          fill="#DD2E44"
        />
        <path
          d="M18.045 27.499L17.268 30.196L19.23 33.681C19.374 33.519 19.488 33.328 19.552 33.107L20.11 31.168L18.045 27.499Z"
          fill="#AA804E"
        />
        <path
          d="M21.048 17.068L20.271 19.766L21.652 22.218L22.124 22.323L22.75 22L23.114 20.738L21.048 17.068ZM35.495 1.907C35.32 1.886 35.139 1.891 34.958 1.936L33.262 2.358L32.226 5.705L34.493 5.142L35.495 1.907ZM21.791 14.488L23.857 18.156L24.633 15.46L22.568 11.791L21.791 14.488ZM25.653 4.909C24.855 5.526 24.368 6.247 24.052 6.931L25.372 12.899L26.332 9.564C26.398 9.334 26.465 9.112 26.536 8.9L25.653 4.909Z"
          fill="#DD2E44"
        />
        <path
          d="M19.663 21.881L19.053 24C20.147 23.999 21.203 23.969 22.2 23.914L22.785 21.882C21.847 22.365 19.891 22.063 19.663 21.881Z"
          fill="#EE7155"
          fill-opacity="0.6"
        />
        <path
          d="M30.615 12.309C30.373 11.66 29.661 11.334 29.031 11.585C25.425 13.001 21.987 13.494 18.995 13.522V16.014C22.328 15.98 26.084 15.437 29.908 13.934C30.541 13.686 30.858 12.958 30.615 12.309ZM7.375 12.309C7.617 11.66 8.329 11.334 8.959 11.585C12.565 13.001 16.003 13.494 18.995 13.522V16.014C15.662 15.98 11.906 15.437 8.082 13.934C7.45 13.686 7.132 12.958 7.375 12.309Z"
          fill="white"
        />
      </svg> */}

      <motion.span>🥤 </motion.span>
      <motion.div
        // a placeholder for logo width
        style={{ opacity: 0 }}
      >
        Nomimono
      </motion.div>
      <motion.div
        style={logoStyle}
        variants={enLogoMotion}
        // initial={{ y: 0 }}
        // animate={{ y: -40 }}
      >
        Nomimono
      </motion.div>
      <motion.div
        variants={jpLogoMotion}
        style={logoStyle}
        // initial={{ y: 40 }}
        // animate={{ y: 0 }}
      >
        のみもの
      </motion.div>
    </motion.div>
  ),
  docsRepositoryBase: "https://github.com/sillyleo/nomimono",
  primaryHue: 27,
  project: {
    link: "https://github.com/sillyleo/nomimono",
  },
  faviconGlyph: "🥤",
  head: (
    <>
      <title>Nomimono</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="og:description"
        content="A simple web3-flavored component library"
      />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </>
  ),
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://github.com/sillyleo" target="_blank">
          Leo Lin
        </a>
        .
      </span>
    ),
  },
  // ...
};
