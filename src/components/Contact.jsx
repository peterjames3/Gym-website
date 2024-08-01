import React, { useState } from "react";
import { useFormik } from "formik";
import { contactinfo } from "../contactInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const notify = (message, type = "success") => {
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      progress: undefined,
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    //validate form logic function
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name is required";
      } else if (values.name.length < 3) {
        errors.name = "Too short";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email format";
      }
      if (!values.message) {
        errors.message = "Message is required";
      } else if (values.message.length < 3) {
        errors.message = "Too short";
      }

      return errors;
    },
    onSubmit: (values) => {
      setIsSubmitting(true);

      setTimeout(() => {
        console.log(values);
        formik.resetForm();
        notify("Message sent successfully");
        setIsSubmitting(false);
      }, 2000);
    },
  });

  return (
    <section className="my-20 w-full">
      <div className="wrapper grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-0">
        <div className="space-y-7  *:border *:border-slate-600  *:hover:cursor-pointer">
          {contactinfo.map((info, index) => (
            <div
              key={index}
          /*     data-aos="fade-right"
              data-aos-delay={info.delay} */
              className="mb-4 py-16 text-center transition-all delay-300"
            >
              <h3 className="text-2xl text-textColor">{info.icon}</h3>
              <h3 className="mb-2 text-2xl text-textColor">{info.type}</h3>
              <p className="text-2xl text-textColor">{info.value}</p>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <h2 className="mb-4 font-body text-5xl font-bold text-white">
            Contact us!
          </h2>
          <p className="mb-4 font-Lato text-2xl text-textColor">
            I build with precision and passion, creating web projects that stand
            out. It’s as straightforward as that!
          </p>
          <form onSubmit={formik.handleSubmit} className="space-y-10">
            <div className="mb-4 w-full">
              <div className="flex items-center justify-between">
                <label className="text-textColor" htmlFor="name">
                  Name
                </label>
                <p className="text-xl text-red-500">
                  {formik.errors.name && formik.touched.name ? (
                    <span>{formik.errors.name}</span>
                  ) : null}
                </p>
              </div>

              <input
                id="name"
                type="text"
                name="name"
                onBlur={formik.handleBlur}
                className="w-full rounded-md border border-slate-600 bg-transparent p-4 text-textColor outline-none"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className="mb-4 w-full">
              <div className="flex items-center justify-between">
                <label className="text-textColor" htmlFor="email">
                  Email
                </label>
                <p className="text-xl text-red-500">
                  {formik.errors.email && formik.touched.email ? (
                    <span>{formik.errors.email}</span>
                  ) : null}
                </p>
              </div>
              <input
                id="email"
                type="email"
                name="email"
                onBlur={formik.handleBlur}
                className="w-full rounded-md border border-slate-600 bg-transparent p-4 text-textColor outline-none"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-textColor" htmlFor="message">
                Message
              </label>
              <p className="text-xl text-red-500">
                {formik.errors.message && formik.touched.message ? (
                  <span>{formik.errors.message}</span>
                ) : null}
              </p>
            </div>
            <textarea
              name="message"
              id="message"
              onBlur={formik.handleBlur}
              className="mb-4 w-full rounded-md border border-slate-600 bg-transparent p-4 text-textColor outline-none"
              rows="4"
              onChange={formik.handleChange}
              value={formik.values.message}
            ></textarea>
            <input
              type="submit"
              value={isSubmitting ? "Submitting..." : "Send"}
              disabled={isSubmitting}
              className={`w-full rounded border border-primary px-4 py-3 font-bold ${isSubmitting ? "bg-transparent" : "bg-primary"} text-white transition-all delay-300 hover:cursor-pointer hover:bg-transparent`}
            />
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
