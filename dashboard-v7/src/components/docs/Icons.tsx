interface IconsProps {
  class?: string;
}

export function FolderIcon(props: IconsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={`text-yellow-400 ${props.class || "mt-0.5 h-5 w-5"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
        clip-rule="evenodd"
      />
      <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
    </svg>
  );
}

export function FileIcon(props: IconsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={props.class || "h-5 w-5"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

export function JSXIcon(props: IconsProps) {
  return (
    <div class={props.class || "h-6 w-6"}>
      <img src="/images/jsx.png" alt="Jsx" />
    </div>
  );
}

export function TSIcon(props: IconsProps) {
  return (
    <div class={props.class || "h-5 w-5"}>
      <img src="/images/ts.svg" alt="Jsx" />
    </div>
  );
}
