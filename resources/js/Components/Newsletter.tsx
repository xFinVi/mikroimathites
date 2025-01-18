import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "../../css/app.css";
import axios from "axios";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Fetch the CSRF token from the meta tag
    const csrfToken =
      document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute("content") || "";

    try {
      const response = await axios.post(
        "/api/subscribe",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": csrfToken, // Include CSRF token
          },
        }
      );

      if (!response.status) {
        throw new Error("Failed to subscribe");
      }

      // Handle success
      setSuccess(
        "🎉 Subscription Successful! Thank you for joining our newsletter! 🎉"
      );
      setShowConfetti(true);

      setEmail("");
      setError("");
      setFadeOut(false);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(errorMessage);
      setSuccess("");
      setShowConfetti(false);
    }
  };
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setFadeOut(true);
        setShowConfetti(false);
      }, 8000);

      // Clean up the timer on component unmount
      return () => clearTimeout(timer);
    }
  }, [success]);
  return (
    <div className="bg-[#f7f7f7]  py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center roboto relative">
      {showConfetti && (
        <div className="absolute top-0 left-0 right-0 w-2/3 -mt-60">
          <Confetti width={window.outerWidth} height={window.innerHeight} />
        </div>
      )}
      <h1 className="text-2xl font-bold text-[#78D3EF] mb-4 text-center ">
        Ο μικρός μας ταχυδρόμος!
      </h1>
      <p className="max-w-md mb-6 text-center text-gray-600">
        Μείνετε ενημερωμένοι για τις τελευταίες περιπέτειες από τους
        <span className="ml-1 font-bold text-[#FF9DB7]">Μικρούς Μαθητές</span>!
        Εγγραφείτε για να λαμβάνετε νέα, δραστηριότητες και συναρπαστικό
        περιεχόμενο απευθείας στο Email σας.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 sm:flex-row"
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Βάλε το email σου "
          className="w-full sm:w-72 p-3 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:border-[#78D3EF]"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-[#78D3EF] text-white font-semibold rounded-md hover:bg-[#5bb4d8] transition duration-300"
        >
          Δήλωσε συμμετοχή
        </button>
      </form>
      {success && (
        <div
          className={`mt-4 font-fredoka text-white text-lg bg-green-600 p-3 rounded-lg transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {success}
        </div>
      )}
      {error && <div className="mt-2 text-red-600">{error}</div>}
      <p className="max-w-md mt-4 text-xs text-center text-gray-500 mynerve">
        Με την εγγραφή σας, συμφωνείτε να λαμβάνετε τα email μας. Μπορείτε να
        διαγραφείτε οποιαδήποτε στιγμή..
      </p>
    </div>
  );
}
