const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getCurrentMonth = (date = new Date()) => {
  const currentMonth = date.getMonth();
  return months[currentMonth];
};

const isAdmin = (userId) => userId == "admin";

// faire le lien entre Javascript et html
try {
  document.getElementById("month").innerText = getCurrentMonth();
} catch (err) {
  /* empty */
}

exports.getCurrentMonth = getCurrentMonth;
exports.isAdmin = isAdmin;
