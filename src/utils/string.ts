export const urlToName = (url: string) => {
  return url.replace(/(^\w+:|^)\/\//, "");
};

export function decodeEmail(email: string) {
  return atob(email);
}
