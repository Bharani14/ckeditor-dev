CKEDITOR.dialog.add('comments', function (editor) {
    var comment_data = '';
    var comment = function(data){
        var comment_element = editor.document.createElement('dia_comments');
    }
	return {
		title: editor.lang.comments.title,
		minWidth: 400,
		minHeight: 200,
		contents: [{
			id: 'general',
			elements: [{
					type: 'html',
					html: editor.lang.comments.description
				},
				{
					type: 'textarea',
					id: 'contents',
					label: editor.lang.comments.label,
					validate: CKEDITOR.dialog.validate.notEmpty('The Displayed Text field cannot be empty.'),
					required: true,
					commit: function (data) {
                        data.contents = this.getValue();
					},
					onShow: function () {
                        console.log(comment_data);
                        if (comment_data != '') {
                        	this.setValue(comment_data);
                        } else {
                        	this.setValue('');
                        }
					}
				}
			]
		}],
		onOk: function () {
            var dialog = this, 
                data = {};                
                var comment_id = generate_id();
                var user_id = logged_user_id;
                var role_id = logged_user_role_id;
                var stage_id = logged_user_stage_id;
                var user_name = logged_user_name;
                var current_timestamp = + new Date();
                var selected_text=editor.getSelection().getSelectedText();	
                console.log(selected_text);	
                if (comment_data != '') {
                    //Edit existing comments in the editor.
                } else{
                    //Insert new comment to the editor.
                    var range = editor.getSelection().getRanges()[ 0 ];
                    console.log(range.startContainer);
                    console.log(range.startContainer.getParent());
                }

                var json_text = '{"comment_id":'+comment_id+',"user_id":'+user_id+',"role_id":'+role_id+',"stage_id":'+stage_id+',"user_name":"'+user_name+'","current_timestamp":'+current_timestamp+'}';
                var json_obj = JSON.parse(json_text);
                comment(json_obj);

		}
	};
});