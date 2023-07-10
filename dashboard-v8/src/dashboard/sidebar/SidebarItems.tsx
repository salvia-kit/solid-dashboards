import { Link, useLocation } from "@solidjs/router";
import { createMemo, For } from "solid-js";
import { data } from "./data";
import { Collapse } from "./Collapse";

const style = {
  active: "font-normal mx-4 text-sm text-blue-600",
  inactive: "font-light mx-4 text-sm text-gray-900",
  link: "inline-flex items-center justify-start my-1 p-3 text-black",
};

export function SidebarItems() {
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  return (
    <ul class="mt-6 md:pl-6">
      <li>
        <For each={data}>
          {({ icon, section, content }) => (
            <Collapse>
              <div class="flex">
                <span>{icon()}</span>
                <span class="pl-3">{section}</span>
              </div>
              <For each={content}>
                {(item) => (
                  <div class="pl-5">
                    <Link href={item.link}>
                      <span class={style.link}>
                        <span
                          class={
                            item.link === pathname()
                              ? style.active
                              : style.inactive
                          }
                        >
                          {item.title}
                        </span>
                      </span>
                    </Link>
                  </div>
                )}
              </For>
            </Collapse>
          )}
        </For>
      </li>
    </ul>
  );
}
