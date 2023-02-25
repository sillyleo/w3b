import {AppProps} from "next/app";
import {useEffect, useState} from "react";
import {darkTheme} from "src/styles/theme.css";
import {darkTheme as stitchesDarktheme} from "src/stitches.config";

function MyApp({Component, pageProps}: AppProps) {
  // const [isDark, setIsDark] = useState(false);
  //
  // // this watches the next-themes key in localstorage and updates the state
  // useEffect(() => {
  //   const item = localStorage.getItem("theme");
  //   if (item === "dark") {
  //     setIsDark(true);
  //   } else {
  //     setIsDark(false);
  //   }
  // }, []);
  //
  // // this watches html class change by next-themes
  // useEffect(() => {
  //   const html = document.querySelector("html");
  //   const options = {
  //     attributes: true,
  //   };
  //
  //   function callback(mutationList, observer) {
  //     mutationList.forEach(function (mutation) {
  //       if (
  //         mutation.type === "attributes" &&
  //         mutation.attributeName === "class"
  //       ) {
  //         const item = localStorage.getItem("theme");
  //         if (item === "dark") {
  //           setIsDark(true);
  //         } else {
  //           setIsDark(false);
  //         }
  //       }
  //     });
  //   }
  //
  //   const observer = new MutationObserver(callback);
  //   observer.observe(html, options);
  // }, []);
  //
  // // this adds or removes the dark theme class to the html tag
  // useEffect(() => {
  //   if (isDark) {
  //     document.getElementsByTagName("html")[0].classList.add(darkTheme);
  //     document.getElementsByTagName("html")[0].classList.add(stitchesDarktheme);
  //   } else {
  //     document.getElementsByTagName("html")[0].classList.remove(darkTheme);
  //     document
  //       .getElementsByTagName("html")[0]
  //       .classList.remove(stitchesDarktheme);
  //   }
  // }, [isDark]);

  return <Component {...pageProps} />;
}

export default MyApp;