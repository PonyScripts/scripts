
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var selected_layers, layer_name, move_all_attributes_option, duration_option, crop_option, crop_margin, crop_rectangle, precomp_layer_var;\n\nfunction listsGetRandomItem(list, remove) {\n  var x = Math.floor(Math.random() * list.length);\n  if (remove) {\n    return list.splice(x, 1)[0];\n  } else {\n    return list[x];\n  }\n}\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('6ToWv9,bUo@e#q[{AT$X');\nif (true) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('*mTRvoLAc]!-ivz3:oSA');\n  selected_layers = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:true,sortSelection:false, typeArray: [\"Layer\"]}));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('BnF%mgQ`]SvWV9eYc!9X');\n  if (!selected_layers.length) {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('6+]]%my_=$E(s,l_L(|G');\n    (function(){\n    \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString('Please select at least one layer that you want to precompose.');\n    \t\t\talert(message);\n    \t\t\tthrow new Error(message)\n    \t})();\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('9Y7*N+QVVx6^vqg(_Ny~');\n  layer_name = ['_',$._extAutomationBlocks.AeComp.getAttribute(($._extAutomationBlocks.AeComp.getActiveComp()), 'NAME'),'_VM_',$._extAutomationBlocks.AeLayer.getAttribute((listsGetRandomItem(selected_layers, false)), 'NAME')].join('');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('1i2FdlG202%8%jgZh]sA');\n  move_all_attributes_option = ($._extAutomationBlocks.AeApp.getSetting('precompose selected layers - move all attributes option',(true)));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('Q[+gh9CBT5#v@t4lhzYY');\n  duration_option = ($._extAutomationBlocks.AeApp.getSetting('precompose selected layers - duration option',(true)));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('+^q;|4j9%#Qj{fz(h@Do');\n  crop_option = ($._extAutomationBlocks.AeApp.getSetting('precompose selected layers - crop option',(true)));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('h5H.41q_FD:DKgvg0M~f');\n  crop_margin = 10;\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('kwRWpjClySa(0gO|/,|D');\n  if (crop_option) {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('5+1}pkmcsW2UF8z.t9I$');\n    crop_rectangle = ($._extAutomationBlocks.AeLayer.getSourceRect(selected_layers,{\n    \t\ttime:null,\n    \t\tcompSpace:true,\n    \t\tuseMasks: true\n    \t}));\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('}cY,fiU8LS1R7|BpcyGo');\n    if (crop_rectangle) {\n      $._extAutomationBlocks.all.messageAboutExecuteBlock('y{}{0Q;LIoH~6GT{-S:/');\n      crop_rectangle = [crop_rectangle[0] - crop_margin, crop_rectangle[1] - crop_margin, crop_rectangle[2] + crop_margin * 2, crop_rectangle[3] + crop_margin * 2];\n    }\n  } else {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('Xi~%~V)H7{:LPk*+a??A');\n    crop_rectangle = null;\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('^]1}f,g-kqz30fS%Af@+');\n  precomp_layer_var = $._extAutomationBlocks.AeLayer.precompose(selected_layers,{\n  \t\tmoveAllAttributes : move_all_attributes_option,\n  \t\tadjustDuration : duration_option,\n  \t\tsourceRect: crop_rectangle\n  \t});\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('t5{7MIf;aN)]HnBJx:Dz');\n  $._extAutomationBlocks.AeProjectItem.setAttribute(($._extAutomationBlocks.AeLayer.getAttribute(precomp_layer_var, 'SOURCE')), 'NAME', layer_name);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('/C@zk6PNeN?#$Jw9uR_q');\n  $._extAutomationBlocks.AeLayer.setAttribute(($._extAutomationBlocks.AeLayer.getOnlySelectedLayer(($._extAutomationBlocks.AeComp.getActiveComp()))), 'COLLAPSE_TRANSFORMATION', (true));\n}\n")});
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
	