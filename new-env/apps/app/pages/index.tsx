import styles from './index.module.css';
import { aLib } from '@new-env/a-lib';
import { bLib } from '@new-env/b-lib';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              <p>this is from a-lib: {aLib()}</p>
              <p>this is from b-lib: {bLib()}</p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
