import React, { useCallback, useEffect, useState } from 'react';
import { getInitialPropsForIndex } from '@/client/api/Index';
import { Helmet } from 'react-helmet';
import './index.less';

function Index(props: any) {
  const [tdk, setTdk] = useState(props.tdk);
  const [pageData, setPageData] = useState(props.initPageData);
  useEffect(() => {
    if (!pageData) {
      const fetchData = async () => {
        const { error, data } = await getInitialPropsForIndex();
        if (!error && data) {
          setPageData(data.pageData);
          setTdk(data.tdk);
        }
      }
      fetchData();
    }
  }, []);
  const handleClick = useCallback(() => {
    alert('watch!!')
  }, []);
  return (
    <div className="page-index-box">
      {
        tdk && (<Helmet>
          <title>{tdk.title}</title>
          <meta name="description" content={tdk.description}/>
          <meta name="keywords" content={tdk.keywords}/>
        </Helmet>)
      }
      <h1>Page Index</h1>
      <button onClick={handleClick}>btn</button>
      <div>
        {pageData && pageData.content}
      </div>
    </div>
  )
}

Index.getInitialProps = getInitialPropsForIndex;

export default Index;
