
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var j, list;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('d$l=e8]%yFRHS^^lJ3^J');\nvar j_list = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:false,sortSelection:false, typeArray: [\"FootageLayer\"]}));\nfor (var j_index =0; j_index< j_list.length;j_index++) {\n  try { j = j_list[j_index];}\n\t\tcatch(e) {\n\t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n\t\t\tcontinue;\n\t\t}\n\t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('k3!rMu{mdh?B+vaeM$5n');\n  if (($._extAutomationBlocks.all.EsString.stringSearch(($._extAutomationBlocks.AeLayer.getAttribute(j, 'NAME')),'Shot',(false),(false))) == 1) {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock(':1~=0Bn,:By!PZmd)kHv');\n    $._extAutomationBlocks.AeProject.deleteProjectItems(('/PreRender/' + String($._extAutomationBlocks.AeLayer.getAttribute(j, 'NAME'))));\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('d$l=e8]%yFRHS^^lJ3^J');\n}\n$._extAutomationBlocks.all.messageAboutExecuteBlock('$0{z(NO?~x1JFbgHLwHH');\nvar j_list2 = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:false,sortSelection:false, typeArray: [\"Layer\"]}));\nfor (var j_index2 =0; j_index2< j_list2.length;j_index2++) {\n  try { j = j_list2[j_index2];}\n\t\tcatch(e) {\n\t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n\t\t\tcontinue;\n\t\t}\n\t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('l){9.0dFPN$}y#Jy_v`i');\n  $._extAutomationBlocks.AeLayer.setAttribute(j, 'SOLO', (true));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('$0{z(NO?~x1JFbgHLwHH');\n}\n$._extAutomationBlocks.all.messageAboutExecuteBlock('7Ade_!69H1FqyZwwUOW~');\nlist = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:false,sortSelection:false, typeArray: [\"TextLayer\"]}));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('F|A8]8WWv[j5j{lY_$H8');\nfor (var j_index3 =0; j_index3< list.length;j_index3++) {\n  try { j = list[j_index3];}\n\t\tcatch(e) {\n\t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n\t\t\tcontinue;\n\t\t}\n\t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('t0;{yDSCg.b}H3XT_V-p');\n  $._extAutomationBlocks.AeLayer.setAttribute(j, 'ENABLED', (false));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('F|A8]8WWv[j5j{lY_$H8');\n}\n")});
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
	