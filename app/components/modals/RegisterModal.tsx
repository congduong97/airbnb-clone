"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useState } from "react";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { error } from "console";
import toast from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(async (res) => {
        registerModal.onClose();
      })
      .catch((err) => {
        toast.error("Failed");
      })
      .finally(() => setIsLoading(false));
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subTitle="Create an account!" />
      <Input
        register={register}
        id="email"
        disabled={isLoading}
        errors={errors}
        required
        label="Email"
      />
      <Input
        register={register}
        id="name"
        disabled={isLoading}
        errors={errors}
        required
        label="Name"
      />
      <Input
        register={register}
        id="password"
        disabled={isLoading}
        errors={errors}
        required
        type="password"
        label="Password"
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row justify-center items-center gap-4">
          <div>Already have an account?</div>
          <div
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={registerModal.onClose}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    ></Modal>
  );
};

export default RegisterModal;
