import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'


import Appfooter from './components/app-footer'
import AppHeader from './components/app-header'
import routes from './router'
const App = memo(() => {
  return (
    <div className='app'>
      <AppHeader></AppHeader>
      <div className="page">
        {useRoutes(routes)}
      </div>
      <Appfooter></Appfooter>

    </div>
  )
})

export default App