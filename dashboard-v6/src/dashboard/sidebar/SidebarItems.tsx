import { createMemo, For } from "solid-js";
import { Link, useLocation } from "@solidjs/router";
import { data } from "./data";

const style = {
  inactive: "text-gray-400",
  active: "font-medium text-white",
  link: "flex items-center justify-start my-2 p-4 text-sm w-full hover:text-white",
};

export function SidebarItems() {
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  return (
    <ul class="md:pl-6">
      <For each={data}>
        {(item) => (
          <li>
            <Link href={item.link}>
              <span
                class={`${style.link} 
               ${item.link === pathname() ? style.active : style.inactive}`}
              >
                <span>{item.icon()}</span>
                <span class="mx-4">{item.title}</span>
              </span>
            </Link>
          </li>
        )}
      </For>
    </ul>
  );
}
