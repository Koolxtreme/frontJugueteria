import Icon from "./icon/Icon";

function SecondHeader({ sicon = false }) {
  if (sicon) {
    return (
      <div className="m-6 flex justify-between">
        <Icon />
        <h1>Carrito | Busqueda</h1>
      </div>
    );
  }
  return (
    <div className="m-6">
      <Icon />
    </div>
  );
}

export default SecondHeader;
