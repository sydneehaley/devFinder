import useSWR, { Key, Fetcher } from 'swr';

// const uid: Key = '<user_id>';
// const uid: Key = '/api/jobs';

type User = any;
const fetcher: Fetcher<User, any> = (url: any) => fetch(url).then((r) => r.json());

// export const { data } = useSWR(uid, fetcher);
// `data` will be `User | undefined`.

export default function useData(url: Key) {
  const { data, error } = useSWR(url, fetcher);

  return {
    jobs: data,
    isLoading: !error && !data,
    isError: error,
  };
}
