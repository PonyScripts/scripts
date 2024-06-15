
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var Transition, list, Transition_duration, VM_selected_layer, new_layer_var;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('JB-nENCE)(J?:nk9fX^9');\nTransition = ($._extAutomationBlocks.AeComp.toComp(($._extAutomationBlocks.AeComp.getActiveComp())) + '::' + 'Transition x2');\n$._extAutomationBlocks.all.messageAboutExecuteBlock('7{IS]vBZuw[Pr*k-wL;,');\nlist = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:false,sortSelection:false, typeArray: [\"Layer\"]}));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('VI_1t2=hYW7$00Q/W#_3');\nif (list.indexOf(Transition) + 1 != 0) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('5fxUVl6PI;Jz;I/C{Igt');\n  Transition_duration = (($._extAutomationBlocks.AeLayer.getAttribute(Transition, 'OUT_POINT')) - ($._extAutomationBlocks.AeLayer.getAttribute(Transition, 'START_TIME'))) / 2;\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('`f(..3R/UaN^2dD/xPTf');\n  VM_selected_layer = ($._extAutomationBlocks.AeLayer.getOnlySelectedLayer(($._extAutomationBlocks.AeComp.getActiveComp())));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('/ct)x3vtt0JMp$Zplap4');\n  new_layer_var = $._extAutomationBlocks.AeLayer.duplicate(Transition);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('v{+=z+dd:/lZF^%gVo#d');\n  $._extAutomationBlocks.AeLayer.setAttribute(new_layer_var, 'INDEX', ($._extAutomationBlocks.AeLayer.getAttribute(VM_selected_layer, 'INDEX')));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('gOjI,UN$|}InlZcmS2At');\n  $._extAutomationBlocks.AeLayer.setAttribute(new_layer_var, 'START_TIME', (($._extAutomationBlocks.AeLayer.getAttribute(VM_selected_layer, 'START_TIME')) - Transition_duration));\n} else {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('4A3!uwZGYgM73+?S549L');\n  (function(){\n  \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString('no transition');\n  \t\t\talert(message);\n  \t\t\tthrow new Error(message)\n  \t})();\n}\n")});
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
	