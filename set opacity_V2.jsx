
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var VM_list, VM_temp_layer, VM_opacity, VM___50;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('cRx9W/fkFkB{E%lCLt{n');\nVM_list = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:false,sortSelection:false, typeArray: [\"Layer\"]}));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('kOnS4s/o+G.q+FWmKe;0');\nfor (var VM_temp_layer_index =0; VM_temp_layer_index< VM_list.length;VM_temp_layer_index++) {\n  try { VM_temp_layer = VM_list[VM_temp_layer_index];}\n\t\tcatch(e) {\n\t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n\t\t\tcontinue;\n\t\t}\n\t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('l-s|Gbs|R$)*8r]8U#@A');\n  if (true) {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('HRt29O-k0aBxiTlkedQG');\n    VM_opacity = ($._extAutomationBlocks.AeLayer.toLayer(VM_temp_layer) + '/' + 'ADBE Transform Group/ADBE Opacity');\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('JFQzznQnh})A`T+jgnHS');\n    VM___50 = '50' == ($._extAutomationBlocks.AeProperty.getAttribute(VM_opacity, 'EXPRESSION'));\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('{#AO8*wTTEvXZ$6+[2m5');\n    if (!VM___50 && ($._extAutomationBlocks.AeProperty.getAttribute(VM_opacity, 'EXPRESSION_ENABLED'))) {\n      $._extAutomationBlocks.all.messageAboutExecuteBlock('sNFWk]74Lv^~I1RbU*5+');\n      (function(){\n      \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString((['Layer \" ',$._extAutomationBlocks.AeLayer.getAttribute(VM_temp_layer, 'NAME'),' \" Already Has Expression'].join('')));\n      \t\t\talert(message);\n\n      \t})();\n    } else {\n      $._extAutomationBlocks.all.messageAboutExecuteBlock(';o*9Q#i#5rMXauD}xUc[');\n      if (VM___50) {\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('=?xU0:=eKTA;B:y}Y_ER');\n        $._extAutomationBlocks.AeProperty.setAttribute(VM_opacity, 'EXPRESSION', '');\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('9C-31a%Y@:JgLT-Y+VS@');\n        $._extAutomationBlocks.all.log((['remove --',$._extAutomationBlocks.AeLayer.getAttribute(VM_temp_layer, 'NAME'),' --',VM_temp_layer].join('')));\n      } else {\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('s=*gxaX0[?^=q:ds_j8{');\n        $._extAutomationBlocks.AeProperty.setAttribute(VM_opacity, 'EXPRESSION', '50');\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('N6gM{x4jNz;*v}#drc!M');\n        $._extAutomationBlocks.all.log((['set 50 --',$._extAutomationBlocks.AeLayer.getAttribute(VM_temp_layer, 'NAME'),' --',VM_temp_layer].join('')));\n      }\n    }\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('kOnS4s/o+G.q+FWmKe;0');\n}\n")});
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
	