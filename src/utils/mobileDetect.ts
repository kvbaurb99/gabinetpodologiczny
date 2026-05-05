import MobileDetect from "mobile-detect";

export const detectMobile = (userAgent: string | null): boolean => {
  if (!userAgent) return false;
  const md = new MobileDetect(userAgent);
  return Boolean(md.mobile());
};
