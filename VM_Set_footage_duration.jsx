
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var VM_list, VM_framerate, VM_frame_offset, VM_i;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('c[kQ49**lg{ABIZanJTv');\nVM_list = ($._extAutomationBlocks.AeLayer.getLayers(($._extAutomationBlocks.AeComp.getActiveComp()), {onlySelected:true,sortSelection:true, typeArray: [\"Layer\"]}));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('5xx+pfclN*0*#lg!v0(s');\nVM_framerate = ($._extAutomationBlocks.AeComp.getAttribute(($._extAutomationBlocks.AeComp.getActiveComp()), 'FRAME_RATE'));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('8[_don{xbQIXG5-ArCHH');\nVM_frame_offset = 40;\n$._extAutomationBlocks.all.messageAboutExecuteBlock('RPrll3B.WGRTgczYQRcQ');\nvar VM_i_start = VM_list.length;\nvar VM_i_inc = 2;\nif (VM_i_start > 1) {\n  VM_i_inc = -VM_i_inc;\n}\nfor (VM_i = VM_i_start; VM_i_inc >= 0 ? VM_i <= 1 : VM_i >= 1; VM_i += VM_i_inc) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('e5{E=%p]YEMkYNU-#7!F');\n  $._extAutomationBlocks.AeLayer.setAttribute((VM_list[(VM_i - 1)]), 'START_TIME', (($._extAutomationBlocks.AeLayer.getAttribute((VM_list[((VM_i - 1) - 1)]), 'START_TIME')) - VM_frame_offset / VM_framerate));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('2)?]{FP@9^Kt1qM8pV7x');\n  $._extAutomationBlocks.AeLayer.setAttribute((VM_list[(VM_i - 1)]), 'OUT_POINT', (($._extAutomationBlocks.AeLayer.getAttribute((VM_list[((VM_i - 1) - 1)]), 'OUT_POINT')) + VM_frame_offset / VM_framerate));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('RPrll3B.WGRTgczYQRcQ');\n}\n")});
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
	