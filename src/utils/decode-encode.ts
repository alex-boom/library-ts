// Define a type for the function that encodes numbers to hexadecimal strings
type THexEncode = (num: number) => string;

const hexEncode: THexEncode = (num) => {
    return num.toString(16);
};

// Define a type for the function that decodes hexadecimal strings to numbers
type HexDecode = (str: string) => number;

const hexDecode: HexDecode = (str) => {
    return parseInt(str, 16);
};

// Define a type for the function that encodes strings to base64 strings
type Base64Encode = (str: string) => string;

const base64Encode: Base64Encode = (str) => {
    return btoa(
        encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
            return String.fromCharCode(parseInt(p1, 16));
        })
    );
};

// Define a type for the function that decodes base64 strings to strings
type Base64Decode = (str: string) => string;

const base64Decode: Base64Decode = (str) => {
    return decodeURIComponent(
        atob(str)
            .split("")
            .map((c) => {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );
};

// Define a type for the function that encodes an array of numbers to a slug string
type EncodeToSlug = (numArr: number[]) => string;

const encodeToSlug: EncodeToSlug = (numArr) => {
    const hexNumArr = numArr.map((num) => hexEncode(num));
    const slugStr = hexNumArr.join("_");
    return base64Encode(slugStr);
};

// Define a type for the function that decodes a slug string to an array of numbers
type DecodeFromSlug = (str: string) => number[];

const decodeFromSlug: DecodeFromSlug = (str) => {
    const slugStr = base64Decode(str);
    const hexNumArr = slugStr.split("_");
    return hexNumArr.map((num) => hexDecode(num));
};

export const encode = {
    hex: hexEncode,
    base64: base64Encode,
    toSlug: encodeToSlug,
};

export const decode = {
    hex: hexDecode,
    base64: base64Decode,
    fromSlug: decodeFromSlug,
};
