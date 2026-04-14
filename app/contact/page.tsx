import { Suspense } from "react";
import ContactForm from "./sections/ContactForm";

export default function Contact() {
  return (
    <div>
      <Suspense>
        <ContactForm />
      </Suspense>
    </div>
  );
}
