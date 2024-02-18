import './App.css'
import { useState } from 'react'

import List from './components/List'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Input from './components/Input'


function App() {


  return (
    <div className='main m-auto max-w-4xl my-4'>
      <Provider store={store}>
      <Input />
      <List />
      </Provider>
    </div>
    
    
  )
}

export default App
