import './App.scss';
import Header from "./components/header/header.jsx";

function App() {
  const users = [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Doe',
    },
  ];
  console.log(users);
  return (
   <>
   <Header users = {users} />
   </>
  );
}

export default App;
