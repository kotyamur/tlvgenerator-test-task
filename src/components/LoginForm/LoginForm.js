"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./LoginForm.module.css"
import { useFormik } from "formik";
import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Enter your email"),
  password: Yup.string()
    .length(6, "Password should be 6 characters long")
    .required("Enter your password"),
});

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
    const router = useRouter();
    const handleSubmit = (values, actions) => {
    console.log(values, actions);

    // dispatch(setUser(values));
    actions.setSubmitting(false);
    actions.resetForm();
    router.push("/");
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: handleSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.styledForm}>
      <label>
        E-mail
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className={styles.inputField}
        />
        {formik.errors.email ? (
          <div className={styles.errorMessage}>{formik.errors.email}</div>
        ) : null}
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className={styles.inputField}
        />
        {formik.errors.password ? (
          <div className={styles.errorMessage}>{formik.errors.password}</div>
        ) : null}
      </label>

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className={styles.submitButton}
      >
        Login
      </button>
      <p className={styles.linkToRegister}>
        Don't have an account? <Link href="/register">Sign up</Link>
      </p>
    </form>
  );
}
