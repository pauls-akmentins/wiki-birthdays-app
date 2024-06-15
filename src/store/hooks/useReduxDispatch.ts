import { useDispatch } from 'react-redux';

import { AppDispatch } from '..';

export const useReduxDispatch = () => useDispatch<AppDispatch>();
