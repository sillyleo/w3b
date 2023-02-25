import {createStitches, defaultThemeMap} from "@stitches/react";
import figmaTokens from "./theme.json";
import type * as Stitches from "@stitches/react";

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function flattenKeys(
    obj: any,
    sep = "",
    parentKey = ""
): Record<string, string> {
    return Object.keys(obj).reduce((acc, key) => {
        const value = obj[key];
        const newKey = parentKey ? parentKey + sep + capitalize(key) : key;
        if (typeof value === "object") {
            Object.assign(acc, flattenKeys(value, sep, newKey));
        } else {
            acc[newKey] = value;
        }
        return acc;
    }, {});
}

// process colors from tomato: {1: color} to tomato1: color
const lightColors = flattenKeys(figmaTokens.light);
const brandColors = flattenKeys(figmaTokens.brand);
const supportColors = flattenKeys(figmaTokens.support);
const darkColors = flattenKeys(figmaTokens.dark);


// bgToneScales
const bgToneScales = {
    bgTone1: (value: keyof Colors) => ({
        backgroundColor: `$${value}1`,
    }),
    bgTone2: (value: keyof Colors) => ({
        backgroundColor: `$${value}2`,
    }),
    bgTone3: (value: keyof Colors) => ({
        backgroundColor: `$${value}3`,
    }),
    bgTone4: (value: keyof Colors) => ({
        backgroundColor: `$${value}4`,
    }),
    bgTone5: (value: keyof Colors) => ({
        backgroundColor: `$${value}5`,
    }),
    bgTone6: (value: keyof Colors) => ({
        backgroundColor: `$${value}6`,
    }),
    bgTone7: (value: keyof Colors) => ({
        backgroundColor: `$${value}7`,
    }),
    bgTone8: (value: keyof Colors) => ({
        backgroundColor: `$${value}8`,
    }),
    bgTone9: (value: keyof Colors) => ({
        backgroundColor: `$${value}9`,
    }),
    bgTone10: (value: keyof Colors) => ({
        backgroundColor: `$${value}10`,
    }),
    bgTone11: (value: keyof Colors) => ({
        backgroundColor: `$${value}11`,
    }),
    bgTone12: (value: keyof Colors) => ({
        backgroundColor: `$${value}12`,
    }),
};
// textToneScales
const textToneScales = {
    textTone1: (value: keyof Colors) => ({
        color: `$${value}1`,
    }),
    textTone2: (value: keyof Colors) => ({
        color: `$${value}2`,
    }),
    textTone3: (value: keyof Colors) => ({
        color: `$${value}3`,
    }),
    textTone4: (value: keyof Colors) => ({
        color: `$${value}4`,
    }),
    textTone5: (value: keyof Colors) => ({
        color: `$${value}5`,
    }),
    textTone6: (value: keyof Colors) => ({
        color: `$${value}6`,
    }),
    textTone7: (value: keyof Colors) => ({
        color: `$${value}7`,
    }),
    textTone8: (value: keyof Colors) => ({
        color: `$${value}8`,
    }),
    textTone9: (value: keyof Colors) => ({
        color: `$${value}9`,
    }),
    textTone10: (value: keyof Colors) => ({
        color: `$${value}10`,
    }),
    textTone11: (value: keyof Colors) => ({
        color: `$${value}11`,
    }),
    textTone12: (value: keyof Colors) => ({
        color: `$${value}12`,
    }),
};
// borderToneScales
const borderToneScales = {
    borderTone1: (value: keyof Colors) => ({
        borderColor: `$${value}1`,
    }),
    borderTone2: (value: keyof Colors) => ({
        borderColor: `$${value}2`,
    }),
    borderTone3: (value: keyof Colors) => ({
        borderColor: `$${value}3`,
    }),
    borderTone4: (value: keyof Colors) => ({
        borderColor: `$${value}4`,
    }),
    borderTone5: (value: keyof Colors) => ({
        borderColor: `$${value}5`,
    }),
    borderTone6: (value: keyof Colors) => ({
        borderColor: `$${value}6`,
    }),
    borderTone7: (value: keyof Colors) => ({
        borderColor: `$${value}7`,
    }),
    borderTone8: (value: keyof Colors) => ({
        borderColor: `$${value}8`,
    }),
    borderTone9: (value: keyof Colors) => ({
        borderColor: `$${value}9`,
    }),
    borderTone10: (value: keyof Colors) => ({
        borderColor: `$${value}10`,
    }),
    borderTone11: (value: keyof Colors) => ({
        borderColor: `$${value}11`,
    }),
    borderTone12: (value: keyof Colors) => ({
        borderColor: `$${value}12`,
    }),
};

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            ...lightColors,
            ...brandColors,
            ...supportColors,
        },
        space: {
            "100%": "100%",
            ...figmaTokens.spacing,
        },
        fontSizes: {
            ...figmaTokens.fontSizes,
        },
        fonts: {
            heading: `${figmaTokens.fontFamilies.heading},'SkModernistBold',SkModernistBold,'Sk-Modernist-Bold',sans-serif`,
            branding: `${figmaTokens.fontFamilies.heading},'SkModernistRegular',SkModernistRegular,'Sk-Modernist-Regular',sans-serif`,
            body: `'Inter Tight',${figmaTokens.fontFamilies.body}, sans-serif`,
        },
        fontWeights: {...figmaTokens.fontWeights},
        lineHeights: {
            ...figmaTokens.lineHeights,
        },
        letterSpacings: {
            ...figmaTokens.letterSpacing,
        },
        sizes: {
            ...figmaTokens.screens,
        },
        borderWidths: {
            ...figmaTokens.borderWidth,
        },
        borderStyles: {
            solid: "solid",
            dashed: "dashed",
        },
        radii: {
            ...figmaTokens.borderRadius,
        },
        zIndices: {},
        transitions: {
            fast: "all 0.1s",
            slow: "all 0.4s ease-in-out",
        },
    },

    media: {
        sm: "(min-width: 640px)",
        md: "(min-width: 768px)",
        lg: "(min-width: 1024px)",
        xl: "(min-width: 1280px)",
        "2xl": "(min-width: 1536px)",
    },
    utils: {
        // Abbreviated margin properties
        ...bgToneScales,
        ...textToneScales,
        ...borderToneScales,
        m: (value: any) => ({
            margin: value,
        }),
        mr: (value: any) => ({
            marginRight: value,
        }),
        mb: (value: any) => ({
            marginBottom: value,
        }),
        ml: (value: any) => ({
            marginLeft: value,
        }),
        mx: (value: any) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: any) => ({
            marginTop: value,
            marginBottom: value,
        }),

        // Abbreviated padding properties
        p: (value: any) => ({
            padding: value,
        }),
        pt: (value: any) => ({
            paddingTop: value,
        }),
        pr: (value: any) => ({
            paddingRight: value,
        }),
        pb: (value: any) => ({
            paddingBottom: value,
        }),
        pl: (value: any) => ({
            paddingLeft: value,
        }),
        px: (value: any) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: any) => ({
            paddingTop: value,
            paddingBottom: value,
        }),

        // A property for applying flex together
        flex: (value: any) => ({
            display: "flex",
            flex: value,
        }),

        // A property for applying grid together
        grid: (value: any) => ({
            display: "grid",
            grid: value,
        }),
        // A property for applying width/height together
        boxSize: (value: any) => ({
            width: value,
            height: value,
        }),
        // An abbreviated property for border-radius
        br: (value: any) => ({
            borderRadius: value,
        }),
    },
    themeMap: {
        ...defaultThemeMap,
    },
});

export type CSS = Stitches.CSS<typeof config>;

// only override some colors
export const darkTheme = createTheme({
    colors: {
        ...darkColors,
    },
});

export const globalStyles = globalCss({
    "*": {margin: 0, boxSizing: "border-box"},
});