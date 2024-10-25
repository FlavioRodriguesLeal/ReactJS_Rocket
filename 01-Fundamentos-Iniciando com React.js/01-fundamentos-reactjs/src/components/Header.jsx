import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

//console.log(styles) // {header: '_header_13ykv_1'}
export function Header(){
    return(
        <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo do Ignite" />
        <strong>Ignite Feed</strong>
        </header>
    );
}