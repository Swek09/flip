function flipCoin() {
	// Получаем ссылки на элементы кнопки, результата и истории
	const flipButton = document.getElementById("flip-button");
	const result = document.getElementById("result");
	const history = document.getElementById("history");
  
	// Запрещаем повторное нажатие на кнопку
	flipButton.disabled = true;
  
	// Генерируем случайное число от 0 до 1
	const randomNum = Math.floor(Math.random() * 2);
  
	// Определяем результат (0 - орел, 1 - решка)
	const flipResult = randomNum === 0 ? "Орел" : "Решка";
  
	// Показываем результат на странице
	if (flipResult == "Орел"){
		result.textContent = `Выпал ${flipResult}!`;
	}
	else{
		result.textContent = `Выпала ${flipResult}!`;
	}
  
	// Создаем новую строку для таблицы истории
	const newRow = document.createElement("tr");
  
	// Создаем ячейки для строки (для результата и даты)
	const resultCell = document.createElement("td");
	const dateCell = document.createElement("td");
  
	// Получаем текущую дату и время
	const now = new Date();
	const formattedDate = now.toLocaleString();
  
	// Устанавливаем текст для ячеек
	resultCell.textContent = flipResult;
	dateCell.textContent = formattedDate;
  
	// Добавляем ячейки в строку
	newRow.appendChild(resultCell);
	newRow.appendChild(dateCell);
  
	// Добавляем строку в таблицу истории
	history.appendChild(newRow);
  
	// Разрешаем нажимать на кнопку снова
	setTimeout(() => {
	  flipButton.disabled = false;
	}, 1000);
  }
  