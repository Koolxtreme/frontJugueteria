function FormSkeleton(props) {
  return (
    <div className="h-[40vh] flex items-center justify-center mt-[15vh]">
      <div className="min-w-[320px] max-w-md text-center h-full">
        <form
          action={props.accion}
          method="post"
          encType="multipart/form-data"
          className="h-full py-2 px-8 flex flex-col justify-evenly items-center bg-blue-50"
        >
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default FormSkeleton;
