import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Login({
  status,
  canResetPassword,
}: {
  status?: string;
  canResetPassword: boolean;
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("login"), {
      onFinish: () => reset("password"),
    });
  };

  return (
    <GuestLayout>
      <Head title="Log in" />

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
      )}

      <form onSubmit={submit} className="my-4">
        <div>
          <InputLabel htmlFor="email" value="Email" className="text-white" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="block w-full mt-1"
            autoComplete="username"
            isFocused={true}
            onChange={(e) => setData("email", e.target.value)}
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel
            htmlFor="password"
            value="Password"
            className="text-white"
          />

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="block w-full mt-1"
            autoComplete="current-password"
            onChange={(e) => setData("password", e.target.value)}
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="block mt-4">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              checked={data.remember}
              onChange={() => setData("remember", false)}
            />
            <span className="text-sm text-white ms-2">Remember me</span>
          </label>
        </div>

        <div className="flex items-center justify-end gap-2 mt-4">
          {canResetPassword && (
            <Link
              href={route("password.request")}
              className="flex-1 text-sm text-white underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Forgot your password?
            </Link>
          )}

          <PrimaryButton
            className="ms-4 flex-1 text-center bg-[#4fd42e]"
            disabled={processing}
          >
            Σύνδεση
          </PrimaryButton>
          <Link
            href={route("register")}
            className="  flex-1 items-center justify-center rounded-md  border-transparent bg-[#f4bb38] px-4 py-2 text-xs font-semibold  tracking-widest text-white transition duration-150 ease-in-out  "
          >
            Εγγραφή
          </Link>
        </div>
      </form>
    </GuestLayout>
  );
}
