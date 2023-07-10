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
  close: "hidden",
  container: "pb-32 lg:pb-6",
  open: "absolute w-8/12 z-40 sm:w-5/12",
  default:
    "bg-gray-900 h-screen overflow-y-auto top-0 lg:bg-transparent lg:block lg:relative lg:w-64 lg:z-auto",
};

export function Sidebar(props: SidebarProps) {
  return (
    <aside
      class={`${style.default} 
        ${style.mobileOrientation[props.mobileOrientation]} 
        ${sidebarOpen() ? style.open : style.close} ${css.sidebar}`}
    >
      <div class={style.container}>
        <SidebarHeader />
        <SidebarItems />
      </div>
    </aside>
  );
}
