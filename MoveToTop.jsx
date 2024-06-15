
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var list, i;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('[@aW=[2nL!@mG6k?EuWC');\nlist = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:true,sortSelection:true, typeArray: [\"Layer\"]}));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('3w::Un:,K1zZQ%4ZRR[c');\nvar i_start = list.length;\nvar i_inc = 1;\nif (i_start > 1) {\n  i_inc = -i_inc;\n}\nfor (i = i_start; i_inc >= 0 ? i <= 1 : i >= 1; i += i_inc) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('UF]E!qNAV`X4g*?d)o4u');\n  $._extAutomationBlocks.AeLayer.setAttribute((list[(i - 1)]), 'INDEX', 1);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('3w::Un:,K1zZQ%4ZRR[c');\n}\n")});
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
	