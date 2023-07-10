import { JSX } from "solid-js";

const inlineStyle: JSX.CSSProperties = {
  "background-color": "#f96057",
  "box-shadow": "24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65",
};

export function SidebarHeader() {
  return (
    <div class="flex h-20 items-center justify-start pl-4 lg:pl-8">
      <div class="h-4 w-4 rounded-full" style={inlineStyle} />
    </div>
  );
}
