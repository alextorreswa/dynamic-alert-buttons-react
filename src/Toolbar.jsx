import AlertButton from "./AlertButton";

export default function Toolbar() {
  const buttons = [
    { id: 1, message: "Downloading!", children: "Download File" },
    { id: 2, message: "Sharing!", children: "Share Document" },
    { id: 3, message: "Printing!", children: "Print Page" },
    { id: 4, message: "", children: "Empty Message" },
    { id: 5, message: "This is a very long alert message for testing.", children: "Long Message" },
    { id: 6, message: "Done! ✅", children: "Special Characters" },
  ];

  return (
    <div>
      {buttons.map((button) => (
        <AlertButton
          key={button.id}
          message={button.message}
        >
          {button.children}
        </AlertButton>
      ))}
    </div>
  );
}