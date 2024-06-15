
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var list, last_L, j;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('nj_t9t:7J+-2dofeSDe*');\nlist = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:true,sortSelection:false, typeArray: [\"Layer\"]}));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('BaSiZmu~5Au6H600wsTh');\nif (list.length == 2) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('kR+{%;SGFXPne)HgKoE*');\n  $._extAutomationBlocks.AeLayer.setAttribute((list[0]), 'PARENT', (list[1]));\n} else if (list.length > 2) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('[6.yan#EWa[go^DB9t@c');\n  last_L = list.pop();\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('3Z#V.T5Jkn^Gm:4-dx4?');\n  for (var j_index =0; j_index< list.length;j_index++) {\n    try { j = list[j_index];}\n  \t\tcatch(e) {\n  \t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n  \t\t\tcontinue;\n  \t\t}\n  \t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('c-#~{;oQ}sIt`C5{.mUN');\n    $._extAutomationBlocks.AeLayer.setAttribute(j, 'PARENT', last_L);\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('3Z#V.T5Jkn^Gm:4-dx4?');\n  }\n} else {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('w!TkJKxGI.2r1^gCLVeS');\n  (function(){\n  \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString('my message');\n  \t\t\talert(message);\n\n  \t})();\n}\n")});
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
	