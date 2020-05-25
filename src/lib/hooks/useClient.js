import { useMemo } from "react";
import { Client } from "../sdk";

export default (options) => {
  return useMemo(() => new Client(options), [options])
};
