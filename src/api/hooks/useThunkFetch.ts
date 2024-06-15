import { API_DOMAIN } from '../endpoints';

interface Api {
  url: string;
}

export const useThunkFetch = async <T>({ url }: Api) => {
  try {
    const res = await fetch(`${API_DOMAIN}/${url}`);

    if (!res.ok) {
      throw new Error(`Failed retrieve data from - ${API_DOMAIN}/${url}`);
    }

    const data: T = await res.json();

    return data;
  } catch {
    throw new Error(`Failed to fetch data from - ${API_DOMAIN}/${url}`);
  }
};
