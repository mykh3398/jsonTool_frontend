<template>
    <div class="json-formatter-container">
      <!-- Текстова область для введення JSON -->
      <textarea
        v-model="jsonInput"
        placeholder="Введіть ваш JSON тут..."
        class="json-input"
      ></textarea>
  
      <!-- Кнопки форматування -->
      <div class="button-group">
        <button @click="formatPretty" class="action-button">Pretty Format</button>
        <button @click="formatFlat" class="action-button">Flat Format</button>
        <button @click="downloadAsMarkdown" class="action-button">
          Export as Markdown Table
        </button>
      </div>
  
      <!-- Результат форматування -->
      <pre class="json-output">{{ formattedJson }}</pre>
    </div>
  </template>
  
  <script>
  export default {
    name: "JsonFormatter",
    data() {
      return {
        jsonInput: "", // Вхідний JSON
        formattedJson: "", // Відформатований JSON
      };
    },
    methods: {
      // Pretty Format: форматування з відступами
      formatPretty() {
        try {
          const json = JSON.parse(this.jsonInput);
          this.formattedJson = JSON.stringify(json, null, 2);
        } catch (error) {
          this.formattedJson = "Помилка: Некоректний JSON";
        }
      },
  
      // Flat Format: однолінійний формат JSON
      formatFlat() {
        try {
          const json = JSON.parse(this.jsonInput);
          this.formattedJson = JSON.stringify(json);
        } catch (error) {
          this.formattedJson = "Помилка: Некоректний JSON";
        }
      },
  
      // Завантаження JSON у вигляді Markdown Table
      downloadAsMarkdown() {
        try {
          const json = JSON.parse(this.jsonInput);
          const markdownTable = this.convertJsonToMarkdown(json);
  
          // Створюємо файл і завантажуємо
          const blob = new Blob([markdownTable], { type: "text/markdown" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "data_table.md";
          link.click();
        } catch (error) {
          alert("Помилка: Некоректний JSON");
        }
      },
  
      // Конвертація JSON у Markdown Table
      convertJsonToMarkdown(json) {
        if (Array.isArray(json)) {
          // Отримуємо заголовки таблиці (ключі об'єкта)
          const headers = Object.keys(json[0] || {});
          const headerRow = `| ${headers.join(" | ")} |`;
          const separatorRow = `| ${headers.map(() => "---").join(" | ")} |`;
  
          // Генеруємо рядки таблиці
          const dataRows = json
            .map((item) => {
              return `| ${headers.map((key) => item[key] || "").join(" | ")} |`;
            })
            .join("\n");
  
          return `${headerRow}\n${separatorRow}\n${dataRows}`;
        } else {
          return "JSON не є масивом об'єктів!";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .json-formatter-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    max-width: 800px;
    margin: auto;
  }
  
  .json-input {
    width: 100%;
    height: 200px;
    font-family: monospace;
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .button-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  
  .action-button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1rem;
    transition: background 0.3s;
  }
  
  .action-button:hover {
    background-color: #45a049;
  }
  
  .json-output {
    background-color: #f4f4f4;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: monospace;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  </style>
  