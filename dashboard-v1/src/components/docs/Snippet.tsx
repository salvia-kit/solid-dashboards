export function Snippet() {
  return (
    <pre class="max-w-full overflow-x-auto rounded border bg-gray-100 px-4 py-1 font-mono text-sm text-black">
      {`[ 
  {
    section: "Apps",
    content: [
      {
        title: "All Apps",
        icon: AppsIcon,
        link: "/",
      },
      {
        title: "Updates",
        icon: SyncIcon,
        link: "/admin/updates"
      }
    ]
  }
]
`}
    </pre>
  );
}
