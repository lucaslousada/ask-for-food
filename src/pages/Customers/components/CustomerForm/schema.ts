import * as Yup from 'yup';
import { ptShort } from 'yup-locale-pt';

Yup.setLocale(ptShort);

export const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[\p{L}'][ \p{L}'-]*[\p{L}]$/u, 'Nome inválido.')
    .required(),
  phone: Yup.string()
    .length(11, 'O telefone deve ter ${length} dígitos.')
    .required(),
  address: Yup.object().shape({
    street_name: Yup.string().required(),
    number: Yup.string().required(),
    neighborhood: Yup.string().required(),
    city: Yup.string().required(),
    complement: Yup.string(),
  }),
});
