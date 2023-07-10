import { createMemo, For } from "solid-js";
import { Link, useLocation } from "@solidjs/router";
import { data } from "./data";

const style = {
  title: "font-normal mx-4 text-sm",
  active:
    "bg-gradient-to-r border-r-4 border-blue-500 border-r-4 border-blue-500 from-white to-blue-100 text-blue-500",
  link: "duration-200 flex font-thin items-center justify-start my-2 p-4 transition-colors text-gray-500 uppercase w-full lg:hover:text-blue-500",
};

export function SidebarItems() {
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  return (
    <ul>
      <For each={data}>
        {(item) => (
          <li>
            <Link href={item.link}>
              <span
                class={`${style.link} 
              ${item.link === pathname() && style.active}`}
              >
                <span>{item.icon()}</span>
                <span class={style.title}>{item.title}</span>
              </span>
            </Link>
          </li>
        )}
      </For>
    </ul>
  );
}
