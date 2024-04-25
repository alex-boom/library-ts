const Components = (cssVar: Record<string, string>) =>
{

    return {

        "Input": {
            "borderRadius": 4,
            "lineHeight": 1.5,
            "lineHeightLG": 2,
            "paddingLG": 20,
            "paddingSM": 11,
            "controlPaddingHorizontal": 10,
            "controlHeight": 34,
            "colorBgContainer": cssVar[ '--input_light_colorBgContainer' ],
            "colorBgContainerDisabled": cssVar[ '--input_light_colorBgContainerDisabled' ],
            "colorTextDisabled": cssVar[ '--input_light_colorTextDisabled' ],
            "colorBorder": cssVar[ '--input_light_colorBorder' ],
            "colorError": cssVar[ '--input_light_colorError' ],
            "colorPrimary": cssVar[ '--input_light_colorPrimary' ],
            "colorPrimaryActive": cssVar[ '--input_light_colorPrimaryActive' ],
            "colorText": cssVar[ '--input_light_colorText' ],
            "colorTextPlaceholder": cssVar[ '--input_light_colorTextPlaceholder' ],
        },
        "InputNumber": {
            "borderRadius": 4,
            "lineHeight": 1.5,
            "lineHeightLG": 2,
            "paddingLG": 20,
            "paddingSM": 11,
            "controlPaddingHorizontal": 10,
            "controlHeight": 34,
            "colorBgContainer": cssVar[ '--input_light_colorBgContainer' ],
            "colorBgContainerDisabled": cssVar[ '--input_light_colorBgContainerDisabled' ],
            "colorTextDisabled": cssVar[ '--input_light_colorTextDisabled' ],
            "colorBorder": cssVar[ '--input_light_colorBorder' ],
            "colorError": cssVar[ '--input_light_colorError' ],
            "colorPrimary": cssVar[ '--input_light_colorPrimary' ],
            "colorPrimaryActive": cssVar[ '--input_light_colorPrimaryActive' ],
            "colorText": cssVar[ '--input_light_colorText' ],
            "colorTextPlaceholder": cssVar[ '--input_light_colorTextPlaceholder' ],
        },
        "InputTextArea": {
            "lineHeight": 1.5,
        },
        "Select": {
            "controlHeight": 34,
            "colorBgContainer": cssVar[ '--select_light_colorBgContainer' ],
            "colorBgContainerDisabled": cssVar[ '--select_light_colorBgContainerDisabled' ],
            "colorText": cssVar[ '--select_light_colorText' ],
            "colorTextDescription": cssVar[ '--select_light_colorTextDescription' ],
            "colorTextPlaceholder": cssVar[ '--select_light_colorTextPlaceholder' ],
            "controlItemBgActive": cssVar[ '--select_light_controlItemBgActive' ],
            "colorBgElevated": cssVar[ '--select_light_colorBgElevated' ],
            "colorBorder": cssVar[ '--select_light_colorBorder' ],
            "colorTextDisabled": cssVar[ '--select_light_colorTextDisabled' ],
            "colorTextQuaternary": cssVar[ '--select_light_colorTextQuaternary' ],
            "multipleItemBg": cssVar[ '--select_light_colorTextPlaceholder' ],
            "fontWeightStrong": 600,
        },
        "Table": {
            "colorBorderSecondary": cssVar[ ' --table_light_colorBgContainer' ],
            "colorBgContainer": cssVar[ ' --table_light_colorBorderSecondary' ],
        }
    };
};


export default Components;