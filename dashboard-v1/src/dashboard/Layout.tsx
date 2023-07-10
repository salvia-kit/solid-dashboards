import { JSX, onMount } from "solid-js";
import { useBeforeLeave } from "@solidjs/router";

import { TopBar } from "./TopBar";
import { Overlay } from "./Overlay";
import { Sidebar } from "./sidebar/Sidebar";
import css from "./style.module.css";
import { closeSidebar, sidebarOpen } from "./store";

interface LayoutProps {
  children: JSX.Element;
}

const style = {
  content: "h-screen overflow-hidden relative lg:rounded-2xl",
  main: "h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6",
  mainContainer:
    "flex flex-col h-screen pl-0 w-full lg:space-y-4 lg:w-[calc(100%-16rem)]",
  container: "h-screen overflow-hidden w-full lg:p-4",
};

export function DashboardLayout(props: LayoutProps) {
  onMount(() => {
    document.documentElement.style.overflow = "hidden";
  });

  useBeforeLeave(() => {
    if (sidebarOpen() && window.innerWidth < 1024) {
      closeSidebar();
    }
  });

  return (
    <div class={`${style.container} ${css.background}`}>
      <div class={`${style.content} ${css.content}`}>
        <div class="flex items-start">
          <Overlay />
          <Sidebar mobileOrientation="end" />
          <div class={style.mainContainer}>
            <TopBar />
            <main class={`${style.main} ${css.main}`}>{props.children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
