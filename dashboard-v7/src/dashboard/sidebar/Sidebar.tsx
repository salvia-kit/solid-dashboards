import css from "../style.module.css";
import { sidebarOpen } from "../store";
import { SidebarItems } from "./SidebarItems";
import { SidebarHeader } from "./SidebarHeader";

interface SidebarProps {
  mobileOrientation: "start" | "end";
}

const style = {
  mobileOrientation: {
    start: "left-0 ",
    end: "right-0 lg:left-0",
  },
  close: "hidden",
  container: "pb-32 lg:pb-6",
  open: "w-8/12 absolute z-40 sm:w-5/12",
  default:
    "bg-[#0E141B] h-screen overflow-y-auto top-0 lg:block lg:relative lg:w-64 lg:z-auto",
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
