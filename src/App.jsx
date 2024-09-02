import { useState } from 'react'
import Layout from './components/Layout'
import './App.css'

function App() {

  return (
    
    <>
     <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={StockPrices} />
          {/* <Route path="/portfolio" component={Portfolio} /> */}
          {/* <Route path="/advice" component={Advice} />
          <Route path="/chat" component={Chat} /> */}
        </Switch>
      </Layout>
    </Router>
    </>
  )
}

export default App
