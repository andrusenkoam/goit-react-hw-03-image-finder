import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  Header,
  SearchForm,
  FormButton,
  FormButtonLabel,
  FormField,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    if (values.searchText.trim() === '') {
      toast.warn('Enter a search query!', {
        position: 'top-center',
        autoClose: 2000,
        theme: 'colored',
      });
      return;
    }
    await onSubmit(values.searchText);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Header>
      <Formik initialValues={{ searchText: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <SearchForm>
            <FormButton type="submit" disabled={isSubmitting}>
              <FormButtonLabel>Search</FormButtonLabel>
            </FormButton>

            <FormField
              type="text"
              name="searchText"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        )}
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
