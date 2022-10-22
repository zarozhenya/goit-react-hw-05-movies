import { Formik, Form, Field } from 'formik';

export const MovieForm = ({ onFormSubmit }) => {
  const handleSubmit = ({ query }, { resetForm }) => {
    onFormSubmit(query);
    resetForm();
  };
  return (
    <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
      <Form>
        <Field name="query" />
        <button type="Submit">Search</button>
      </Form>
    </Formik>
  );
};
