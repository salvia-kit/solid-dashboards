import css from "../style.module.css";
import { sidebarOpen } from "../store";
import { SidebarItems } from "./SidebarItems";
import { SidebarHeader } from "./SidebarHeader";

interface SidebarProps {
  mobileOrientation: "start" | "end";
}

const style = {
  mobileOrientation: {
    start: "left-0",
    end: "right-0",
  },
  container: "pb-32 lg:pb-6",
  close: "hidden lg:block lg:w-64 lg:z-auto",
  open: "w-8/12 absolute z-40 sm:w-5/12 lg:hidden",
  default: "bg-white h-screen overflow-y-auto top-0 lg:relative",
};

export function Sidebar(props: SidebarProps) {
  return (
    <aside
      class={`${style.default} 
        ${style.mobileOrientation[props.mobileOrientation]} 
        ${sidebarOpen() ? style.open : style.close} ${css.scrollbar}`}
    >
      <div class={style.container}>
        <SidebarHeader />
        <SidebarItems />
      </div>
    </aside>
  );
}
