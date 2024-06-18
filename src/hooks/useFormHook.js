import { useForm } from "react-hook-form";

export const useFormHook = () => {
  const form = useForm({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;

  return { register, handleSubmit, errors, watch };
};
