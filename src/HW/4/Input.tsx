type InputPropsType = {
	currentText: string; // текущее значение
	setCurrentText: React.Dispatch<React.SetStateAction<string>>; // функция обновления состояния
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(event.currentTarget.value); // обновляем состояние
	};

	return (
		<input
			id={'hw04-input'}
			type="text"
			value={props.currentText}
			onChange={onChangeHandler}
		/>
	);
};
