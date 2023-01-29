import { globalFontFace } from "@vanilla-extract/css";
export const skModernistBold = "SkModernistBold";
globalFontFace(skModernistBold, {
  src: 'url("/fonts/sk-modernist-bold-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-bold-webfont.woff") format("woff"),url("/fonts/sk-modernist-bold-webfont.ttf") format("truetype")',
  fontWeight: "bold",
});

export const skModernistRegular = "SkModernistRegular";
globalFontFace(skModernistRegular, {
  src: 'url("/fonts/sk-modernist-regular-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-regular-webfont.woff") format("woff"),url("/fonts/sk-modernist-regular-webfont.ttf") format("truetype")',
  fontWeight: 400,
});
