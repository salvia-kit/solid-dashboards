import { For, createMemo } from "solid-js";
import { Link, useLocation } from "@solidjs/router";
import { data } from "./data";

const style = {
  title: "mx-4 text-sm",
  section: "font-medium mb-4 pl-5 text-gray-500 text-lg lg:pl-6",
  active:
    "border-green-500 border-l-4 lg:border-l-0 lg:border-r-4 lg:border-gray-500",
  link: "flex items-center justify-start my-1 p-3 text-gray-800 w-full lg:hover:bg-gray-100",
};

export function SidebarItems() {
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  return (
    <ul class="mt-6 md:pl-6">
      <For each={data}>
        {({ section, content }) => (
          <li>
            <div class="mb-10">
              <div class={style.section}>{section}</div>
              <For each={content}>
                {(item) => (
                  <Link href={item.link}>
                    <span
                      class={`${style.link}  ${
                        item.link === pathname() && style.active
                      }`}
                    >
                      <span>{item.icon()}</span>
                      <span class={style.title}>{item.title}</span>
                    </span>
                  </Link>
                )}
              </For>
            </div>
          </li>
        )}
      </For>
    </ul>
  );
}
