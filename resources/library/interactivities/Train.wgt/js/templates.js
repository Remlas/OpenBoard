var toolbarTemplate = 	
			'<h1 class="title">{{fr.njin.i18n.document.title}}</h1>'+
			'<div class="actions">'+
				'<button role="edit"><span>{{fr.njin.i18n.toolbar.edit}}</span></button>'+
				'<button role="view"><span>{{fr.njin.i18n.toolbar.view}}</span></button>'+
				'<button role="reload"><span>{{fr.njin.i18n.toolbar.reload}}</span></button>'+
				'<button role="help"><span>{{fr.njin.i18n.toolbar.help}}</span></button>'+
			'</div>';
				
var parametersTemplate = 
			'<div class="inline">'+
				'<label>{{fr.njin.i18n.parameters.label.themes}}'+
					'<select name="themes" role="parameter">'+
						'<option value="pad">{{fr.njin.i18n.parameters.label.pad.themes}}</option>'+					
						'<option value="slate">{{fr.njin.i18n.parameters.label.slate.themes}}</option>'+
						'<option value="none">{{fr.njin.i18n.parameters.label.none.themes}}</option>'+
					'</select>'+
				'</label>'+
			'</div>'+
			'<div class="inline">'+
				'<label>{{fr.njin.i18n.train.parameters.label.count}}'+
					'<select name="count" role="parameter">'+
						'<option value="2">2</option>'+
						'<option value="3">3</option>'+						
						'<option value="4">4</option>'+						
						'<option value="5">5</option>'+						
						'<option value="6">6</option>'+						
					'</select>'+
				'</label>'+
			'</div>'+
			'<div class="inline">'+
				'<label>{{fr.njin.i18n.train.parameters.label.range}}'+
					'<select name="range" role="parameter">'+
						'<option value="0.1">< 0.1</option>'+
						'<option value="1">< 1</option>'+
						'<option value="10">< 10</option>'+
						'<option value="100">< 100</option>'+						
						'<option value="1000">< 1000</option>'+
					'</select>'+
				'</label>'+
			'</div>'+
			'<div class="inline">'+
				'<label>{{fr.njin.i18n.train.parameters.label.operator}}'+
					'<select name="operator" role="parameter">'+
						'<option value="<"><</option>'+
						'<option value=">">></option>'+					
					'</select>'+
				'</label>'+
			'</div>';