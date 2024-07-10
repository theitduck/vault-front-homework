import React, { ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes } from 'react';

type Props = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'> & {
	onChange: (value: string) => void;
};

const TextInput = (props: Props) => {
	const { onChange, ...p } = props;
	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => onChange(e.target.value);
	return <input className="border p-2 rounded w-full shadow" type="search" onChange={handleChange} {...p} />;
};

export default TextInput;
