import { EmptyRowsFiller } from '@/containers/atoms/EmptyRowsFiller';
import { TableFooter } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { OnThisDay } from '@/api/types/wikiBirthdayTypes';
import { Flex } from '@/components/flex/Flex';
import { classNames } from '@/components/utils/classNames';

import { useBirthdaysTable } from '../../hooks/useBirthdaysTable';
import { BirthdayFetchControls } from '../BirthdayFetchControls/BirthdayFetchControls';
import { BirthdaysTablePagination } from '../BirthdayTablePagination/BirthdaysTablePagination';
import styles from './BirthdaysTable.module.css';

interface Props {
  birthdays: OnThisDay[];
}

export const BirthdaysTable = ({ birthdays }: Props) => {
  const {
    tableHeadersData,
    paginatedTableBodyData,
    page,
    previousPage,
    nextPage,
    emptyRowsFiller,
  } = useBirthdaysTable({
    birthdays,
  });

  return (
    <Flex
      className={classNames([styles['table-container']])}
      centerHorizontally
      centerVertically
      directionColumn
    >
      <TableContainer component={Paper} className={classNames([styles['table-container__table']])}>
        <Table>
          <TableHead>
            <TableRow className={classNames([styles['table-container__header-row']])}>
              {tableHeadersData?.map((header, index) => (
                <TableCell
                  width={300}
                  className={classNames([styles['table-container__header-cell']], {
                    [styles['table-container__last-cell']]: index === tableHeadersData.length - 1,
                  })}
                  key={`${header}-${index}`}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedTableBodyData.map((row, index) => (
              <TableRow key={`${row}-${index}`}>
                {Object.values(row).map((cellData, cellIndex) => (
                  <TableCell key={`${cellData}-${cellIndex}`}>{cellData}</TableCell>
                ))}
              </TableRow>
            ))}
            <EmptyRowsFiller emptyRowsFiller={emptyRowsFiller} />
          </TableBody>
          <TableFooter>
            <TableRow className={classNames([styles['table-container__footer-row']])}>
              <TableCell colSpan={tableHeadersData?.length} padding="none">
                <BirthdaysTablePagination
                  page={page}
                  totalRows={birthdays.length}
                  previousPage={previousPage}
                  nextPage={nextPage}
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <BirthdayFetchControls />
    </Flex>
  );
};
