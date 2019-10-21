import * as Yup from 'yup';
import { t } from 'i18next';

export const validationSchemaSignUp = Yup.object().shape({
  confirmPassword: Yup.string().required(t('Validations:fieldEmpty')),
  email: Yup.string()
    .email(t('Validations:invalidEmail'))
    .required(t('Validations:fieldEmpty')),
  lastName: Yup.string()
    .min(2, t('Validations:shortLastName'))
    .max(70, t('Validations:LongLastName'))
    .required(t('Validations:fieldEmpty')),
  name: Yup.string()
    .min(2, t('Validations:shortName'))
    .max(70, t('Validations:LongName'))
    .required(t('Validations:fieldEmpty')),
  password: Yup.string().required(t('Validations:fieldEmpty'))
});

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email(t('Validations:invalidEmail'))
    .required(t('Validations:fieldEmpty'))
});
