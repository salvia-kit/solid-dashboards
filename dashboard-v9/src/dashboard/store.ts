import { createSignal } from "solid-js";

const [sidebarOpen, setSidebarOpen] = createSignal(false);

const closeSidebar = () => {
  setSidebarOpen(false);
};

const toggleSidebar = () => {
  setSidebarOpen((prev) => !prev);
};

export { closeSidebar, toggleSidebar, sidebarOpen };
