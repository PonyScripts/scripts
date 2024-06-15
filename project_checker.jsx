
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var list, i, VM_layer;\n\nfunction esMathRandomInt(a, b) {\n  if (a > b) {\n    // Swap a and b to ensure a is smaller.\n    var c = a;\n    a = b;\n    b = c;\n  }\n  return Math.floor(Math.random() * (b - a + 1) + a);\n}\n\nfunction esMathRandomFloat(a, b) {\n  if (a > b) {\n    // Swap a and b to ensure a is smaller.\n    var c = a;\n    a = b;\n    b = c;\n  }\n  return (Math.random() * (b - a) + a);\n}\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('hCm2#PaAajKSR|o.oD/5');\nlist = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:false,sortSelection:false, typeArray: [\"Layer\"]}));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('$kF|JyNA7MxOHW,+U$7[');\nvar i_end = list.length;\nvar i_inc = 1;\nif (1 > i_end) {\n  i_inc = -i_inc;\n}\nfor (i = 1; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('Y)TiTBC{*Ja7!EsGxk!;');\n  if (list[(i - 1)].slice(-1) == ']') {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('hVkKz^+[Xb+I/waCQhU.');\n    VM_layer = list[(i - 1)];\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('tS7oY=r4ipnb;MaX,}e(');\n    (function(){\n    \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString(('Found same name_' + String($._extAutomationBlocks.AeLayer.getAttribute(VM_layer, 'NAME'))));\n    \t\t\talert(message);\n\n    \t})();\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('h9u{;){C/)p]C4q|?99N');\n    $._extAutomationBlocks.AeComp.selectLayers(VM_layer, {mode:\"SELECT\"});\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('s]giSd:?=ohVlw`u@[H?');\n    $._extAutomationBlocks.AeLayer.setAttribute(VM_layer, 'NAME', ([$._extAutomationBlocks.AeLayer.getAttribute(VM_layer, 'NAME'),'_VM_',esMathRandomInt(1, 42)].join('')));\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('$kF|JyNA7MxOHW,+U$7[');\n}\n")});
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
	