import { createMemo, For } from "solid-js";
import { Link, useLocation } from "@solidjs/router";
import { data } from "./data";
import { sidebarOpen } from "../store";

const style = {
  title: "mx-4 text-sm whitespace-pre",
  inactive: "text-white",
  active: "font-medium text-green-400 hover:text-green-400",
  link: "flex items-center justify-start my-2 p-4 w-full hover:text-white",
  close:
    "lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all",
  open: "lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto",
};

export function SidebarItems() {
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  return (
    <ul class="md:pl-5">
      <For each={data}>
        {(item) => (
          <li>
            <Link href={item.link}>
              <span
                class={`${style.link} 
                   ${item.link === pathname() ? style.active : style.inactive}`}
              >
                <span>{item.icon()}</span>
                <span
                  class={`${style.title} ${
                    sidebarOpen() ? style.open : style.close
                  }`}
                >
                  {item.title}
                </span>
              </span>
            </Link>
          </li>
        )}
      </For>
    </ul>
  );
}
