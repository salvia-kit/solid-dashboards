import css from "../style.module.css";
import { sidebarOpen } from "../store";
import { SidebarItems } from "./SidebarItems";

interface SidebarProps {
  mobileOrientation: "start" | "end";
}

const style = {
  mobileOrientation: {
    start: "left-0",
    end: "right-0",
  },
  close: "hidden lg:block lg:w-80 lg:z-auto",
  open: "w-10/12 absolute z-40 sm:w-5/12 lg:w-24",
  default: "overflow-y-auto top-0 lg:relative",
};

export function Sidebar(props: SidebarProps) {
  return (
    <aside
      class={`${style.default} 
        ${style.mobileOrientation[props.mobileOrientation]} 
        ${sidebarOpen() ? style.open : style.close} ${css.scrollbar}`}
    >
      <div class="h-screen w-full">
        <SidebarItems />
      </div>
    </aside>
  );
}
