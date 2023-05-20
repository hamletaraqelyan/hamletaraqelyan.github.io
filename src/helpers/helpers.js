export const calculateAge = (birthday) => {
  const ageDifMs = Date.now() - new Date(birthday).getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const getLinkedinIdFromUrl = (
  url = "https://www.linkedin.com/in/lilit-minasyan-1217741a3/"
) => {
  const regex = /\/in\/(.+)\//;
  const match = url.match(regex);
  return match[1];
};
