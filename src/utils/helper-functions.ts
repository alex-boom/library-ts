import dayjs from "dayjs";

export function getLabel(
    arr1: string | string[],
    arr2: { value: string }[]
): { value: string }[] {
    const result: { value: string }[] = [];
    const arr1Array: string[] = Array.isArray(arr1) ? arr1 : [arr1];

    arr1Array.forEach((item) => {
        const match = arr2?.find((item2) => item === item2.value);
        if (match) {
            result.push(match);
        }
    });

    return result;
}

export function countFilterList(
    filterList: Record<string, { column: string }>
): number {
    let count = 0;
    for (const key in filterList) {
        if (filterList[key].column) {
            count++;
        }
    }
    return count;
}

export function charSplitToUpper(
    str: string,
    separator = "-",
    capitalize = true
): string {
    return str
        ?.split(separator)
        .join(" ")
        .replace(/\w/, (firstLetter) =>
            !capitalize ? firstLetter : firstLetter.toUpperCase()
        );
}

export function normalizeCursorToPage<T>(data: {
    pageInfo: {
        count: number;
        currentPage: number;
        startCursor: string;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        endCursor: string;
        lastPage: number;
        total: number;
    };
    edges: { node: T }[];
}): {
    paginatorInfo: {
        count: number;
        currentPage: number;
        firstItem: string;
        hasMorePages: boolean;
        hasPreviousPages: boolean;
        lastItem: string;
        lastPage: number;
        total: number;
    };
    data: T[];
} {
    return {
        paginatorInfo: {
            count: data.pageInfo.count,
            currentPage: data.pageInfo.currentPage,
            firstItem: data.pageInfo.startCursor,
            hasMorePages: data.pageInfo.hasNextPage,
            hasPreviousPages: data.pageInfo.hasPreviousPage,
            lastItem: data.pageInfo.endCursor,
            lastPage: data.pageInfo.lastPage,
            total: data.pageInfo.total,
        },
        data: data.edges.map((edge) => edge.node),
    };
}

export function timeFormat(time: string, format = "DD.MM.YYYY HH:mm"): string {
    return dayjs(time).format(format);
}

const helperFunc = {
    getLabel,
    countFilterList,
    charSplitToUpper,
    normalizeCursorToPage,
    timeFormat,
};

export default helperFunc;
