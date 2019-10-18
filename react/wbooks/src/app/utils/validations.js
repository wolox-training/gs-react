import * as Yup from 'yup';
import i18next from 'i18next';

export const validationSchemaSignUp = Yup.object().shape({
  confirmPassword: Yup.string().required(i18next.t('Validations:fieldEmpty')),
  email: Yup.string()
    .email(i18next.t('Validations:invalidEmail'))
    .required(i18next.t('Validations:fieldEmpty')),
  lastName: Yup.string()
    .min(2, i18next.t('Validations:shortLastName'))
    .max(70, i18next.t('Validations:LongLastName'))
    .required(i18next.t('Validations:fieldEmpty')),
  name: Yup.string()
    .min(2, i18next.t('Validations:shortName'))
    .max(70, i18next.t('Validations:LongName'))
    .required(i18next.t('Validations:fieldEmpty')),
  password: Yup.string().required(i18next.t('Validations:fieldEmpty'))
});

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email(i18next.t('Validations:invalidEmail'))
    .required(i18next.t('Validations:fieldEmpty'))
});
