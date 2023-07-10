import { createMemo, For } from "solid-js";
import { Link, useLocation } from "@solidjs/router";
import { data } from "./data";

const style = {
  title: "font-normal mx-4 text-sm",
  active: "text-black font-medium",
  inactive: "text-gray-600",
  link: "flex font-thin items-center justify-start my-2 p-4 w-full",
};

export function SidebarItems() {
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  return (
    <div>
      <For each={data}>
        {({ content }) => (
          <ul class="border-b py-2 last:border-none">
            <For each={content}>
              {(item) => (
                <li>
                  <Link href={item.link}>
                    <span
                      class={`${style.link} 
                         ${
                           item.link === pathname()
                             ? style.active
                             : style.inactive
                         }`}
                    >
                      <span>{item.icon()}</span>
                      <span class={style.title}>{item.title}</span>
                    </span>
                  </Link>
                </li>
              )}
            </For>
          </ul>
        )}
      </For>
    </div>
  );
}
