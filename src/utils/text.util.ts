import toast from '~/core/toastify';

export const copy = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast(`Copy success: ${text}`);
    })
    .catch((err) => {
      toast(`Copy failed ${err}`);
    });
};

export const formatVietnamPhoneNumber = (phoneNumber: string): string => {
  let cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

  if (cleanedPhoneNumber.startsWith('0')) {
    cleanedPhoneNumber = '+84 ' + cleanedPhoneNumber.slice(1);
  }

  if (!cleanedPhoneNumber.startsWith('+84')) {
    cleanedPhoneNumber = '+84 ' + cleanedPhoneNumber;
  }

  return cleanedPhoneNumber;
};
