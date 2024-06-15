
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var user_input_1, user_input_2, VM_precomp, my_layer;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('xa[bCI-D5z+t|6dc0W3w');\n\n\t dialogResult = $._extAutomationBlocks.all.EsDialogs.showCustomDialog([{type:'TEXT_SINGLELINE', value:user_input_1,label:'find'},{type:'TEXT_SINGLELINE', value:user_input_2,label:'replace to'}],{allowCancel:true});\n\t if(!dialogResult) throw new Error(\"user canceled\");\n\t user_input_1=dialogResult[0];\nuser_input_2=dialogResult[1];\n\t $._extAutomationBlocks.all.messageAboutExecuteBlock('@ublEL^3UnG,MS?M)(#l');\n$._extAutomationBlocks.all.log(user_input_1);\n$._extAutomationBlocks.all.messageAboutExecuteBlock('3}(8QMHwF|9qc|p#:*@J');\nif (user_input_1 == 'undefined') {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('D9:;9I/uE3(%.zqk=q~(');\n  (function(){\n  \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString('noText');\n  \t\t\talert(message);\n  \t\t\tthrow new Error(message)\n  \t})();\n} else {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock(':*kji%^zIfIVPOh9:v(=');\n  if (user_input_2 == 'undefined') {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('nzT.l%mK](!p0@Q+z=~S');\n    user_input_2 = '';\n  } else {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('0^-cMu*@x1qc*^qyywAO');\n    var VM_precomp_list = $._extAutomationBlocks.AeLayer.getLayers(('/main'), {recursively: false,onlySelected:false,sortSelection:false, typeArray: [\"PrecompLayer\"],returnItem:true});\n    for (var VM_precomp_index =0; VM_precomp_index< VM_precomp_list.length;VM_precomp_index++) {\n      try { VM_precomp = $._extAutomationBlocks.AeUtility.toPath(VM_precomp_list[VM_precomp_index]);}\n    \t\tcatch(e) {\n    \t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n    \t\t\tcontinue;\n    \t\t}\n    \t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('3$d}h7|UinU`z2t{wk`W');\n      var my_layer_list = $._extAutomationBlocks.AeLayer.getLayers(VM_precomp, {recursively: false,onlySelected:false,sortSelection:false, typeArray: [\"TextLayer\"],returnItem:true});\n      for (var my_layer_index =0; my_layer_index< my_layer_list.length;my_layer_index++) {\n        try { my_layer = $._extAutomationBlocks.AeUtility.toPath(my_layer_list[my_layer_index]);}\n      \t\tcatch(e) {\n      \t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n      \t\t\tcontinue;\n      \t\t}\n      \t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('OoIATgCo=3]B@wPDLjpg');\n        $._extAutomationBlocks.AeProperty.setAttribute(($._extAutomationBlocks.AeLayer.toLayer(my_layer) + '/' + 'ADBE Text Properties/ADBE Text Document'), 'VALUE', ($._extAutomationBlocks.all.EsString.stringReplace(($._extAutomationBlocks.AeProperty.getAttribute(($._extAutomationBlocks.AeLayer.toLayer(my_layer) + '/' + 'ADBE Text Properties/ADBE Text Document'), 'VALUE')),user_input_1,user_input_2,'REPLACE_ALL',(false),(false))));\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('3$d}h7|UinU`z2t{wk`W');\n      }\n      $._extAutomationBlocks.all.messageAboutExecuteBlock('0^-cMu*@x1qc*^qyywAO');\n    }\n  }\n}\n")});
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
	