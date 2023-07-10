
      let originalText;
      let editableTextElement = document.getElementById('editableText');

      function startEditing() {
        originalText = editableTextElement.textContent;
        editableTextElement.contentEditable = true;
        editableTextElement.focus();
      }

      function saveChanges() {
        editableTextElement.contentEditable = false;
        // Perform your logic to save the changes
      }

      function cancelEditing() {
        editableTextElement.contentEditable = false;
        editableTextElement.textContent = originalText;
      }
   