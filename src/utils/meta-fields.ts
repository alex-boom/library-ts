const parseFormMeta = (values: Record<string, string>) => {
    const metaValues: Array<Record<string, string | undefined>> = [];
    const fieldValues: Record<string, string> = {};
    let terms: string[] = [];

    for (const [key, meta_value] of Object.entries(values)) {
        const [meta_key, meta_type, action, meta_group] = key.split("-");

        if (action !== "unset" && ["field", "terms"].indexOf(meta_type) === -1) {
            metaValues.push({
                meta_key,
                meta_value,
                meta_group,
            });

            if (meta_type === undefined) {
                delete metaValues[metaValues.length - 1].meta_type;
            }

            if (meta_group === undefined) {
                delete metaValues[metaValues.length - 1].meta_group;
            }
        }

        if (meta_type === "field") {
            fieldValues[meta_key] = meta_value;
        }

        if (meta_type === "terms") {
            terms = [...terms, ...meta_value];
        }
    }

    return { metaValues, fieldValues, terms };
};

const parseFormArray = (values: Record<string, string>) => {
    const fields: Record<string, Record<string, string>> = {};
    const fieldValues: Record<string, string>[] = [];

    for (const [key, value] of Object.entries(values)) {
        const [fieldName, type, id] = key.split("-");

        if (type !== "unset" && id) {
            if (!fields[id]) {
                fields[id] = {};
            }

            fields[id][fieldName] = value;
        }
    }

    for (const [, value] of Object.entries(fields)) {
        fieldValues.push(value);
    }

    return fieldValues;
};

const metaFilterEmpty = (newMeta: Record<string, string | undefined>[], oldMeta: Record<string, string | undefined>[] = []) => {
    return newMeta.filter((metaItem) => {
        const search = oldMeta.some((item) => item.meta_key === metaItem.meta_key);

        if (metaItem.meta_value !== "" || search) {
            return metaItem;
        }

        return false;
    });
};

const metaToObj = (meta_fields: Record<string, Record<string, string>> = {}) => {
    const meta: Record<string, Record<string, string>> = {};

    if (meta_fields) {
        for (const [, field] of Object.entries(meta_fields)) {
            meta[field.meta_key] = field;
        }
    }

    return meta;
};

const getMetaGroup = (meta: Record<string, Record<string, string>>, groupName: string, empty = true) => {
    const newMeta = Object.values(meta).filter((item) => item.meta_group === groupName);

    if (!empty) {
        return metaFilterEmpty(newMeta);
    }

    return newMeta;
};

const getMetaFieldValues = (meta: Record<string, Record<string, string>>, fields: string[], empty = true) => {
    const metaValues: Record<string, string> = {};

    fields.forEach((item) => {
        if (getMetaFieldValue(meta, item) !== "" || empty) {
            metaValues[item] = getMetaFieldValue(meta, item);
        }
    });

    return metaValues;
};

const getMetaFieldBoolValue = (meta: Record<string, Record<string, string>>, fieldName: string, defaultVal = false) => {
    if (meta[fieldName] !== undefined) {
        if (meta[fieldName].meta_value === "true") {
            return true;
        }

        if (meta[fieldName].meta_value === "false") {
            return false;
        }

        return !!parseInt(meta[fieldName].meta_value);
    }

    return defaultVal;
};

const getMetaFieldValue = (meta: Record<string, Record<string, string>>, fieldName: string, defaultVal = "") => {
    return meta[fieldName]?.meta_value ?? defaultVal;
};

const getMetaField = (
    meta: Record<string, Record<string, string>>,
    fieldName: string,
    valueName = "meta_value",
    defaultVal = ""
) => {
    return meta[fieldName]?.[valueName] ?? defaultVal;
};

const metaFields = {
    parseForm: parseFormMeta,
    parseFormArray,
    normalize: metaToObj,
    getValue: getMetaFieldValue,
    getValues: getMetaFieldValues,
    getBoolValue: getMetaFieldBoolValue,
    getField: getMetaField,
    getGroup: getMetaGroup,
    filterEmpty: metaFilterEmpty,
};

export default metaFields;
