import React from "react";
import ReactDOM from "react-dom";
import { Form, Formik, Field } from "formik";

function App() {
  return (
    <Formik
      onSubmit={(values, actions) => console.log(values)}
      render={form => (
        <Form>
          <Field
            name="foo"
            render={({ field }) => (
              <input {...field} placeholder="Some field" />
            )}
          />
          <Formik
            onSubmit={(values, actions) => {
              form.setFieldValue(
                "address",
                `${values.street1}, ${values.street2}`
              );
            }}
            render={form => (
              <Form
                style={{ border: "1px solid black", padding: 5, margin: 5 }}
              >
                <strong>Address Subform</strong>
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
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
