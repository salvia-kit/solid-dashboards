import { createSignal, JSX } from "solid-js";

interface CollapseProps {
  children: JSX.Element[];
}

const AngleRightIcon = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    class="mt-1 h-4 w-4"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clip-rule="evenodd"
    />
  </svg>
);

const AngleDownIcon = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    class="mt-1 h-4 w-4"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clip-rule="evenodd"
    />
  </svg>
);

export function Collapse(props: CollapseProps) {
  let ref: HTMLDivElement | undefined;
  const [isOpen, setIsOpen] = createSignal(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <div
        role="button"
        onClick={toggle}
        class="my-2 flex justify-start px-4 py-6 text-sm text-black"
      >
        {props.children[0]}
        <span class="ml-auto">
          <span hidden={isOpen()}>
            <AngleRightIcon />
          </span>
          <span hidden={!isOpen()}>
            <AngleDownIcon />
          </span>
        </span>
      </div>

      <div
        ref={ref}
        aria-hidden={!isOpen()}
        class="ease -mt-5 overflow-hidden text-gray-600 duration-300"
        style={
          isOpen() ? { height: `${ref?.scrollHeight}px` } : { height: "0" }
        }
      >
        {props.children[1]}
      </div>
    </div>
  );
}
