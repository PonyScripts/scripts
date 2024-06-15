
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var user_input_1, me_precomp, my_layer;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('?52^[JFMau3$fiwWY`t=');\n\n\t dialogResult = $._extAutomationBlocks.all.EsDialogs.showCustomDialog([{type:'CHECKBOX', value:user_input_1,label:'set guide layer'}],{allowCancel:true});\n\t if(!dialogResult) throw new Error(\"user canceled\");\n\t user_input_1=dialogResult[0];\n\t $._extAutomationBlocks.all.messageAboutExecuteBlock('wl/q.Jo{1y=_0TCYyHr+');\nvar me_precomp_list = $._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {recursively: false,onlySelected:false,sortSelection:false, typeArray: [\"PrecompLayer\"],returnItem:true});\nfor (var me_precomp_index =0; me_precomp_index< me_precomp_list.length;me_precomp_index++) {\n  try { me_precomp = $._extAutomationBlocks.AeUtility.toPath(me_precomp_list[me_precomp_index]);}\n\t\tcatch(e) {\n\t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n\t\t\tcontinue;\n\t\t}\n\t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('a31yPa~]_#-Wux5R/CDC');\n  var my_layer_list = $._extAutomationBlocks.AeLayer.getLayers(me_precomp, {recursively: false,onlySelected:false,sortSelection:false, typeArray: [\"FootageLayer\"],returnItem:true});\n  for (var my_layer_index =0; my_layer_index< my_layer_list.length;my_layer_index++) {\n    try { my_layer = $._extAutomationBlocks.AeUtility.toPath(my_layer_list[my_layer_index]);}\n  \t\tcatch(e) {\n  \t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n  \t\t\tcontinue;\n  \t\t}\n  \t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('tWV^z|4~+)+F-y+gFc[9');\n    $._extAutomationBlocks.AeLayer.setAttribute(my_layer, 'GUIDE_LAYER', user_input_1);\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('a31yPa~]_#-Wux5R/CDC');\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('wl/q.Jo{1y=_0TCYyHr+');\n}\n")});
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
	