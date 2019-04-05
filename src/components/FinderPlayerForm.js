import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';

const renderOptions = values => values.map(({ value, label }) => <option key={value} value={value} label={label} />)

const FinderPlayerForm = ({ onSubmit, initialValues, selectOptions }) => {
  return(
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form>
            <Field type="text" name="playerName" placeholder="Player Name"/>
            <Field component="select" name="position">
              {
                renderOptions(selectOptions)
              }
            </Field>
            <Field type="text" name="age" placeholder="Age" />
            <button type="submit" disabled={isSubmitting}>
              Search
            </button>
          </Form>
        )}
      />
  )
};

FinderPlayerForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  selectOptions: PropTypes.array.isRequired
};

export default FinderPlayerForm;