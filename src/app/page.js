import Container from '@/components/Container'
import styles from './page.module.css'
import Button from '@/components/Button'
import Link from "next/link";

export default function Home() {
  return (
      <Container>
        <Link
          href="/card"
          style={{ textAlign: "end", display: "block", marginBottom: 20 }}
        >
          <Button type="button">Create new</Button>
        </Link>
        home
      </Container>
  );
}
