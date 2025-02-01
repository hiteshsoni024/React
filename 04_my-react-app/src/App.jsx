//props: read-only properties that are shared between components.
//       a parent data can send data to a child component
import Student from "./Student.jsx";
function App() {
  return (
    <>
    <Student name="Hitesh Soni" age={21} isStudent={true}/>
    <Student name="Rahul Soni" age={10} isStudent={false}/>
    <Student name="Anuj Soni" age={18} isStudent={false}/>
    <Student/>
    <Student/>
    </>
  );
}

export default App
