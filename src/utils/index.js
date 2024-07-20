import { toast } from 'react-hot-toast';
import dayjs from 'dayjs';

export const handleCopyToClipboard = (id, val, message) => {
  if (id) {
    navigator.clipboard.writeText(val);
    toast.success(message);
  }
};

export const readableDateTime = (now) => {
  return dayjs(now).format('D/MM/YYYY');
};

export const formatTimeToAMPM = (timeString) => {
  const time = dayjs(timeString, 'HH:mm:ss');
  const formattedTime = time.format('h:mma');
  return formattedTime;
};

export const generateRandomIntId = () => {
  return Math.floor(Math.random() * 1000);
};

export const queryBuilder = (params) => {
  const urlParams = new URLSearchParams({ AgentId: params?.AgentId });

  for (const key in params) {
    if (params[key] !== undefined && params[key] !== '' && key !== 'AgentId') {
      urlParams.append(key, params[key]);
    }
  }

  console.log(urlParams);

  return urlParams.toString();
};

export const formatNumInThousands = (val) => {
  if (typeof val !== 'number' || isNaN(val)) {
    return 'Invalid Number';
  }

  return val >= 1000 ? val.toLocaleString() : val;
};

export const greetings = () => {
  const hour = dayjs().hour();

  if (hour < 12) {
    return 'Good morning';
  } else if (hour < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
};
