import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <p>
        Type <Link href={"/dashboard/settings"}>/dasboard/settings</Link> for
        simple route
      </p>
      <p>
        Type <Link href={"/about"}>/(marketing)/about</Link> for Organize routes
        without affecting the URL path
      </p>
      <p>
        Go to Post page with Params <Link href={"/post/2"}>/post/id</Link> for
        Organize routes with params
      </p>
      <p>
        Go to Post page with multiple Params{" "}
        <Link href={"/wizard/cq/estimate/2"}>/wizard/product/type/id</Link>
      </p>
    </main>
  );
}
