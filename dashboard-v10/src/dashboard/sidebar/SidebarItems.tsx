import { createMemo, createSignal, For, onMount, Show } from "solid-js";
import { Link, useLocation } from "@solidjs/router";
import { data } from "./data";
import { closeSidebar, sidebarOpen } from "../store";

export function SidebarItems() {
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);
  const [currentSection, setCurrentSection] = createSignal<string | undefined>(
    ""
  );

  const updateCurrentSection = (section: string) => {
    setCurrentSection(section);
    if (window.innerWidth > 1024) {
      closeSidebar();
    }
  };

  onMount(() => {
    const sidebarData = data.flatMap((section) => {
      return section.content.map((content) => ({
        title: content.title,
        link: content.link,
        section: section.section,
      }));
    });

    setCurrentSection(
      sidebarData.find((item) => item.link === pathname())?.section
    );
  });

  return (
    <div class="flex h-full w-full">
      <div class="h-full bg-fuchsia-950 pt-10">
        <For each={data}>
          {({ section, icon }) => (
            <div class="mx-4 my-1 flex w-full items-center justify-start p-3 text-white">
              <div onClick={() => updateCurrentSection(section)}>
                <div>
                  <div
                    class={`flex h-8 w-8 items-center justify-center 
                    ${
                      section === currentSection() &&
                      "rounded-full bg-fuchsia-800"
                    }`}
                  >
                    <span>{icon()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </For>
      </div>

      <Show when={!sidebarOpen() || window.innerWidth < 1024}>
        <div class="h-full w-full bg-fuchsia-900 pt-5">
          <For each={data}>
            {({ section, content }) => (
              <Show when={section === currentSection()}>
                <div>
                  <div class="pl-3 text-lg font-medium text-white">
                    {section}
                  </div>
                  <ul class="list-disc px-8 pt-6">
                    <For each={content}>
                      {(item) => (
                        <Link href={item.link}>
                          <li
                            class={`py-3 pl-3 text-sm font-normal text-white 
                            ${
                              item.link === pathname() &&
                              "rounded-md bg-fuchsia-800"
                            }`}
                          >
                            {item.title}
                          </li>
                        </Link>
                      )}
                    </For>
                  </ul>
                </div>
              </Show>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
}
