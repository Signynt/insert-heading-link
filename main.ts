import {
	App,
	MarkdownView,
	Plugin,
	Editor,
	PluginSettingTab,
	Setting
} from 'obsidian';

export default class InsertHeadingLink extends Plugin {

	async onload() {
		console.log('loading insert-heading-link');

			this.addCommand({
				id: 'addHeadingLink',
				name: 'Add Heading Link',
				hotkeys: [
					{
						modifiers: ['Mod', 'Shift'],
						key: 'L',
					},
				],
				editorCallback: (editor) => this.addHeadingLink(editor),
			});

	}

private addHeadingLink(editor: Editor) {
		const view = this.app.workspace.getActiveViewOfType(MarkdownView);
		if (!view) return;
		const selected_text = editor.getSelection()
		editor.replaceSelection(
			'[[##'+selected_text+']]'
		);
		const position = editor.getCursor();
		editor.setCursor({ line: position.line, ch: position.ch - 2})
	}

}
