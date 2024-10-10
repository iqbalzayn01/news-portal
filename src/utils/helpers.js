export const convertToReadableDatetime = (datetimeString) => {
  const date = new Date(datetimeString);

  // Date
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // Time
  // const timeOptions = {
  //   hour: '2-digit',
  //   minute: '2-digit',
  //   second: '2-digit',
  //   hour12: false,
  // };

  const formattedDate = date.toLocaleDateString('id-ID', dateOptions);
  // const formattedTime = date.toLocaleTimeString('id-ID', timeOptions);

  return `${formattedDate}`;
};
