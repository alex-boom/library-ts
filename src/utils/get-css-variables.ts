const getCSSVariables = (): Record<string, string> => {
    const styleElements = document.getElementsByTagName(
        "style"
    ) as HTMLCollectionOf<HTMLStyleElement>;
    const linkElements = document.querySelectorAll(
        'link[rel="stylesheet"]'
    ) as NodeListOf<HTMLLinkElement>;
    const cssVariables: Record<string, string> = {};

    // Retrieve CSS variables from <style> elements
    for (const styleElement of Array.from(styleElements)) {
        const styleContent = styleElement.textContent || styleElement.innerText;
        const regex = /(--[\w-]+)\s*:\s*([^;}]+)/g;
        let match;
        while ((match = regex.exec(styleContent)) !== null) {
            const variableName = match[1];
            const value = match[2].trim();
            cssVariables[variableName] = value;
        }
    }

    // Retrieve CSS variables from <link> elements
    linkElements.forEach((linkElement) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", linkElement.getAttribute("href") || "", false); // исправление ошибки 2339
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const styleContent = xhr.responseText;
                const regex = /(--[\w-]+)\s*:\s*([^;}]+)/g;
                let match;
                while ((match = regex.exec(styleContent)) !== null) {
                    const variableName = match[1];
                    const value = match[2].trim();
                    cssVariables[variableName] = value;
                }
            }
        };
        xhr.send();
    });

    // Retrieve inline CSS variables from HTML elements
    const elementsWithStyles = document.querySelectorAll("[style]");
    for (const element of Array.from(elementsWithStyles)) {
        const inlineStyles = element.getAttribute("style") || "";
        const regex = /(--[\w-]+)\s*:\s*([^;}]+)/g;
        let match;
        while ((match = regex.exec(inlineStyles)) !== null) {
            const variableName = match[1];
            const value = match[2].trim();
            cssVariables[variableName] = value;
        }
    }

    return cssVariables;
};

export default getCSSVariables;
