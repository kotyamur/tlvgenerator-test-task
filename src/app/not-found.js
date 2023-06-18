import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        color: "#010101",
      }}
    >
      <p>404</p>
      <p>Sorry, we couldn't find that page :(</p>
      <Link to="/">Please go to the main page</Link>
    </div>
  );
}
