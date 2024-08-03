/** @format */
import PatientForm from "@/components/form/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar my-auto container">
          <div className="mx-auto flex size-full flex-col py-10 max-w-[496px]">
            <Image
              src="assets/icons/logo-full.svg"
              alt="patient"
              width={1000}
              height={1000}
              className="mb-12 h-10 w-fit"
            />
            <PatientForm />
            <div className="text-14-regular flex justify-between mt-20">
              <p className="justify-items-end  text-dark-600 xl:text-left">
                &copy; 2024 CarePulse
              </p>
              <Link href="/?admin=true" className="text-green-500">
                Admin
              </Link>
            </div>
          </div>
        </section>
        <Image
          src="/assets/images/onboarding-img.png"
          alt="patient"
          width={1000}
          height={1000}
          className="max-w-[50%] hidden h-full object-cover md:block"
        />
      </div>
    </>
  );
}
