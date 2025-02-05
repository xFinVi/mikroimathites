// resources/js/Pages/About.tsx
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import PageLayout from "@/Layouts/PageLayout";
import { useState } from "react";
import Newsletter from "@/Components/Newsletter";

const Blog = ({ auth }: PageProps) => {
  return (
    <PageLayout auth={auth} pageTitle="Τα νέα μας" bgColorClass="bg-[#55a6fc]">
      <Head title="Newsletter" />

      <Newsletter />
    </PageLayout>
  );
};

export default Blog;
