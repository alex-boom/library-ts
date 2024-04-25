const fileNameFromUrl = (url: string): string => {
    const { pathname } = new URL(url);
    return pathname.substring(pathname.lastIndexOf("/") + 1);
};

export default fileNameFromUrl;
