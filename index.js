const editor = new EditorJS({
  holder: "editor-container",
  autofocus: true,
  tools: {
    math: FormuleMathematique,
  },
});
const commands = [
  "delete-next-char",
  "deleteBackward",
  "deleteForward",
  "deleteToMathFieldEnd",
  "deleteAll",
  "moveToNextChar",
  "moveToPreviousChar",
  "moveUp",
  "moveDown",
  "moveToMathFieldStart",
  "moveToMathFieldEnd",
  "moveToNextWord",
  "moveToPreviousWord",
  "redo",
  "undo",
  "cutToClipboard",
  "copyToClipboard",
  "pasteFromClipboard",
  "selectGroup",
  "selectAll",
  "extendToMathFieldStart",
  "extendToMathFieldEnd",
  "scrollToStart",
  "scrollToEnd",
  "scrollIntoView",
];
editor.isReady
  .then(() => {
    console.log("Editor.js is ready");

    // Insert a math block.
    // You should wait until this operation is complete before accessing the math field.
    return editor.blocks.insert(
      "math",
      { math: `\\ x^n + y^n = z^n ` },
      {},
      {},
      true
    );
  })
  .then(() => {
    // At this point, the math block should be inserted, so it's safer to access the math field.
    const formula = document.getElementById("math1");
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", () => {
        console.log("button clicked ==== ", buttons[i].innerText);
        if (formula !== document.activeElement) {
          formula.focus();
        }
        formula.executeCommand(commands[i]);
      });
    }
    const insertion = document.getElementById("insert");
    insertion.addEventListener("click", () => {
      console.log("insertion clicked");
      formula.executeCommand(["insert", "(#0)"]);
    });
    const annyangCommands = {};
    for (const command of commands) {
      annyangCommands[command] = function () {
        if (formula !== document.activeElement) {
          formula.focus();
        }
        formula.executeCommand(command);
      };
    }
    console.log(formula.macros);
    if (annyang && formula) {
      // Add Commands
      annyang.addCommands(annyangCommands);
      annyang.start();
    }
  })
  .catch((reason) => {
    console.log(`Editor.js initialization failed because of ${reason}`);
  });
