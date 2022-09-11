import credentials from "./credentials.json";

function Localization() {
  return (
      <iframe
        className="h-full w-full"
        frameBorder="0"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${credentials.mapsKey}&&q=Centro+Comercial+Mayorca+Mega+Plaza`}
        allowFullScreen
      ></iframe>
  );
}

export default Localization;

//<Localization googleMapUrl={´http://maps.google.com/maps/api/js?v3.exp${credentials.mapsKey}´} containerElement: <div className="h-20">/>
