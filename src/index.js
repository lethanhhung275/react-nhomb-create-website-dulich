import React from 'react'
import styles from './styles.module.css'
import Home from './components/Home/Home'
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import DetailPage from './components/Detail/Detail';
// export const ExampleComponent = ({ text }) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }
function About() {
  return <div>About</div>
}
export const ExampleComponent = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/detail' component={DetailPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
