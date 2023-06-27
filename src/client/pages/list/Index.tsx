import React, { useEffect, useState } from 'react';
import { getInitialProps } from '@/client/api/Index';

function Index(props: any) {
  // console.log('props:', props);

  const initData = props.staticContext && props.staticContext.initialData || {}
  const initList = initData.data || null;

  const [list, setList] = useState(initList)

  useEffect(() => {
    if (!list) {
      const fetchData = async () => {
        const { error, data } = await getInitialProps();
        if (!error && data) {
          setList(data);
        }
      }
      fetchData();
    }
  }, []);

  return (
    <div>
      <h1>Page List</h1>
      <div className='list'>
        {
          list && list.map((item: any) => {
            return (
              <div key={item.title} className='item'>
                <span>{ item.title }</span> <br />
                <span>{ item.desc }</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

Index.getInitialProps = getInitialProps;

export default Index;