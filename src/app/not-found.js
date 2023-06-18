import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        Go to <Link href="/login">login page</Link>
      </p>
    </div>
  );
}
