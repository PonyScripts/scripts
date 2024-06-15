
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var VM_l_list, j, VM_text_val_list, VM_first_text_layer;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock(':Z.3PFUH!cR1/Q[Vw*uO');\nVM_l_list = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:true,sortSelection:true, typeArray: [\"Layer\"]}));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('{%CvA#]K~A0R6As9xr],');\nfor (var j_index =0; j_index< VM_l_list.length;j_index++) {\n  try { j = VM_l_list[j_index];}\n\t\tcatch(e) {\n\t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n\t\t\tcontinue;\n\t\t}\n\t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('3eJm.n/L@~1ezax+QagM');\n  if (($._extAutomationBlocks.AeLayer.getAttribute(j, 'TYPE')) != 'TextLayer') {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('[o*DgYsL}7}k)J?rVYE.');\n    (function(){\n    \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString('layer type err');\n    \t\t\talert(message);\n    \t\t\tthrow new Error(message)\n    \t})();\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('d#1]70uszq*JZ.@j@[sq');\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('{%CvA#]K~A0R6As9xr],');\n    break;\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('{%CvA#]K~A0R6As9xr],');\n}\n$._extAutomationBlocks.all.messageAboutExecuteBlock('BV)!#)49{3ycjK?2``UM');\nVM_text_val_list = [];\n$._extAutomationBlocks.all.messageAboutExecuteBlock('~#TiAC-W?#s`exfGSce-');\nfor (var j_index2 =0; j_index2< VM_l_list.length;j_index2++) {\n  try { j = VM_l_list[j_index2];}\n\t\tcatch(e) {\n\t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n\t\t\tcontinue;\n\t\t}\n\t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('A5-*|QRY}w}vVj9MT(-f');\n  VM_text_val_list.unshift(($._extAutomationBlocks.AeProperty.getAttribute(($._extAutomationBlocks.AeLayer.toLayer(j) + '/' + 'ADBE Text Properties/ADBE Text Document'), 'VALUE')));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('~#TiAC-W?#s`exfGSce-');\n}\n$._extAutomationBlocks.all.messageAboutExecuteBlock('Wl(pFv`#OzA77ko:V;Xn');\n$._extAutomationBlocks.all.log(VM_l_list);\n$._extAutomationBlocks.all.messageAboutExecuteBlock('rSm4ukj_TE2p_l[-APL+');\nVM_first_text_layer = VM_l_list.pop();\n$._extAutomationBlocks.all.messageAboutExecuteBlock('XS_eU~wdsMu~MJO{0zM|');\n$._extAutomationBlocks.all.log(VM_first_text_layer);\n$._extAutomationBlocks.all.messageAboutExecuteBlock('+r!:^7tqgzPPeeH4HO6d');\n$._extAutomationBlocks.AeProperty.setAttribute(($._extAutomationBlocks.AeLayer.toLayer(VM_first_text_layer) + '/' + 'ADBE Text Properties/ADBE Text Document'), 'VALUE', (VM_text_val_list.join(' ')));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('J^P9kD5XW)hu4_4i*@8$');\n$._extAutomationBlocks.AeLayer.setAttribute(VM_first_text_layer, 'OUT_POINT', ($._extAutomationBlocks.AeLayer.getAttribute((VM_l_list[0]), 'OUT_POINT')));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('sHksiCNxz+5hL]n9._79');\nfor (var j_index3 =0; j_index3< VM_l_list.length;j_index3++) {\n  try { j = VM_l_list[j_index3];}\n\t\tcatch(e) {\n\t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n\t\t\tcontinue;\n\t\t}\n\t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('ZIZcH|^e/RV$V:|9D3VC');\n  $._extAutomationBlocks.AeLayer.remove(j);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('sHksiCNxz+5hL]n9._79');\n}\n")});
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
	