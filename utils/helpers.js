module.exports = {
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear()} at ${new Date(date).getHours()}:${new Date(date).getMinutes()}`;
    },
  };
  