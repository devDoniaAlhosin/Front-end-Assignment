
import './App.css'
import Header from './components/Header'
import PostList from './components/PostList'

function App() {


  return (
    <>
    <div className="app--container">
      <Header/>
      <div className="card--container">
        <PostList />
      </div>
    </div>
    </>
  )
}

export default App
