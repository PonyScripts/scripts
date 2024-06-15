
		if(!$["_extAutomationBlocks"]) {
			alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
			throw new Error("could not find Automation Blocks API");
		}
		
	(function(thisObj){
		$._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
		var myResult;
		try {
			app.beginUndoGroup("Automation Blocks");
			myResult = JSON.stringify({status:"SUCCESS", data: eval("var list, my_layer, VM_size, my_variable;\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('1|zXAmnXKQmzEl-Ae3K9');\nlist = ($._extAutomationBlocks.AeComp.getAttribute(($._extAutomationBlocks.AeComp.getActiveComp()), 'SIZE'));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('uY]$mW!s-iH8@v0nK4?0');\nmy_layer = $._extAutomationBlocks.AeComp.addLayer(($._extAutomationBlocks.AeComp.getActiveComp()),{type: \"SHAPE\",name:'VM_Guide_layer'});\n$._extAutomationBlocks.all.messageAboutExecuteBlock('4mY7Y0PR@SBc-}46C]`#');\n$._extAutomationBlocks.AeLayer.setAttribute(my_layer, 'GUIDE_LAYER', (true));\n$._extAutomationBlocks.all.messageAboutExecuteBlock('YZDP!}~){mLfB:$~]erG');\nVM_size = 100;\n$._extAutomationBlocks.all.messageAboutExecuteBlock('XN(aMA3LoGZpT;[cPi{r');\nif (list[0] > list[1]) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('(0$9%(hnaL6yz[Fz:]Er');\n  VM_size = list[0] / 10;\n} else {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('G_;P2`D7;Y3WKDG{ch]u');\n  VM_size = list[1] / 10;\n}\n$._extAutomationBlocks.all.messageAboutExecuteBlock('/O7v=r~1,Os~E`tH9(|3');\nmy_variable = $._extAutomationBlocks.AeLayer.addShapeIngredient(my_layer,'ADBE Vector Shape - Ellipse',{customValues: {'ADBE Vector Ellipse Size':[VM_size, VM_size],'ADBE Vector Ellipse Position':[0, 0]}});\n$._extAutomationBlocks.all.messageAboutExecuteBlock('fUB3i+5_D%cj?X:Q!KyE');\nmy_variable = $._extAutomationBlocks.AeLayer.addShapeIngredient(my_layer,'ADBE Vector Graphic - Fill',{customValues: {'ADBE Vector Blend Mode':('Normal'),'ADBE Vector Composite Order':('Below Previous in Same Group'),'ADBE Vector Fill Rule':('Non-Zero Winding'),'ADBE Vector Fill Color':'#ff0000','ADBE Vector Fill Opacity':50}});\n")});
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
	