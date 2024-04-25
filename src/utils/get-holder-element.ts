type THolderElement = {
    element?: Element | null;
    scrollElement?: Element | null;
};

const getHolderElement = (
    elementClass?: string,
    scrollElementClass?: string
): THolderElement => {
    const result: THolderElement = {};

    if (elementClass) {
        result.element = document.querySelector(elementClass);
    }

    if (scrollElementClass) {
        result.scrollElement = document.querySelector(scrollElementClass);
    }

    return result;
};

export default getHolderElement;
