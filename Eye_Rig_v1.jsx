
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var list, las_Layer, new_layer_var, mid_L;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('=.nsgGo?y-XdCG*;8`3h');\nlist = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:true,sortSelection:true, typeArray: [\"Layer\"]}));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('Fm^eiYfmt~%#7hAq2dSP');\nif (list.length == 3) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('aR6G.Ib|akGW7P*v-nSt');\n  las_Layer = list.pop();\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('?Td9=JL6$o6d,tUea;uk');\n  $._extAutomationBlocks.AeLayer.applyPreset(las_Layer,('D:\\\\Christian Lingua\\\\scripts\\\\Blink.ffx'));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock(',V?[aQCGE9D~2``QN$W{');\n  new_layer_var = $._extAutomationBlocks.AeLayer.duplicate(las_Layer);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('FSHIlcD!bdy5xE??OU[h');\n  $._extAutomationBlocks.AeLayer.setAttribute(new_layer_var, 'INDEX', (($._extAutomationBlocks.AeLayer.getAttribute(new_layer_var, 'INDEX')) - 1));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('@AtnWOmxhoO?_^o{.8%h');\n  mid_L = list.pop();\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('t2%%j$|^4V_Dk1eXhOOF');\n  $._extAutomationBlocks.AeLayer.setAttribute(mid_L, 'TRACK_MATTE_TYPE', ('Alpha'));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('_9[r+lf(^,e`bN4Pd3;%');\n  $._extAutomationBlocks.AeProperty.setAttribute(($._extAutomationBlocks.AeLayer.toLayer(mid_L) + '/' + 'ADBE Transform Group/ADBE Opacity'), 'EXPRESSION', (['thisComp.layer(\"',$._extAutomationBlocks.AeLayer.getAttribute(las_Layer, 'NAME'),'\").transform.opacity'].join('')));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('WY()D!!dnH^u;He4unxL');\n  $._extAutomationBlocks.AeProperty.setAttribute(($._extAutomationBlocks.AeLayer.toLayer((list.shift())) + '/' + 'ADBE Transform Group/ADBE Opacity'), 'EXPRESSION', (String(['thisComp.layer(\"',$._extAutomationBlocks.AeLayer.getAttribute(las_Layer, 'NAME'),'\").transform.opacity'].join('')) + ' == 100 ? 0 : 100'));\n} else {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('y3+Za=3XqXcVIiTW;U6Y');\n  (function(){\n  \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString('my message');\n  \t\t\talert(message);\n\n  \t})();\n}\n")});
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
	