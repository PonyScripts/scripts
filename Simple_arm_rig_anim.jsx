
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var Expression, list, i;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('`2o]!jLK0ZHf)obujOK6');\nExpression = 'wiggle(0.25,10)';\n$._extAutomationBlocks.all.messageAboutExecuteBlock('m^1JHTrOVFiAEOXx(!^4');\nlist = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:true,sortSelection:false, typeArray: [\"Layer\"]}));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('H2DOv!2!JMf]@yYG[qgJ');\nvar i_end = list.length;\nvar i_inc = 1;\nif (1 > i_end) {\n  i_inc = -i_inc;\n}\nfor (i = 1; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('xw%Dj$c`A]SoqK4xM5r)');\n  if (i < list.length) {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('J//OTd^yh_-?^6~hlLF^');\n    $._extAutomationBlocks.AeLayer.setAttribute((list[(i - 1)]), 'PARENT', (list[((i + 1) - 1)]));\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('!tX_xa;EpE%4W@$x^+oo');\n  $._extAutomationBlocks.AeProperty.setAttribute(($._extAutomationBlocks.AeLayer.toLayer((list[(i - 1)])) + '/' + 'ADBE Transform Group/ADBE Rotate Z'), 'EXPRESSION', Expression);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('H2DOv!2!JMf]@yYG[qgJ');\n}\n")});
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
	