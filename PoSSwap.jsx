
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var VM_sl, L1, L2, P1, P2, R1, R2;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('bDigqXz@DYxs?^J;kpo/');\nVM_sl = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:true,sortSelection:true, typeArray: [\"Layer\"]}));\n$._extAutomationBlocks.all.messageAboutExecuteBlock(')UacYy;yA9A}*f/p`DYf');\nif (VM_sl.length == 2) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('O-/DC7!jz~uaX%NmVo3P');\n  L1 = VM_sl[0];\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('dTa8.uXd/KM|Oj3#ggwF');\n  L2 = VM_sl[1];\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('?X,lT@]hDM(epZ2|tl*e');\n  P1 = ($._extAutomationBlocks.AeProperty.getAttribute(($._extAutomationBlocks.AeLayer.toLayer(L1) + '/' + 'ADBE Transform Group/ADBE Position'), 'VALUE'));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('#U}MBl$eL+[46]tzZj:y');\n  P2 = ($._extAutomationBlocks.AeProperty.getAttribute(($._extAutomationBlocks.AeLayer.toLayer(L2) + '/' + 'ADBE Transform Group/ADBE Position'), 'VALUE'));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('y7Y5aXPJXJ{_1H7yRjw]');\n  R1 = ($._extAutomationBlocks.AeProperty.getAttribute(($._extAutomationBlocks.AeLayer.toLayer(L1) + '/' + 'ADBE Transform Group/ADBE Rotate Z'), 'VALUE'));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('i2VM9PQz:cMZzEIsdsmC');\n  R2 = ($._extAutomationBlocks.AeProperty.getAttribute(($._extAutomationBlocks.AeLayer.toLayer(L1) + '/' + 'ADBE Transform Group/ADBE Rotate Z'), 'VALUE'));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('?DNsmV_^qX$^VX;N4c[1');\n  $._extAutomationBlocks.AeProperty.setAttribute(($._extAutomationBlocks.AeLayer.toLayer(L1) + '/' + 'ADBE Transform Group/ADBE Position'), 'VALUE', P2);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('6ZV,0(9IF/H5_Op+TIH,');\n  $._extAutomationBlocks.AeProperty.setAttribute(($._extAutomationBlocks.AeLayer.toLayer(L1) + '/' + 'ADBE Transform Group/ADBE Rotate Z'), 'VALUE', R2);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('A`lL@:vmMj^gC*5xJm%?');\n  $._extAutomationBlocks.AeProperty.setAttribute(($._extAutomationBlocks.AeLayer.toLayer(L2) + '/' + 'ADBE Transform Group/ADBE Position'), 'VALUE', P1);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('IMfaJ_yK$8LO`Uy|K{pX');\n  $._extAutomationBlocks.AeProperty.setAttribute(($._extAutomationBlocks.AeLayer.toLayer(L2) + '/' + 'ADBE Transform Group/ADBE Rotate Z'), 'VALUE', R1);\n} else {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('OcvARUejk[hOP(*A`vCx');\n  (function(){\n  \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString('layers selection err');\n  \t\t\talert(message);\n\n  \t})();\n}\n")});
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
	