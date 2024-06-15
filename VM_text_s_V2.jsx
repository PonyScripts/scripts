
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var list, TV, half, NL, i;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('6XCaEASCP:nj1%~!QV2|');\nlist = ($._extAutomationBlocks.AeLayer.getOnlySelectedLayer(($._extAutomationBlocks.AeComp.getActiveComp())));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('o5T.JW~H(DuAF*Zkn8Sd');\nTV = ($._extAutomationBlocks.AeProperty.getAttribute(($._extAutomationBlocks.AeLayer.toLayer(list) + '/' + 'ADBE Text Properties/ADBE Text Document'), 'VALUE'));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('nL1qJapb+Rw{ed5k%hiu');\nhalf = Math.ceil(TV.length / 2);\n$._extAutomationBlocks.all.messageAboutExecuteBlock('G.3c$HWUt:gtOmf@[ii4');\nNL = half;\n$._extAutomationBlocks.all.messageAboutExecuteBlock('q*F98~0A!gPsq-#jsobt');\nvar i_end = TV.length;\nvar i_inc = 1;\nif (half > i_end) {\n  i_inc = -i_inc;\n}\nfor (i = half; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('ka!ALp,YwlelQN$Ae;+#');\n  if (TV.charAt((i - 1)) == ' ') {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('yM1}Z(Rf*YzoFr-pT?Mo');\n    NL = i;\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('=Gn{f`13TlYN-fyYdJTh');\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('q*F98~0A!gPsq-#jsobt');\n    break;\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('BlELz+4-:=~m0b|=emGw');\n  $._extAutomationBlocks.all.log(i);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('q*F98~0A!gPsq-#jsobt');\n}\n$._extAutomationBlocks.all.messageAboutExecuteBlock('g+FTvk/(z%%n65~0_`s,');\n$._extAutomationBlocks.AeProperty.setAttribute(($._extAutomationBlocks.AeLayer.toLayer(list) + '/' + 'ADBE Text Properties/ADBE Text Document'), 'VALUE', ([TV.slice(0, NL),'' + '\\n' +\n'',TV.slice(((NL + 1) - 1), TV.length)].join('')));\n")});
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
	