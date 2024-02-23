import { useFormStatus } from "react-dom";

export default function ButtonSubmit({ titlePending, title }) {
  const { pending } = useFormStatus();

  return (
    <>
      <button className="btn btn-primary btn-sm h-full py-4 px-4">{pending ? titlePending : title}</button>
    </>
  );
}
