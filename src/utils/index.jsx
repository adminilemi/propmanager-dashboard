import { toast } from 'react-hot-toast';

export const handleCopyToClipboard = (id, val, message) => {
  if (id) {
    navigator.clipboard.writeText(val);
    toast.success(message);
  }
};
