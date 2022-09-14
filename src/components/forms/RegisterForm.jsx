import FormBtn from "./form-components/FormBtn";
import FormInputPlaceHolded from "./form-components/FormInputPlaceHolded";
import FormLink from "./form-components/FormLink";
import FormSkeleton from "./form-components/FormSkeleton";

function RegisterForm() {
  return (
    <FormSkeleton accion="/register">
      <div className="flex-auto flex flex-col justify-evenly">
        <FormInputPlaceHolded
          tipo="text"
          id="UserName"
          contenido="Nombre de usuario"
        />
        <FormInputPlaceHolded
          tipo="email"
          id="UserEmail"
          contenido="Correo Electronico"
        />
      </div>
      <div className="flex-auto w-full flex items-center justify-evenly">
        <FormBtn texto="Registrarse" />
      </div>
      <div className="flex justify-evenly w-full">
        <FormLink donde="/login" texto="Ya se encuentra registrado?" />
      </div>
    </FormSkeleton>
  );
}

export default RegisterForm;
