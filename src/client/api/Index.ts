import {
  listData, listTDK, indexTDK, indexData,
} from '@/data/index';

interface Resp {
  error: any,
  data: any
}

export async function getInitialPropsForList(): Promise<Resp> {
  await new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, 200)
  })
  return {
    error: null,
    data: {
      pageData: listData,
      tdk: listTDK,
    }
  };
}

export async function getInitialPropsForIndex(): Promise<Resp> {
  await new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, 200)
  })
  return {
    error: null,
    data: {
      pageData: indexData,
      tdk: indexTDK,
    }
  };
}