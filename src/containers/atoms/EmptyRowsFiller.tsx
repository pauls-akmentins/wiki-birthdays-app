import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

interface Props {
  emptyRowsFiller: number;
}

export const EmptyRowsFiller = ({ emptyRowsFiller }: Props) =>
  emptyRowsFiller > 0 ? (
    <TableRow style={{ height: 53 * emptyRowsFiller }}>
      <TableCell />
    </TableRow>
  ) : null;
