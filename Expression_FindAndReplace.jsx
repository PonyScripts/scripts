
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var user_input_1, user_input_2, j, exp;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('KIzM.06lVlweEecC})La');\n\n\t dialogResult = $._extAutomationBlocks.all.EsDialogs.showCustomDialog([{type:'TEXT_SINGLELINE', value:user_input_1,label:'find'},{type:'TEXT_SINGLELINE', value:user_input_2,label:'replace'}],{allowCancel:true});\n\t if(!dialogResult) throw new Error(\"user canceled\");\n\t user_input_1=dialogResult[0];\nuser_input_2=dialogResult[1];\n\t $._extAutomationBlocks.all.messageAboutExecuteBlock('j17gO{p~}3.0jfVdk_Z$');\nvar j_list = ($._extAutomationBlocks.AeProperty.getProperties(($._extAutomationBlocks.AeComp.getActiveComp()), {\n\t\tonlySelected:true,\n\t\tonlyKeyframed:false,\n\t\tonlyKeyframeable:false,\n\t\tonlyWithExpressionApplied:false,\n\t\tonlyIfExpressionCanBeApplied:false,\n\t\tonlyOfType: null,\n\t}));\nfor (var j_index =0; j_index< j_list.length;j_index++) {\n  try { j = j_list[j_index];}\n\t\tcatch(e) {\n\t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n\t\t\tcontinue;\n\t\t}\n\t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('WNd6gN[EVDTKTnedIb8,');\n  exp = ($._extAutomationBlocks.AeProperty.getAttribute(j, 'EXPRESSION'));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('#g-BH/Ofp0lMmfAChA7C');\n  $._extAutomationBlocks.AeProperty.setAttribute(j, 'EXPRESSION', ($._extAutomationBlocks.all.EsString.stringReplace(exp,user_input_1,user_input_2,'REPLACE_ALL',(false),(false))));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('j17gO{p~}3.0jfVdk_Z$');\n}\n")});
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
	