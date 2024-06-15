{
    // AutoCrop.jsx
    // 
    // This script scales the active comp to the size of the contents.

    function AutoCrop(thisObj) {
        var scriptName = "AutoCrop";

        function onCropClick() {
            var activeItem = app.project.activeItem;
            if ((activeItem == null) || !(activeItem instanceof CompItem)) {
                alert("Please select or open a composition first.", scriptName);
            } else {
                var activeComp = activeItem;

                // By bracketing the operations with begin/end undo group, we can 
                // undo the whole script with one undo operation.
                app.beginUndoGroup(scriptName);

                // Compute scale factor
                var rightMost = 0;
                var leftMost = activeComp.width;
                var topMost = activeComp.height;
                var bottomMost = 0;
                for (var i = 1; i <= activeComp.numLayers; ++i) {
                    var layer = activeComp.layer(i);
                    var sourceRect = layer.sourceRectAtTime(0, false);
                    var position = layer.property("Position").value;
                    var left = sourceRect.left + position[0];
                    var top = sourceRect.top + position[1];
                    rightMost = Math.max(left + sourceRect.width, rightMost);
                    leftMost = Math.min(left, leftMost);
                    topMost = Math.min(top, topMost);
                    bottomMost = Math.max(top + sourceRect.height, bottomMost);
                }

                // Set new comp width and height.
                activeComp.width = Math.floor(Math.abs(rightMost - leftMost));
                activeComp.height = Math.floor(Math.abs(bottomMost - topMost));

                // Shift position of layer
                for (var i = 1; i <= activeComp.numLayers; ++i) {
                    var layer = activeComp.layer(i);
                    var position = layer.property("Position").value;
                    layer.property("Position").setValue([position[0] - leftMost, position[1] - topMost]);
                }

                app.endUndoGroup();
            }
        }

        // 
        // This function puts up a modal dialog asking for a scale_factor.
        // Once the user enters a value, the dialog closes, and the script scales the comp.
        // 
        function BuildAndShowUI(thisObj) {
            // Create and show a floating palette.
            var my_palette = (thisObj instanceof Panel) ? thisObj : new Window("palette", scriptName, undefined, {
                resizeable: true
            });
            if (my_palette != null) {
                var res =
                    "group { \
			orientation:'column', alignment:['fill','top'], alignChildren:['left','top'], spacing:5, margins:[0,0,0,0], \
			introStr: StaticText { text:'Scale composition using:', alignment:['left','center'] }, \
			cmds: Group { \
				alignment:['fill','top'], \
				okButton: Button { text:'Crop', alignment:['fill','center'] }, \
			}, \
		}";

                my_palette.margins = [10, 10, 10, 10];
                my_palette.grp = my_palette.add(res);
                my_palette.grp.cmds.okButton.onClick = onCropClick;
                my_palette.onResizing = my_palette.onResize = function() {
                    this.layout.resize();
                }
            }

            return my_palette;
        }

        // 
        // The main script.
        //
        if (parseFloat(app.version) < 8) {
            alert("This script requires After Effects CS3 or later.", scriptName);
            return;
        }

        var my_palette = BuildAndShowUI(thisObj);
        if (my_palette != null) {
            if (my_palette instanceof Window) {
                my_palette.center();
                my_palette.show();
            } else {
                my_palette.layout.layout(true);
                my_palette.layout.resize();
            }
        } else {
            alert("Could not open the user interface.", scriptName);
        }
    }


    AutoCrop(this);
}