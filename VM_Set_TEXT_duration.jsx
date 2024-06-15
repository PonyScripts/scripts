
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var VM_set_layer, VM_layer_list, VM_comp_frameRate, i, VM_layer_i;\n\n// Describe this function...\nfunction VM_set_Duration(VM_set_layer) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('=@qT*?$[e]j)$lXkcS}B');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('_DX5*$/v%xY;(+:0ELo5');\n  $._extAutomationBlocks.AeLayer.setAttribute(VM_set_layer, 'OUT_POINT', (($._extAutomationBlocks.AeLayer.getAttribute(VM_set_layer, 'START_TIME')) + Math.ceil(($._extAutomationBlocks.AeProperty.getAttribute(($._extAutomationBlocks.AeLayer.toLayer(VM_set_layer) + '/' + 'ADBE Text Properties/ADBE Text Document'), 'VALUE')).length * 4 * (1 / VM_comp_frameRate))));\n}\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('8{f*+Y%41,p2Axb|_Ci[');\nif (false) {\n}\n$._extAutomationBlocks.all.messageAboutExecuteBlock('TMhxU0@[px:#PrtU5RBf');\nif (true) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('5^F0E/36`m{`ftAo}l4H');\n  $._extAutomationBlocks.AeComp.selectLayers(($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:false,sortSelection:false, typeArray: [\"TextLayer\"]})), {mode:\"SELECT\"});\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('.w,LZ2bdx@t@iX({o==k');\n  VM_layer_list = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:true,sortSelection:true, typeArray: [\"TextLayer\"]}));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('6kMb-Rt_l};sJ{IP.YEK');\n  VM_comp_frameRate = ($._extAutomationBlocks.AeComp.getAttribute(($._extAutomationBlocks.AeComp.getActiveComp()), 'FRAME_RATE'));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('02;|CP3@{~XGK+BYjRzz');\n  var i_start = VM_layer_list.length;\n  var i_inc = 1;\n  if (i_start > 1) {\n    i_inc = -i_inc;\n  }\n  for (i = i_start; i_inc >= 0 ? i <= 1 : i >= 1; i += i_inc) {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('Zd;V0k+ep%0XfZxqmJg,');\n    VM_layer_i = VM_layer_list[(i - 1)];\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('wk}rzu}XcHg7~V9S*[cw');\n    VM_set_Duration(VM_layer_i);\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('/4%HoRBIEUx+EP1clj$7');\n    $._extAutomationBlocks.AeLayer.setAttribute((VM_layer_list[((i - 1) - 1)]), 'START_TIME', (($._extAutomationBlocks.AeLayer.getAttribute(VM_layer_i, 'OUT_POINT')) + 20 / VM_comp_frameRate));\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('02;|CP3@{~XGK+BYjRzz');\n  }\n}\n")});
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
	