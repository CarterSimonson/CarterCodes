import { badge } from './styles.module.scss';

export default function Badge({ children, color, href, className }) {
    const colorStyle = {
        backgroundColor: color
    };

    return <a href={href} className={`${badge} ${className}`} style={colorStyle} target='_blank' rel='noopener'>
        { children }
    </a>
}