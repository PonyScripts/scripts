
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var my_item, text_eyeball;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('3Zf=HFk#e.Bo5|W@i6,m');\nvar my_item_list = $._extAutomationBlocks.AeProject.getAllItemsInAeBin((''),{recursively: true, onlySelected: (false),typeArray:[\"CompItem\"]});\nfor (var my_item_index =0; my_item_index< my_item_list.length;my_item_index++) {\n  try { my_item = $._extAutomationBlocks.AeUtility.toPath(my_item_list[my_item_index]);}\n\t\tcatch(e) {\n\t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n\t\t\tcontinue;\n\t\t}\n\t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('Q4fvy;VjrjRM)_*#3(XB');\n  $._extAutomationBlocks.AeLayer.setAttribute(($._extAutomationBlocks.AeLayer.getLayers(my_item, {onlySelected:false,sortSelection:false, typeArray: [\"TextLayer\"]})), 'ENABLED', text_eyeball);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('3Zf=HFk#e.Bo5|W@i6,m');\n}\n")});
		}
		catch(err){
			myResult = JSON.stringify({status:"ERROR", data:""+err.message+" (line "+(err.line)+")"});
		}
		finally {
			app.endUndoGroup();
			try{
			$._extAutomationBlocks.all.abDestructor.notifyEndPointReached("main script");
			}
			catch(err){
				myResult = JSON.stringify({status:"ERROR", data:""+err.message+" (line "+(err.line)+")"});
			}
		}
		return myResult;
	})(this)
	