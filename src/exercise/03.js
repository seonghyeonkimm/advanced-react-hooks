// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext();

const CountProvider = ({ children }) => {
  const state = React.useState(0);

  return (
    <CountContext.Provider value={state}>
    {children}
    </CountContext.Provider>
  )
}

const useCount = () => {
  const ctx = React.useContext(CountContext);
  if (!ctx) throw new Error('CountProvider should be wrapped on the parent component');

  return ctx;
}

function CountDisplay() {
  const [count] = useCount();

  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const [, setCount] = useCount();
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
