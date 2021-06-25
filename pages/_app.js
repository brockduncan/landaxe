import "./css/styles.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
