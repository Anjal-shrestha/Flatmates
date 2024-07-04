
"use client";

import FlatState from "./flat/state";

export function Provider({ children }) {
  return <FlatState>{children}</FlatState>;
}
