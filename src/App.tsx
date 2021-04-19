
import {Header,Footer}  from './components'
import Routes from './routes';

interface Props {
  
}

const App = (props: Props) => {
  return (
    <>
    <Header/>
        <Routes />
    <Footer/>
    </>
  )
}

export default App
