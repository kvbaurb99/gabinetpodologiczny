// Use only in server compoennts

import MobileDetect from "mobile-detect";
import { headers } from "next/headers";

export const mobileDetectFunction = async () => {
  const headerList = await headers();
  const userAgent = headerList.get("user-agent");
  const md = new MobileDetect(String(userAgent));
  return Boolean(md.mobile());
};
