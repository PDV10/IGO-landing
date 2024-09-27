import Home from "../Home";
import Equipo from "../Equipo";
import Carrera from "../Carrera";
import OfertasEducativas from "../OfertasEducativas";
import Form from "../Form";

export default function Main() {
  return (
    <div className="bg-gray-400">
      <Home />
      <Carrera />
      <Equipo />
      <OfertasEducativas />
      <Form />
    </div>
  );
}
