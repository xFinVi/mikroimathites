import React, { useEffect, useState } from "react";
import axios from "axios";
import { Head, usePage } from "@inertiajs/react"; // Assuming you want to use usePage for route helper
import { AxiosError } from "axios";

import PageLayout from "@/Layouts/PageLayout";
import { PageProps, Craft } from "@/types";

const EditCraft: React.FC<PageProps<{ craft: Craft }>> = ({ auth, craft }) => {
  const [csrfToken, setCsrfToken] = useState<string>("");
  const [formData, setFormData] = useState({
    title: craft.title || "",
    description: craft.description || "",
    img_url: null as File | null,
    pdf_url: null as File | null,
  });

  useEffect(() => {
    const tokenElement = document.querySelector('meta[name="csrf-token"]');
    if (tokenElement) {
      const token = tokenElement.getAttribute("content");
      setCsrfToken(token || "");
      axios.defaults.headers.common["X-CSRF-TOKEN"] = token || "";
      console.log(token);
    } else {
      console.error("CSRF token not found");
    }
  }, []);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("_method", "PUT");
    formDataToSend.append("title", formData.title || "");
    formDataToSend.append("description", formData.description || "");
    if (formData.img_url) {
      formDataToSend.append("img_url", formData.img_url);
    }
    if (formData.pdf_url) {
      formDataToSend.append("pdf_url", formData.pdf_url);
    }
    for (var pair of formDataToSend.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    try {
      const response = await axios.post(
        `/paidikes-ergasies/${craft.id}/edit`,
        formDataToSend,
        {
          headers: {
            "X-CSRF-TOKEN": csrfToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        setSuccessMessage("Η εργασία ενημερώθηκε με επιτυχία!");
        setErrors({});
        window.location.href = response.data.redirectUrl;
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors({ general: "Κάτι πήγε στραβά. Παρακαλώ προσπαθήστε ξανά." });
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === "file") {
      const files = e.target.files;

      if (files && files.length > 0) {
        setFormData({
          ...formData,
          [name]: files[0], // Assign the first selected file
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <PageLayout
      auth={auth}
      pageTitle="Επεξεργασία Εργασίας"
      bgColorClass="bg-[#FA539C]"
    >
      <Head title="Επεξεργασία Εργασίας" />

      <div className="max-w-lg p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-[#FA539C] mb-6">
          Επεξεργασία Δημιουργίας
        </h1>
        {successMessage && (
          <div className="p-2 mb-4 text-green-800 bg-green-200 rounded">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Τίτλος
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Τίτλος"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA539C]"
            />
            {errors.title && (
              <p className="mt-2 text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Περιγραφή
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Περιγραφή"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA539C]"
            />
            {errors.description && (
              <p className="mt-2 text-sm text-red-600">{errors.description}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="img_url"
              className="block text-sm font-medium text-gray-700"
            >
              Εικόνα
            </label>
            {craft.img_url && (
              <img
                src={craft.img_url}
                alt="Current image"
                className="h-20 mt-2"
              />
            )}
            <input
              type="file"
              id="img_url"
              name="img_url"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA539C]"
            />
            {errors.img_url && (
              <p className="mt-2 text-sm text-red-600">{errors.img_url}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="pdf_url"
              className="block text-sm font-medium text-gray-700"
            >
              PDF
            </label>
            {craft.pdf_url && (
              <a
                href={craft.pdf_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-500 underline"
              >
                Προβολή Τρέχοντος PDF
              </a>
            )}
            <input
              type="file"
              id="pdf_url"
              name="pdf_url"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA539C]"
            />
            {errors.pdf_url && (
              <p className="mt-2 text-sm text-red-600">{errors.pdf_url}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#FA539C] text-white p-3 rounded-md hover:bg-[#e14b8f] transition duration-200"
          >
            Ενημέρωση Δημιουργίας
          </button>
        </form>
      </div>
    </PageLayout>
  );
};

export default EditCraft;
