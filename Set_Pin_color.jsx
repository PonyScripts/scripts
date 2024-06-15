
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var my_layer, VM_temp_color, my_effect;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('vFCGc^|gtt6F@1*;Em?o');\nif (0 == ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:true,sortSelection:false, typeArray: [\"Layer\"]})).length) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('Y(^=i/vn_a^gT$O5t9W4');\n  (function(){\n  \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString('select layer');\n  \t\t\talert(message);\n  \t\t\tthrow new Error(message)\n  \t})();\n} else {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('xIhdO!|fGkRZK!SL=BI`');\n  var my_layer_list = $._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {recursively: false,onlySelected:true,sortSelection:false, typeArray: [\"Layer\"],returnItem:true});\n  for (var my_layer_index =0; my_layer_index< my_layer_list.length;my_layer_index++) {\n    try { my_layer = $._extAutomationBlocks.AeUtility.toPath(my_layer_list[my_layer_index]);}\n  \t\tcatch(e) {\n  \t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n  \t\t\tcontinue;\n  \t\t}\n  \t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('!1z3z@7Gc/W|WAW0wZ?1');\n    VM_temp_color = ($._extAutomationBlocks.AeLayer.getAttribute(my_layer, 'LABEL_COLOR_HEX'));\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('QN)J^Ix{V}t?C@b}8qFU');\n    var my_effect_list = $._extAutomationBlocks.AeProperty.getEffects(($._extAutomationBlocks.AeComp.getActiveComp()), {direction:\"FORWARD\",resultType:\"ITEM\"});\n    for (var my_effect_index =0; my_effect_index< my_effect_list.length;my_effect_index++) {\n      try { my_effect = $._extAutomationBlocks.AeUtility.toPath(my_effect_list[my_effect_index]);}\n    \t\tcatch(e) {\n    \t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n    \t\t\tcontinue;\n    \t\t}\n    \t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('Xq16t4M^BUMwtU}Ti?5y');\n      if ('Pin' == ($._extAutomationBlocks.AeProperty.getAttribute(my_effect, 'NAME'))) {\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('S{n;7/=LWlE/:_w:rEDW');\n        $._extAutomationBlocks.AeProperty.setAttribute(($._extAutomationBlocks.AeLayer.toLayer(my_layer) + '/' + 'ADBE Effect Parade/Pseudo\\\\/Duik pin02/Pseudo\\\\/Duik pin02-0001'), 'VALUE', VM_temp_color);\n      }\n      $._extAutomationBlocks.all.messageAboutExecuteBlock('QN)J^Ix{V}t?C@b}8qFU');\n    }\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('xIhdO!|fGkRZK!SL=BI`');\n  }\n}\n")});
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
	