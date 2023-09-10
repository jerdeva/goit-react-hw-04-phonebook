import { Formik, Field } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { FormPhB, LabelStyle, ErrorMessageStyle } from './FormPhonebook.styled';
import BtnStyle from './FormPhonebook.styled';

const SettingForms = Yup.object().shape({
  name: Yup.string()
    .test(
      'name',
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      value =>
        /^[a-zA-Zа-яА-Я]+((['][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(value)
    )
    .required('Required'),
  number: Yup.string()
    .test(
      'number',
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      value =>
        /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/.test(
          value
        )
    )
    .required('Required'),
});

export const FormPhonebook = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
      validationSchema={SettingForms}
    >

      
      <FormPhB>
        <LabelStyle>
          Name:
          <Field name="name" type="text" placeholder="Enter name" />
          <ErrorMessageStyle component={'h5'} name="name" />
        </LabelStyle>
        <LabelStyle>
          Number:
          <Field name="number" type="tell" placeholder="Enter phone number" />
          <ErrorMessageStyle component={'h5'} name="number" />
        </LabelStyle>
        <BtnStyle type="submit">Add contact</BtnStyle>
      </FormPhB>
    </Formik>
  );
};
