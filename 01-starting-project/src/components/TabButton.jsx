export default function TabButton(props) {
    return (
        <li>
            <button className={props.isSelected ? 'active' : undefined} {...props}>{props.children}</button>
        </li>
    );
}