
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var user_input_1, VM_var, VM_new_layer, VM_all_layer;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('.b3[L+01Dm79fIaJ|QgJ');\nif (true) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('9pbc(}kVh/_|i-54nQ0A');\n  if (1 == ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:true,sortSelection:false, typeArray: [\"TextLayer\"]})).length) {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('sSH?^(n(k:#cK3[jtx*{');\n\n    \t dialogResult = $._extAutomationBlocks.all.EsDialogs.showCustomDialog([{type:'TEXT_MULTILINE', value:user_input_1,label:'Text'}],{allowCancel:true});\n    \t if(!dialogResult) throw new Error(\"user canceled\");\n    \t user_input_1=dialogResult[0];\n    \t $._extAutomationBlocks.all.messageAboutExecuteBlock('@T(R5AM3c$w4vQ:95qee');\n    VM_var = ($._extAutomationBlocks.AeLayer.getOnlySelectedLayer(($._extAutomationBlocks.AeComp.getActiveComp())));\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('t:!0Tn6gd[tyUo]%{jgN');\n    VM_new_layer = $._extAutomationBlocks.AeLayer.duplicate(VM_var);\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('Xa?7[6X$/pK+$5.fVAG(');\n    $._extAutomationBlocks.AeComp.selectLayers(VM_new_layer, {mode:\"SELECT\"});\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('uvW+lc:vis)(,mq$/|cd');\n    $._extAutomationBlocks.AeLayer.setAttribute(($._extAutomationBlocks.AeLayer.getOnlySelectedLayer(($._extAutomationBlocks.AeComp.getActiveComp()))), 'INDEX', (($._extAutomationBlocks.AeLayer.getAttribute(($._extAutomationBlocks.AeLayer.getOnlySelectedLayer(($._extAutomationBlocks.AeComp.getActiveComp()))), 'INDEX')) - 1));\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('qfVUDF{zv@7yOuZsl(2v');\n    VM_all_layer = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:false,sortSelection:false, typeArray: [\"Layer\"]}));\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('CTE2|`pJ,5nLTA@0k5^B');\n    $._extAutomationBlocks.AeLayer.setAttribute(($._extAutomationBlocks.AeLayer.getOnlySelectedLayer(($._extAutomationBlocks.AeComp.getActiveComp()))), 'START_TIME', ($._extAutomationBlocks.AeLayer.getAttribute((VM_all_layer[((($._extAutomationBlocks.AeLayer.getAttribute(($._extAutomationBlocks.AeLayer.getOnlySelectedLayer(($._extAutomationBlocks.AeComp.getActiveComp()))), 'INDEX')) + 1) - 1)]), 'START_TIME')));\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('nEmrS7OSpfucVU$kWI%A');\n    $._extAutomationBlocks.AeProperty.setAttribute(($._extAutomationBlocks.AeLayer.toLayer(($._extAutomationBlocks.AeLayer.getOnlySelectedLayer(($._extAutomationBlocks.AeComp.getActiveComp())))) + '/' + 'ADBE Text Properties/ADBE Text Document'), 'VALUE', user_input_1);\n    $._extAutomationBlocks.all.messageAboutExecuteBlock(')@8[g]+C1mlGn6SR_X8!');\n    $._extAutomationBlocks.AeProjectItem.setAttribute(($._extAutomationBlocks.AeComp.getActiveComp()), 'TIME', (($._extAutomationBlocks.AeLayer.getAttribute(($._extAutomationBlocks.AeLayer.getOnlySelectedLayer(($._extAutomationBlocks.AeComp.getActiveComp()))), 'START_TIME')) + 1));\n  } else {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('Gs-}b*yc6RWwX(Efm]6[');\n    (function(){\n    \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString('only one text layer allowed');\n    \t\t\talert(message);\n    \t\t\tthrow new Error(message)\n    \t})();\n  }\n}\n")});
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
	