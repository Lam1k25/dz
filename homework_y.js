function clearForm(form) {
  const fields = form.querySelectorAll("input, textarea, select");

  for (const field of fields) {
    const tag = field.tagName.toLowerCase();
    const type = field.type;

    if (tag === "input") {
      
      if (
        type === "button" ||
        type === "submit" ||
        type === "reset" ||
        type === "hidden" ||
        type === "file"
      ) {
        continue;
      }

      
      if (type === "checkbox" || type === "radio") {
        field.checked = false;
      } else {
        field.value = "";
      }
    }

    if (tag === "textarea") {
      field.value = "";
    }

    if (tag === "select") {
      field.selectedIndex = 0; 
    }
  }
}


const form = document.querySelector("form");
clearForm(form);