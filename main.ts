import {
	Plugin,
	Editor,
} from 'obsidian';

export default class InsertHeadingLink extends Plugin {

	onload(): void {
		this.addCommand({
			id: 'addHeadingLink',
			name: 'Add Heading Link',
			editorCallback: (editor) => this.addHeadingLink(editor),
		});

	}

	onunload(): void {
	}

	private addHeadingLink(editor: Editor): void {
		const selectedText = editor.getSelection();
		editor.replaceSelection('[[##' + selectedText + ']]');
		const position = editor.getCursor();
		editor.setCursor({ line: position.line, ch: position.ch - 2 });
	}

}
