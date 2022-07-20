import styles from './index.less';
import {vsp} from '@dne/vsp'
export default function IndexPage() {
  vsp();
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
