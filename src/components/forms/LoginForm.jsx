import FormBtn from "./form-components/FormBtn";
import FormInputPlaceHolded from "./form-components/FormInputPlaceHolded";
import FormLink from "./form-components/FormLink";
import FormSkeleton from "./form-components/FormSkeleton";

function LoginForm() {
  return (
    <FormSkeleton accion="/login">
      <div className="flex-auto flex flex-col justify-evenly">
        <FormInputPlaceHolded
          tipo="text"
          id="userName"
          contenido="Nombre de usuario"
        />
        <FormInputPlaceHolded
          tipo="password"
          id="passW"
          contenido="Contraseña"
        />
      </div>
      <div className="flex-auto w-full flex items-center justify-evenly">
        <FormBtn texto="Iniciar Sesion" />
      </div>
      <div className="flex justify-evenly w-full">
        <FormLink donde="/register" texto="Registrarse" />
        <FormLink donde="/forgot" texto="Olvidé mí contraseña" />
      </div>
    </FormSkeleton>
  );
}

export default LoginForm;
