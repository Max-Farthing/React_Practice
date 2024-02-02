export default function Input({ label, value, onInputChange }) {

    return (
        <>
            <label>{label}</label>
            <input 
                type="text" 
                value={value}
                onChange={(e) => onInputChange(e.target.value)}
            />
        </>
    );
}