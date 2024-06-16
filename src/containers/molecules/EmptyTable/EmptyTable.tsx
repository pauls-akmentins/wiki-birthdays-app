import { EmptyRowsFiller } from '@/containers/atoms/EmptyRowsFiller';
import { EmptyTableOverlay } from '@/containers/atoms/EmptyTableOverlay';
import { ITEMS_PER_PAGE } from '@/containers/hooks/useBirthdaysTable';
import { TableFooter } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Flex } from '@/components/flex/Flex';
import { Loader } from '@/components/loader/Loader';
import { classNames } from '@/components/utils/classNames';

import { BirthdayFetchControls } from '../BirthdayFetchControls/BirthdayFetchControls';
import styles from '../BirthdayTable/BirthdaysTable.module.css';

interface Props {
  overlayText?: string;
  isError?: boolean;
}

export const EmptyTable = ({ overlayText, isError }: Props) => {
  return (
    <Flex
      className={classNames([styles['table-container']])}
      centerHorizontally
      centerVertically
      directionColumn
    >
      <TableContainer component={Paper} className={classNames([styles['table-container__table']])}>
        {overlayText && overlayText.length > 0 ? (
          <EmptyTableOverlay overlayText={overlayText} isError={isError} />
        ) : (
          <Flex
            className={classNames([styles['table-container__loader']])}
            centerHorizontally
            centerVertically
          >
            <Loader />
          </Flex>
        )}
        <Table>
          <TableHead>
            <TableRow className={classNames([styles['table-container__header-row']])}>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <EmptyRowsFiller emptyRowsFiller={Math.max(0, ITEMS_PER_PAGE)} />
          </TableBody>
          <TableFooter>
            <TableRow className={classNames([styles['table-container__footer-row']])}>
              <TableCell />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <BirthdayFetchControls />
    </Flex>
  );
};
