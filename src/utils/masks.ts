export const normalizePhoneNumber = (phone: string) => {
  return phone
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2');
};
