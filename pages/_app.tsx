import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "../dist/style.css";
import { useReadLocalStorage } from "usehooks-ts";
import { darkTheme } from "src/styles/theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const item = localStorage.getItem("theme");
    if (item === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    const options = {
      attributes: true,
    };

    function callback(mutationList, observer) {
      mutationList.forEach(function (mutation) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const item = localStorage.getItem("theme");
          if (item === "dark") {
            setIsDark(true);
          } else {
            setIsDark(false);
          }
        }
      });
    }

    const observer = new MutationObserver(callback);
    observer.observe(html, options);
  }, []);

  return (
    <div className={isDark ? darkTheme : null}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
