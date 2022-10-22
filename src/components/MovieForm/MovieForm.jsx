import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

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

MovieForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
