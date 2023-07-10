import { JSX, onMount } from "solid-js";
import { useBeforeLeave } from "@solidjs/router";

import { TopBar } from "./TopBar";
import { Sidebar } from "./sidebar/Sidebar";
import { Overlay } from "./Overlay";
import { closeSidebar, sidebarOpen } from "./store";

interface LayoutProps {
  children: JSX.Element;
}

const style = {
  container: "bg-gray-100 h-screen overflow-hidden relative",
  mainContainer:
    "flex flex-col h-screen pl-0 w-full lg:space-y-4 lg:w-[calc(100%-16rem)]",
  main: "h-screen overflow-auto pb-36 pt-8 px-2 md:pb-8 md:pt-4 md:px-8 lg:pt-0",
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
    <div class={style.container}>
      <div class="flex items-start">
        <Overlay />
        <Sidebar mobileOrientation="end" />
        <div class={style.mainContainer}>
          <TopBar />
          <main class={style.main}>{props.children}</main>
        </div>
      </div>
    </div>
  );
}
