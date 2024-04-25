type TFilterItem = {
    column?: string;
    operator?: string;
    value?: any;
  };

  type TFilters = {
    [key: string]: any;
  };

  const filterArrToWhere = (filterArr: TFilterItem[], condition: string): TFilterItem => {
    const [whereItem, ...newArr] = filterArr;

    if (newArr.length) {
      return {
        ...whereItem,
        [condition]: [{ ...filterArrToWhere(newArr, condition) }],
      };
    }

    return whereItem;
  };

  export const gqlWhere = (filters: TFilters, operator: string = "IN", condition: string = "AND"): TFilterItem => {
    const filterArr: TFilterItem[] = [];

    for (const [key, value] of Object.entries(filters)) {
      if (value) {
        filterArr.push({
          column: key.toUpperCase(),
          operator,
          value,
        });
      }
    }

    return filterArrToWhere(filterArr.reverse(), condition);
  };

  export const gqlBuilderWhere = (filters: TFilters, condition: string = "AND"): TFilterItem => {
    const filterArr: TFilterItem[] = [];

    if (filters) {
      for (const [, item] of Object.entries(filters)) {
        if (Object.keys(item).length) {
          filterArr.push({ ...(item as TFilterItem) });
        }
      }
    }

    return filterArrToWhere(filterArr.reverse(), condition);
  };
