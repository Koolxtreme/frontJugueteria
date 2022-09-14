import FormBtn from "./form-components/FormBtn";
import FormInputPlaceHolded from "./form-components/FormInputPlaceHolded";
import FormLink from "./form-components/FormLink";
import FormSkeleton from "./form-components/FormSkeleton";

function ForgotForm() {
  return (
    <FormSkeleton>
        <div>
            <FormInputPlaceHolded tipo="email" contenido="Correo registrado"/>
        </div>
        <div>
            <FormBtn texto="Solicitar nueva contraseña"/>
        </div>
        <div>
            <FormLink donde="/login" texto="Iniciar Sesion" />
        </div>
    </FormSkeleton>
  )
}

export default ForgotForm