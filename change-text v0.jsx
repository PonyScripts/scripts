var myProject = app.project;



fun();
function fun() {

  app.beginUndoGroup('rename layers');
  var curComp = app.project.activeItem;
  if (!curComp || !(curComp instanceof CompItem)) {
    alert('noComp');
    return;
  }
  var promttxt = 'layer';
  if(curComp.selectedLayers.length < 1) {
    alert('no selection');
    return;
  }
  promttxt = curComp.selectedLayers[0].name;


  for(var i = 0; i < curComp.selectedLayers.length; i++) {

    var currLayer = curComp.selectedLayers[i];
    try{


		var myTextLayer = currLayer

		var myTextDocument = myTextLayer.property("ADBE Text Properties").property("ADBE Text Document")

		var textDocument1 = myTextDocument.value;

		textDocument1.fillColor = [1, 1, 1];

		textDocument1.strokeColor = [0, 0, 0];

		textDocument1.strokeWidth = 2;

		textDocument1.strokeOverFill = false;

		textDocument1.applyStroke = true;

		textDocument1.applyFill = true;

		myTextDocument.setValue(textDocument1);
    }catch(error) {
      $.writeln('this layer has no source');
    }

  }

  app.endUndoGroup();
}