import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useRef, useState } from "react";

export default function DeleteUserForm({
    className = "",
}: {
    className?: string;
}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Διαγραφή Λογαριασμού
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Μόλις διαγραφεί ο λογαριασμός σας, όλοι οι πόροι και τα
                    δεδομένα του θα διαγραφούν μόνιμα. Πριν διαγράψετε τον
                    λογαριασμό σας, παρακαλούμε κατεβάστε οποιαδήποτε δεδομένα ή
                    πληροφορίες θέλετε να διατηρήσετε.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>
                Διαγραφή Λογαριασμού
            </DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Είστε σίγουροι ότι θέλετε να διαγράψετε τον λογαριασμό
                        σας;
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Μόλις διαγραφεί ο λογαριασμός σας, όλοι οι πόροι και τα
                        δεδομένα του θα διαγραφούν μόνιμα. Παρακαλούμε εισάγετε
                        τον κωδικό σας για να επιβεβαιώσετε ότι θέλετε να
                        διαγράψετε μόνιμα τον λογαριασμό σας.
                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="password"
                            value="Κωδικός"
                            className="sr-only"
                        />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className="block w-3/4 mt-1"
                            isFocused
                            placeholder="Κωδικός"
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex justify-end mt-6">
                        <SecondaryButton onClick={closeModal}>
                            Ακύρωση
                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Διαγραφή Λογαριασμού
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
