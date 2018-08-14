CKEDITOR.plugins.add('comments', {
	requires: 'dialog',
	icons: 'comments',
	lang: 'en',
	init: function (editor) {
		var pluginName = 'comments';
		// Register the dialog.
		CKEDITOR.dialog.add(pluginName, this.path + 'dialogs/comments.js');

		// Register the command.
		editor.addCommand('comments', new CKEDITOR.dialogCommand('comments'));

		// Register the toolbar button.
		editor.ui.addButton && editor.ui.addButton('Comments', {
			label: editor.lang.common.comments,
			command: pluginName,
			toolbar: 'others,10'
		});

		// If the "menu" plugin is loaded, register the menu items.
		if (editor.addMenuItems) {
			editor.addMenuItems({
				image: {
					label: editor.lang.common.comments,
					command: 'comments',
					group: 'others'
				}
			});
		}
	}
});
