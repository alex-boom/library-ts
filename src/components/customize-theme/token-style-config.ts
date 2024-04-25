const Token = (cssVar: Record<string, string>) => ({

    dark: {
        "colorPrimary": cssVar[ '--primary-color' ],
        "fontFamily": cssVar[ '--token_font-family' ],
        "colorText": cssVar[ '--token-color-text' ],
        "colorBgSpotlight": cssVar[ '--token_colorBgSpotlight' ],
        "borderRadius": 4,
    }
});


export default Token;
