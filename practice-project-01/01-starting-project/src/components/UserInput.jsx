import Input from "./Input";

export default function UserInput({ initial, annual, expected, length }) {
    return (
        <div id="user-input">
            <Input label="Initial Investment" />
            <Input label="Annual Investment" />
            <Input label="Expected Return" />
            <Input label="Duration" />
        </div>
    );
}