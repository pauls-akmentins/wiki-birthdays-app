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

import { useBirthdaysTable } from '../hooks/useBirthdaysTable';
import styles from './BirthdaysTable.module.css';

interface Props {
  birthdays: OnThisDay[];
}

export const BirthdaysTable = ({ birthdays }: Props) => {
  const { tableHeadersData } = useBirthdaysTable({ birthdays });

  return (
    <Flex centerHorizontally centerVertically>
      <TableContainer component={Paper} className={classNames([styles['table-container']])}>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeadersData.map((header) => (
                <TableCell align="center" key={header}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </Flex>
  );
};
