import ListGroup from "./assets/components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

   const hundleSelectItem = (item:string)=> {
      console.log(item);
   }

  return (
    <div>
      <ListGroup items = {items} heading = 'Cities' onSelectItem={hundleSelectItem} />
    </div>
  );
}

export default App;
