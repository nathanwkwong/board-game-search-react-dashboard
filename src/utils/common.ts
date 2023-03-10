export const getParamValueFromUrl = (
  url: string,
  key: string
): string | null => {
  const urlParams = new URLSearchParams(url.split("?")[1]);

  return urlParams.get(key);
};
