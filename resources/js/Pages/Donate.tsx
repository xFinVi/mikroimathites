import PageLayout from "@/Layouts/PageLayout";
import { PageProps } from "@/types";

const Donate = ({ auth }: PageProps) => {
  return (
    <PageLayout
      auth={auth}
      pageTitle="  Ευχαριστούμε για τη στήριξή σας!"
      bgColorClass="bg-[#0097E6]"
    >
      <div
        className="bg-[#ffec9e] h-[100%]   bg-[url('Images/bgdonate.png')] md:bg-cover bg-cover bg-no-repeat lg:bg-repeat sm:bg-bottom  flex justify-center items-center flex-col 
       "
      >
        {" "}
        <div className="mb-10 text-center ">
          <h1 className="mt-2 text-sm font-bold text-center mynerve ">
            {" "}
            Η δωρέα δεν ειναι απαραίτητη , εμείς θα συνεχίσουμε να δινουμε τον
            καλυτερο μας εαυτο για τα παιδια μας.
          </h1>

          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="P8FY7TRDVBJMC"
            />
            <input
              className="h-auto transition-shadow duration-300 rounded-lg shadow-lg bg-green-50/65 mt-14 w-80 sm:w-48 md:w-64 lg:w-72 hover:shadow-xl"
              type="image"
              src="https://pics.paypal.com/00/s/MjZiZTc2MGEtMjMyNS00ZGVlLWFkNjEtMjc0ODE1YzY5ZjBh/file.PNG"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              src="https://www.paypal.com/en_GB/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
        <div className="px-4 py-2  text-[#444444] max-w-lg leading-relaxe"></div>
        <div className="flex flex-row flex-wrap items-center justify-center w-full text-center sm:flex-row">
          <img
            className="custom-img  w-[490px] sm:w-[320px] sm:max-w-none md:w-[350px] lg:w-[500px] lg:max-w-[650px]"
            src="/images/cloud1.png"
            alt="cloud message"
          />

          <img
            className="flex-1 w-[220px] sm:w-[320px] sm:max-w-[320px]   md:w-[350px] md:max-w-[375px] lg:w-[500px]  lg:max-w-[650px] object-contain"
            src="Images/cloud2.png"
            alt="cloud message"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Donate;
