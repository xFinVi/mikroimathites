import React, { useEffect, useState } from "react";
import axios from "axios";
import { PageProps } from "@/types";
import PageLayout from "@/Layouts/PageLayout";
import { Head } from "@inertiajs/react";

const AddCraft = ({ auth }: PageProps) => {
  const [csrfToken, setCsrfToken] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img_url: null as File | null,
    pdf_url: null as File | null,
  });

  // Fetch CSRF token and set default axios header
  useEffect(() => {
    const tokenElement = document.querySelector('meta[name="csrf-token"]');
    if (tokenElement) {
      const token = tokenElement.getAttribute("content");
      setCsrfToken(token || "");
      axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
    } else {
      console.error("CSRF token not found");
    }
  }, []);

  // Handle form submission

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create a FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    if (formData.img_url) {
      formDataToSend.append("img_url", formData.img_url);
    }
    if (formData.pdf_url) {
      formDataToSend.append("pdf_url", formData.pdf_url);
    }

    try {
      const response = await axios.post(
        "/admin/paidikes-ergasies",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-CSRF-TOKEN": csrfToken,
          },
        }
      );

      if (response.status === 200) {
        window.location.href = response.data.redirectUrl; // Redirect to the crafts index page
      }

      setSuccessMessage("Successfully submitted!");
      setError("");
      setFormData({
        title: "",
        description: "",
        img_url: null,
        pdf_url: null,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Narrowing the type when the input is a file input
    if (e.target instanceof HTMLInputElement && e.target.type === "file") {
      const files = e.target.files;

      // Ensure files exist and handle the first file
      if (files && files.length > 0) {
        setFormData({
          ...formData,
          [name]: files[0], // Set the first file
        });
      }
    } else if (e.target instanceof HTMLTextAreaElement) {
      // Handle textarea inputs
      setFormData({ ...formData, [name]: value });
    } else if (e.target instanceof HTMLInputElement) {
      // Handle other input elements (non-file)
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <PageLayout auth={auth} pageTitle="Διαγωνισμός" bgColorClass="bg-[#FA539C]">
      <Head title="Προσθήκη εργασίας" />
      <div className="max-w-lg p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-[#FA539C] mb-6">
          Εισαγωγή Νέας Δημιουργίας
        </h1>
        {successMessage && (
          <div className="p-2 mb-4 text-green-800 bg-green-200 rounded">
            {successMessage}
          </div>
        )}
        {error && (
          <div className="p-2 mb-4 text-red-800 bg-red-200 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Τίτλος
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Τίτλος"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA539C]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Περιγραφή
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Περιγραφή"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA539C]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="img_url"
              className="block text-sm font-medium text-gray-700"
            >
              Εικόνα
            </label>
            <input
              type="file"
              name="img_url"
              id="img_url"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA539C]"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="pdf_url"
              className="block text-sm font-medium text-gray-700"
            >
              PDF
            </label>
            <input
              type="file"
              name="pdf_url"
              id="pdf_url"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA539C]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FA539C] text-white p-3 rounded-md hover:bg-[#e14b8f] transition duration-200"
          >
            Προσθήκη Δημιουργίας
          </button>
        </form>
      </div>
    </PageLayout>
  );
};

export default AddCraft;
