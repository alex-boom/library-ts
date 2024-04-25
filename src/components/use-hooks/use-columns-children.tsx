import { useEffect, useState } from "react";

interface IColumnProps {
  position: string;
  children: React.ReactNode;
}

interface IColumns {
  [key: string]: React.ReactNode;
}

const useColumnsChildren = (items: { props: IColumnProps }[]) => {
  const [columns, setColumns] = useState<IColumns | null>(null);

  useEffect(() => {
    if (items !== undefined) {
      const newColumns: IColumns = {};
      items.forEach(({ props }) => {
        newColumns[`${props.position}Column`] = props.children;
      });
      setColumns(newColumns);
    }
  }, [items]);

  return { ...columns };
};

export default useColumnsChildren;
