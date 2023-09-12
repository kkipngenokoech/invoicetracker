import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

const initialValues = {
  name: "",
  email: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  }

  return errors;
};

const onSubmit = (values) => {
  // Handle form submission here
  console.log(values);
};

export default function MyFormikForm() {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}


