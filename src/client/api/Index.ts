import { listData } from '@/data/index';

interface Resp {
  error: any,
  data: any
}

export function getInitialProps(): Promise<Resp> {
  return new Promise<Resp>(resolve => {
    setTimeout(() => {
      resolve({
        error: null,
        data: listData,
      });
    })
  })
}