const vscode = require('vscode');

function activate(context) {
  const cmd = vscode.commands.registerCommand('copy-for-claude.copySelection', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const sel = editor.selection;
    const relativePath = vscode.workspace.asRelativePath(editor.document.uri);

    let ref;
    if (sel.isEmpty) {
      ref = `${relativePath}:${sel.start.line + 1}`;
    } else if (sel.start.line === sel.end.line) {
      ref = `${relativePath}:${sel.start.line + 1}:${sel.start.character + 1}-${sel.end.character + 1}`;
    } else {
      ref = `${relativePath}:${sel.start.line + 1}:${sel.start.character + 1}-${sel.end.line + 1}:${sel.end.character + 1}`;
    }

    await vscode.env.clipboard.writeText(ref);
    vscode.window.setStatusBarMessage(`Copied: ${ref}`, 3000);
  });

  context.subscriptions.push(cmd);
}

function deactivate() {}

module.exports = { activate, deactivate };
