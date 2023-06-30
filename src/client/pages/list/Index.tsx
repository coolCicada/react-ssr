import React, { useEffect, useState } from 'react';
import { getInitialPropsForList } from '@/client/api/Index';
import { Helmet } from 'react-helmet';

function Index(props: any) {
  const [tdk, setTdk] = useState(props.tdk);
  const [list, setList] = useState(props.initData)
  
  useEffect(() => {
    if (!list) {
      const fetchData = async () => {
        const { error, data } = await getInitialPropsForList();
        if (!error && data) {
          setList(data.pageData);
          setTdk(data.tdk);
        }
      }
      fetchData();
    }
  }, []);

  return (
    <div>
      {
        tdk && (<Helmet>
          <title>{tdk.title}</title>
          <meta name="description" content={tdk.description}/>
          <meta name="keywords" content={tdk.keywords}/>
        </Helmet>)
      }
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