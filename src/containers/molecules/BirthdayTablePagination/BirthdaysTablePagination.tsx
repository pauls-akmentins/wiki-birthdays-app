import { ITEMS_PER_PAGE } from '@/containers/hooks/useBirthdaysTable';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import IconButton from '@mui/material/IconButton';

interface Props {
  page: number;
  totalRows: number;
  previousPage: () => void;
  nextPage: () => void;
}

export const BirthdaysTablePagination = ({ page, totalRows, previousPage, nextPage }: Props) => {
  return (
    <>
      <IconButton onClick={previousPage} disabled={page === 0}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton onClick={nextPage} disabled={page >= Math.ceil(totalRows / ITEMS_PER_PAGE) - 1}>
        <KeyboardArrowRightIcon />
      </IconButton>
    </>
  );
};
