import Nome from "./components/Nome";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center container mx-auto bg-blue-500 p-5 border-2 rounded-2xl">
          <h1 className="text-amber-50">La mia prima APP React!!</h1>
          <Nome nome="Andrea"></Nome>
        </div>
      </div>
    </>
  );
}

export default App;
