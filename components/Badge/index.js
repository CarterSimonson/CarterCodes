import styles from "./Badge.module.scss";

export default function Badge(props) {
    const { children, icon, color, href, className } = props;

    const colorStyle = {
        backgroundColor: color
    };

    return <a href={href} className={`${styles.badge} ${className}`} style={colorStyle} target="_blank" rel="noopener">
        { children }
        {
            icon ? <i className={`${styles.icon} fab ${icon}`}></i> : null
        }
    </a>
}