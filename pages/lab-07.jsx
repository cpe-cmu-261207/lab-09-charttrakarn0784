import Navbar from "../components/Navbar";
import Todolist from "../components/Todolist";

export default function Lab07() {
  return (
    <div className="h-flex m-3 bg-white rounded-1">
      <Navbar />
      <Todolist />
    </div>
  );
}
