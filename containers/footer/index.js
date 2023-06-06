import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made by&nbsp;
      <Link href="https://www.linkedin.com/in/ensardogan/" target="/blank">
        Ensar Dogan
      </Link>
    </footer>
  );
}

export default Footer;
