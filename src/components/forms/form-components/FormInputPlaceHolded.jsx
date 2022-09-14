function FormInputPlaceHolded({tipo, id, contenido}) {
  return (
    <div className="relative inline">
    <input
      type={tipo}
      id={id}
      className="appearance-none p-2 bg-perano-50 rounded-sm outline-none text-[#444] border border-[#0da2ff] peer"
      placeholder=" "
    />
    <label
      for="userName"
      className="absolute -top-4 left-1 text-sm text-[#0da2ff] pointer-events-none transition duration-300 origin-[0] scale-75 peer-focus:-translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75"
    >
      {contenido}
    </label>
  </div>
  )
}

export default FormInputPlaceHolded