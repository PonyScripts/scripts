
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var VM_layer, new_layer_var;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('0zn/Tp(?A`%!O9`Al%J0');\nVM_layer = ($._extAutomationBlocks.AeLayer.getOnlySelectedLayer(($._extAutomationBlocks.AeComp.getActiveComp())));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('zQ5Hxs#|92Mv4K)ls,yv');\nif (($._extAutomationBlocks.AeLayer.getAttribute(VM_layer, 'TYPE')) == 'TextLayer') {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('D%SkT!)Dtgw%t@qPBFGx');\n  new_layer_var = $._extAutomationBlocks.AeLayer.duplicate(VM_layer);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('LpAYTkJ~JyJIUWh=Rlbf');\n  $._extAutomationBlocks.AeLayer.setAttribute(new_layer_var, 'INDEX', (($._extAutomationBlocks.AeLayer.getAttribute(VM_layer, 'INDEX')) - 2));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('6D-aGp},(e)08!yqNLUH');\n  $._extAutomationBlocks.AeLayer.setAttribute(new_layer_var, 'START_TIME', ($._extAutomationBlocks.AeLayer.getAttribute(VM_layer, 'OUT_POINT')));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('tKT!vHCE2r6S]-RF#5XR');\n  $._extAutomationBlocks.AeComp.selectLayers(new_layer_var, {mode:\"SELECT\"});\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('ih_R%,sr(o=Uy*2V-S_B');\n  $._extAutomationBlocks.AeComp.setAttribute(($._extAutomationBlocks.AeComp.getActiveComp()), 'CURRENT_TIME', (($._extAutomationBlocks.AeLayer.getAttribute(new_layer_var, 'OUT_POINT')) - 2));\n} else {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('-ap#:i/el{`eaUJ2bsf+');\n  (function(){\n  \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString('dalbayob');\n  \t\t\talert(message);\n  \t\t\tthrow new Error(message)\n  \t})();\n}\n")});
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
	