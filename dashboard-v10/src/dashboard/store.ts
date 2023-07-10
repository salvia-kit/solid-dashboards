import { createSignal } from "solid-js";

const [sidebarOpen, setSidebarOpen] = createSignal(false);

const closeSidebar = () => {
  setSidebarOpen(false);
};

const openSidebar = () => {
  setSidebarOpen(true);
};
const toggleSidebar = () => {
  setSidebarOpen((prev) => !prev);
};

export { closeSidebar, toggleSidebar, openSidebar, sidebarOpen };
