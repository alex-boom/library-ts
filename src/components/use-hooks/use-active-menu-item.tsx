import { useEffect } from "react";
import { useVarParam } from "components/use-hooks";

const useActiveMenuItem = (
    currentItem: string[] = [],
    parentItem: string[] = []
) => {
    const appParam = useVarParam("guest");

    useEffect(() => {
        appParam.set({
            activeMenu: {
                selectedKeys: [...currentItem],
                openKeys: [...parentItem],
            },
        });
    }, [appParam, currentItem, parentItem]);

    return null;
};

export default useActiveMenuItem;
