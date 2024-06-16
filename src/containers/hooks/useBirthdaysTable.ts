import { useMemo, useState } from 'react';

import { OnThisDay } from '@/api/types/wikiBirthdayTypes';

import { getTableBodyData, getTableHeadersData } from '../utils/getTableContent';

interface Props {
  birthdays: OnThisDay[];
}

export const ITEMS_PER_PAGE = 10;

export const useBirthdaysTable = ({ birthdays }: Props) => {
  const [page, setPage] = useState(0);
  const tableHeadersData = useMemo(() => getTableHeadersData(birthdays), [birthdays]);
  const tableBodyData = useMemo(() => getTableBodyData(birthdays), [birthdays]);
  const paginatedTableBodyData = useMemo(() => {
    const start = page * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return tableBodyData.slice(start, end);
  }, [tableBodyData, page]);
  const emptyRowsFiller = useMemo(() => {
    const rowsInCurrentPage = paginatedTableBodyData.length;
    return Math.max(0, ITEMS_PER_PAGE - rowsInCurrentPage);
  }, [paginatedTableBodyData.length]);

  const previousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return {
    tableHeadersData,
    paginatedTableBodyData,
    page,
    emptyRowsFiller,
    previousPage,
    nextPage,
  };
};
