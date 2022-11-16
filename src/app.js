import React from "react";
import { Form, Formik, Field } from "formik";

const App = () => {
  return (
    <Formik
      onSubmit={(values, actions) => console.log(values)}
      render={(form) => (
        <Form
          style={{
            border: "1px solid rgba(59,130,246,0.5)",
            padding: 5,
            margin: 10,
          }}
        >
          <strong>Parent Formik</strong> <br />
          <Field
            name="email"
            type="email"
            render={({ field }) => (
              <input {...field} placeholder="Email Address" />
            )}
          />
          <Formik
            onSubmit={(values, actions) => {
              form.setFieldValue(
                "address",
                `${values.street1}, ${values.street2}`
              );
            }}
            render={(form) => (
              <Form
                style={{
                  border: "1px solid green",
                  padding: 5,
                  margin: "20px 5px",
                }}
              >
                <strong>Nested Formik</strong>
                <br />
                <Field
                  name="street1"
                  render={({ field }) => (
                    <input {...field} placeholder="Steet 1" />
                  )}
                />
                <Field
                  name="street2"
                  render={({ field }) => (
                    <input {...field} placeholder="Steet 2" />
                  )}
                />
                <button type="submit">Subform Submit</button>
              </Form>
            )}
          />
          <button type="submit">Submit</button>
          <br />
          <br />
          <strong>Form Values:</strong>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </Form>
      )}
    />
  );
};

export default App;
