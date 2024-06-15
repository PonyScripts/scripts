
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var user_input_1, my_layer;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('sk;EN;N)C]/of-i}ZpQu');\n\n\t dialogResult = $._extAutomationBlocks.all.EsDialogs.showCustomDialog([{type:'CHECKBOX', value:user_input_1,label:'lock '}],{allowCancel:true});\n\t if(!dialogResult) throw new Error(\"user canceled\");\n\t user_input_1=dialogResult[0];\n\t $._extAutomationBlocks.all.messageAboutExecuteBlock('^f=Q}4K(jHcsM!#}j?hE');\nvar my_layer_list = $._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {recursively: false,onlySelected:false,sortSelection:false, typeArray: [\"Layer\"],returnItem:true});\nfor (var my_layer_index =0; my_layer_index< my_layer_list.length;my_layer_index++) {\n  try { my_layer = $._extAutomationBlocks.AeUtility.toPath(my_layer_list[my_layer_index]);}\n\t\tcatch(e) {\n\t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n\t\t\tcontinue;\n\t\t}\n\t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('cosh|Q$Ifo%.fM|!}6%p');\n  $._extAutomationBlocks.AeLayer.setAttribute(my_layer, 'LOCKED', user_input_1);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('^f=Q}4K(jHcsM!#}j?hE');\n}\n")});
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
	