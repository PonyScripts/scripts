
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var user_input_1, VM_Property, VM_Value, user_input_2, my_layer, my_effect;\n\n// Describe this function...\nfunction do_something(VM_Property, VM_Value) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('Vn#+/@]U]Q%B6cV[Y)J!');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('?C_W+6PmTf]+^YL-$],5');\n  var my_layer_list = $._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {recursively: false,onlySelected:true,sortSelection:false, typeArray: [\"Layer\"],returnItem:true});\n  for (var my_layer_index =0; my_layer_index< my_layer_list.length;my_layer_index++) {\n    try { my_layer = $._extAutomationBlocks.AeUtility.toPath(my_layer_list[my_layer_index]);}\n  \t\tcatch(e) {\n  \t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n  \t\t\tcontinue;\n  \t\t}\n  \t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock(')_Uqy{6cGQ%2A_J41el`');\n    var my_effect_list = $._extAutomationBlocks.AeProperty.getEffects(my_layer, {direction:\"FORWARD\",resultType:\"ITEM\"});\n    for (var my_effect_index =0; my_effect_index< my_effect_list.length;my_effect_index++) {\n      try { my_effect = $._extAutomationBlocks.AeUtility.toPath(my_effect_list[my_effect_index]);}\n    \t\tcatch(e) {\n    \t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n    \t\t\tcontinue;\n    \t\t}\n    \t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('T;:]KQIleGlO,+gxl*~7');\n      if (($._extAutomationBlocks.AeProperty.getAttribute(my_effect, 'NAME')) == VM_Property) {\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('kOcR7W.Y]5%NqG.!U%:.');\n        $._extAutomationBlocks.AeProperty.setAttribute((String(my_effect) + '/ADBE Slider Control-0001'), 'VALUE', VM_Value);\n      }\n      $._extAutomationBlocks.all.messageAboutExecuteBlock(')_Uqy{6cGQ%2A_J41el`');\n    }\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('?C_W+6PmTf]+^YL-$],5');\n  }\n}\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('v]x8eCDdz}e!LeEUXy;=');\nuser_input_1 = 'Position|Rotation';\n$._extAutomationBlocks.all.messageAboutExecuteBlock('`g5.O,A;cj$v!fWYn#{|');\n\n\t dialogResult = $._extAutomationBlocks.all.EsDialogs.showCustomDialog([{type:'DROPDOWN', value:user_input_1,label:'Set Amplitude of'},{type:'NUMBER_FLOAT', value:user_input_2,label:'with Value of'}],{allowCancel:true});\n\t if(!dialogResult) throw new Error(\"user canceled\");\n\t user_input_1=dialogResult[0];\nuser_input_2=dialogResult[1];\n\t $._extAutomationBlocks.all.messageAboutExecuteBlock('v7,UBxfvSG?+rq.WkUc{');\nif (user_input_1 == 'Position') {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('MP#fEu!`.IiB$_ag_go/');\n  do_something('Pos|Wig Amp', user_input_2);\n} else if (user_input_1 == 'Rotation') {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('{}LncdPUMqE7{2uPL8$(');\n  do_something('Rot|Wig Amp', user_input_2);\n} else {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('yQuX7?(;pYA/P_`UB~i,');\n  (function(){\n  \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString('Dalbayob');\n  \t\t\talert(message);\n  \t\t\tthrow new Error(message)\n  \t})();\n}\n")});
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
	