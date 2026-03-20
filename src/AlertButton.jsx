export default function AlertButton({ message, children }) {
  function handleClick() {
    alert(message);
  }

  return <button onClick={handleClick}>{children}</button>;
}