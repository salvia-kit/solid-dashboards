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
  container: "bg-gray-900 h-screen overflow-hidden relative",
  mainContainer: "flex flex-col h-screen pl-0 w-full lg:pl-20 lg:space-y-4",
  main: "h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:pt-4 lg:pt-0 lg:px-4",
};

export function DashboardLayout(props: LayoutProps) {
  onMount(() => {
    document.documentElement.style.overflow = "hidden";
  });

  useBeforeLeave(() => {
    if (sidebarOpen()) {
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
