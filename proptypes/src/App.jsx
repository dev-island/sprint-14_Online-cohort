import './App.css'
import Header from './Header'

function App() {
  const title = 2;
  const books = [
    {
      id: 1,
      title: 'The Lord of the Rings',
    },
    {
      id: 2,
      title: 'The Lord of the Rings',
    },
    {
      id: 3,
      title: 'The Lord of the Rings',
    }
  ]
  return (
    <>
      <Header title={title} books={books} />
    </>
  )
}

export default App
