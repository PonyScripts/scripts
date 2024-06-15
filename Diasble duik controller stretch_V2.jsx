
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var VM_Selected_layers, my_layer;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('(yJ@t@4oig`r}Z|-et@u');\nVM_Selected_layers = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:true,sortSelection:false, typeArray: [\"Layer\"]}));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('YV2ilV@EoymIiHU:5.x7');\n$._extAutomationBlocks.all.log(VM_Selected_layers);\n$._extAutomationBlocks.all.messageAboutExecuteBlock('7g[!oIpj(?uR)PGPuV?4');\nfor (var my_layer_index =0; my_layer_index< VM_Selected_layers.length;my_layer_index++) {\n  try { my_layer = VM_Selected_layers[my_layer_index];}\n\t\tcatch(e) {\n\t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n\t\t\tcontinue;\n\t\t}\n\t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('Fs+%(_RsX=qXL3l*6=XS');\n  $._extAutomationBlocks.AeProperty.setAttribute((String(my_layer) + '/ADBE Effect Parade/Pseudo\\\\/DUIK 2layer ik v7/Pseudo\\\\/DUIK 2layer ik v7-0023'), 'VALUE', false);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('7g[!oIpj(?uR)PGPuV?4');\n}\n")});
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
	