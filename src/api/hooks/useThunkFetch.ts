import { API_DOMAIN } from '../endpoints';

interface Api {
  url: string;
  apiDebounceInMs?: number;
}

export const useThunkFetch = async <T>({ url, apiDebounceInMs }: Api): Promise<T> => {
  try {
    const res = await fetch(`${API_DOMAIN}/${url}`);

    if (!res.ok) {
      throw new Error(`Failed retrieve data from - ${API_DOMAIN}/${url}`);
    }

    const data: T = await res.json();

    if (apiDebounceInMs) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, apiDebounceInMs);
      });
    } else {
      return data;
    }
  } catch {
    if (apiDebounceInMs) {
      return new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error(`Failed to fetch data from - ${API_DOMAIN}/${url}`));
        }, apiDebounceInMs);
      });
    } else {
      throw new Error(`Failed to fetch data from - ${API_DOMAIN}/${url}`);
    }
  }
};
