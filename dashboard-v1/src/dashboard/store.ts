import { createSignal } from "solid-js";

const [sidebarOpen, setSidebarOpen] = createSignal(false);

const closeSidebar = () => {
  setSidebarOpen(false);
};

const openSidebar = () => {
  setSidebarOpen(true);
};

export { openSidebar, closeSidebar, sidebarOpen };
