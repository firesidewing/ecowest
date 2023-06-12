import { component$ } from '@builder.io/qwik';
import { EcoWestLogo } from '../icons/ecowest';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <EcoWestLogo height={50} width={143} />
          </a>
        </div>
        <ul>
          <li>
            <a href="/" target="_blank">
              Home
            </a>
          </li>
          <li>
            <a href="/who-we-are" target="_blank">
              Who We Are
            </a>
          </li>
          <li>
            <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
              What We Do
            </a>
          </li>
          <li>
            <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
              Careers
            </a>
          </li>
          <li>
            <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
