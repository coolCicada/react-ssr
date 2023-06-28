import React, { useEffect, useState } from 'react';
import { getInitialPropsForList } from '@/client/api/Index';

function Index(props: any) {
  if (props.tdk) {
    document.title = props.tdk.title;
  }

  const initData = props.initialData || null
  const [list, setList] = useState(initData)
  
  useEffect(() => {
    if (!list) {
      const fetchData = async () => {
        const { error, data } = await getInitialPropsForList();
        if (!error && data) {
          setList(data.pageData);
          document.title = data.tdk.title;
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

Index.getInitialProps = getInitialPropsForList;

export default Index;