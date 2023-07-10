import { createSignal } from "solid-js";

const [sidebarOpen, setSidebarOpen] = createSignal(false);

const closeSidebar = () => {
  setSidebarOpen(false);
};

const openSidebar = () => {
  setSidebarOpen((prev) => !prev);
};

export { closeSidebar, openSidebar, sidebarOpen };
