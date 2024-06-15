
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var user_input_1, my_layer, vm_temp_layer_startTime;\n\nfunction esMathRandomInt(a, b) {\n  if (a > b) {\n    // Swap a and b to ensure a is smaller.\n    var c = a;\n    a = b;\n    b = c;\n  }\n  return Math.floor(Math.random() * (b - a + 1) + a);\n}\n\nfunction esMathRandomFloat(a, b) {\n  if (a > b) {\n    // Swap a and b to ensure a is smaller.\n    var c = a;\n    a = b;\n    b = c;\n  }\n  return (Math.random() * (b - a) + a);\n}\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('M7ab~$W^Z2r5GUApglOg');\nuser_input_1 = 42;\n$._extAutomationBlocks.all.messageAboutExecuteBlock('s2.e$@_I^l2K:xY2Jzlv');\n\n\t dialogResult = $._extAutomationBlocks.all.EsDialogs.showCustomDialog([{type:'NUMBER_INT', value:user_input_1,label:'set max ramdom offset (frames)'}],{allowCancel:true});\n\t if(!dialogResult) throw new Error(\"user canceled\");\n\t user_input_1=dialogResult[0];\n\t $._extAutomationBlocks.all.messageAboutExecuteBlock('Ifnbj8*Xxe#lYxy29OiX');\nvar my_layer_list = $._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {recursively: false,onlySelected:true,sortSelection:false, typeArray: [\"Layer\"],returnItem:true});\nfor (var my_layer_index =0; my_layer_index< my_layer_list.length;my_layer_index++) {\n  try { my_layer = $._extAutomationBlocks.AeUtility.toPath(my_layer_list[my_layer_index]);}\n\t\tcatch(e) {\n\t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n\t\t\tcontinue;\n\t\t}\n\t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('(K.7S.hLGPhCxJ_s1uN(');\n  vm_temp_layer_startTime = ($._extAutomationBlocks.AeLayer.getAttribute(my_layer, 'START_TIME'));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('%isAUsrpRO.d3?VcQdcc');\n  $._extAutomationBlocks.AeLayer.setAttribute(my_layer, 'START_TIME', (esMathRandomFloat(vm_temp_layer_startTime, vm_temp_layer_startTime + user_input_1 / ($._extAutomationBlocks.AeComp.getAttribute(($._extAutomationBlocks.AeComp.getActiveComp()), 'FRAME_RATE')))));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('Ifnbj8*Xxe#lYxy29OiX');\n}\n")});
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
	