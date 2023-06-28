import React, { useCallback, useEffect, useState } from 'react';
import { getInitialPropsForIndex } from '@/client/api/Index';

function Index(props: any) {
  if (props.tdk) {
    document.title = props.tdk.title;
  }

  const initPageData = props.initialData || null
  const [pageData, setPageData] = useState(initPageData);
  useEffect(() => {
    if (!pageData) {
      const fetchData = async () => {
        const { error, data } = await getInitialPropsForIndex();
        if (!error && data) {
          setPageData(data.pageData);
          document.title = data.tdk.title;
        }
      }
      fetchData();
    }
  }, []);
  const handleClick = useCallback(() => {
    alert('watch!!')
  }, []);
  return (
    <div>
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
