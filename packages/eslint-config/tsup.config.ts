import { format } from "path";
import { createTsupConfig } from "../config/tsup.config";

export default createTsupConfig({
    format: ['cjs']
  }
);
