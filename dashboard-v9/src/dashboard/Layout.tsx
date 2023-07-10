import { JSX, onMount } from "solid-js";
import { useBeforeLeave } from "@solidjs/router";

import { TopBar } from "./TopBar";
import { Overlay } from "./Overlay";
import { Sidebar } from "./sidebar/Sidebar";
import { closeSidebar, sidebarOpen } from "./store";

interface LayoutProps {
  children: JSX.Element;
}

const style = {
  mainContainer:
    "flex flex-col w-full h-screen pl-0 lg:space-y-4 lg:w-[calc(100%-16rem)]",
  container: "bg-white h-screen overflow-hidden relative",
  main: "bg-white h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6 lg:rounded-tl-3xl",
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
