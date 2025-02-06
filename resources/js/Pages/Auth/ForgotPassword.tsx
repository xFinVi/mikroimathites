import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function ForgotPassword({ status }: { status?: string }) {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("password.email"));
  };

  return (
    <GuestLayout>
      <Head title="Forgot Password" />

      <div className="mb-4 text-sm text-white">
        Ξεχάσατε τον κωδικό σας; Κανένα πρόβλημα. Απλώς ενημερώστε μας τη
        διεύθυνση του email σας και θα σας στείλουμε έναν σύνδεσμο επαναφοράς
        του κωδικού, που θα σας επιτρέψει να επιλέξετε έναν νέο κωδικό
        πρόσβασης.
      </div>

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
      )}

      <form onSubmit={submit}>
        <TextInput
          id="email"
          type="email"
          name="email"
          value={data.email}
          className="block w-full mt-1"
          isFocused={true}
          onChange={(e) => setData("email", e.target.value)}
        />

        <InputError message={errors.email} className="mt-2" />

        <div className="flex items-center justify-end mt-4">
          <PrimaryButton className="ms-4 bg-[#4fd42e]" disabled={processing}>
            Επαναφορά κωδικού
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
}
