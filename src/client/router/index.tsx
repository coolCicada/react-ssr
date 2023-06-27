import Layout from '../app/Layout';
import React  from 'react';
import { Route, Switch } from 'react-router-dom';

//服务端也会用到所以通过参数的方式将配置传递进来
function App({ routeList }: { routeList: any }) {
    return (
      <Layout>
          <Switch>
              {
                  routeList.map((item: any) => {
                        return item.initialData
                               ? <Route key={item.path} exact={item.exact} path={item.path}  render={(props)=>{
                                    props.staticContext = { initialData : item.initialData };
                                    return <item.component {...props}></item.component>
                                }}></Route>
                               : <Route key={item.path} {...item}></Route>
                  })
              }
          </Switch>
      </Layout>
    );
}

export default App;

