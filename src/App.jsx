import { Context } from './index'

import AppRouter from './app/AppRouter'
import Sidebar from './app/components/sidebar/sidebar'
//import NavBar from './app/components/navbar/NavBar'

import { check } from './common/http/master-api'

import { BrowserRouter } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { BeatLoader } from 'react-spinners'
//import Sidebar from './app/components/sidebar/sidebar'
//import NavBar from './app/components/navbar/NavBar'


const App = observer(() => {
  const { master } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check(master).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <BeatLoader
        style={{ position: 'absolute', top: '50%', left: '50%' }}
        color="#6200EE"
      />
    )
  }

  return (
    <BrowserRouter>
    <div className='dis-flex'>
      {master.isAuth ? <Sidebar/>: <></>}
      <AppRouter />
    </div>   
    </BrowserRouter>
  )
})

export default App
