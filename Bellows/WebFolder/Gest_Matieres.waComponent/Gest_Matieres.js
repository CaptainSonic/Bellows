
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_Matieres';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	$$("cchg").hide();
	// @region namespaceDeclaration// @startlock
	var fNom = {};	// @textField
	var fCode = {};	// @textField
	var cNom = {};	// @textField
	var cCode = {};	// @textField
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	var bNew = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	fNom.keyup = function fNom_keyup (event)// @startlock
	{// @endlock
		$$('component1_fCode').setValue(null);
		WAF.sources.component1_matieres.query("Nom = :1", event.currentTarget.value + "*");
	};// @lock

	fCode.keyup = function fCode_keyup (event)// @startlock
	{// @endlock
		$$('component1_fNom').setValue(null);
		WAF.sources.component1_matieres.query("Code = :1", event.currentTarget.value + "*");
	};// @lock

	cNom.change = function cNom_change (event)// @startlock
	{// @endlock
		var CCode, CNom;
		CCode = $$('component1_cCode').getValue();
		CNom = $$('component1_cNom').getValue();
		
		if ((CCode.length > 2) && (CNom.length > 1)) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	cNom.blur = function cNom_blur (event)// @startlock
	{// @endlock
		var NomEntry, NbSamNom, vAction;
		
		NomEntry = event.currentTarget.value;
		vAction = $$('component1_cAction').getValue();
		if (vAction === "Créer") {
			ds.Matieres.query("Nom=:1", { 
				onSuccess:function(event) {
					var myCollection = event.entityCollection;
					NbSamNom = myCollection.length;
					if (NbSamNom > 0) {
						alert("Ce nom de matière (" + NomEntry +") est déjà utilisé. Merci de saisir un nom de matière différent");	
						$$('component1_cNom').setValue(null);
						//$$('component1_clogin').focus(true);
						$$('component1_bSave').disable();
						}
					}, params:[NomEntry] 
				});
		}
	};// @lock

	cCode.change = function cCode_change (event)// @startlock
	{// @endlock
		var CCode, CNom;
		CCode = $$('component1_cCode').getValue();
		CNom = $$('component1_cNom').getValue();
		
		if ((CCode.length > 2) && (CNom.length > 1)) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	cCode.blur = function cCode_blur (event)// @startlock
	{// @endlock
		var CodeEntry, NbSamCode, vAction;
		
		CodeEntry = event.currentTarget.value;
		vAction = $$('component1_cAction').getValue();
		if (vAction === "Créer") {
			ds.Matieres.query("Code=:1", { 
				onSuccess:function(event) {
					var myCollection = event.entityCollection;
					NbSamCode = myCollection.length;
					if (NbSamCode > 0) {
						alert("Ce code matière (" + CodeEntry +") est déjà utilisé. Merci de saisir un code matière différent");	
						$$('component1_cCode').setValue(null);
						//$$('component1_clogin').focus(true);
						$$('component1_bSave').disable();
						}
					}, params:[CodeEntry] 
				});
		}
	};// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		$$('component1_cCode').getLabel().setTextColor("black");
		$$('component1_cNom').getLabel().setTextColor("black");
		$$('component1_cAction').setValue("-");
		$$('component1').loadComponent("/Gest_Matieres.waComponent");
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		var vActif;
		
		$$('component1_bUpdate').show();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_bNew').show();
		$$('component1_ListMat').enable();
		$$('component1_cCode').setReadOnly(true);
		$$('component1_cNom').setReadOnly(true);
		$$('component1_cType').show();
		$$('component1_ListMat').setReadOnly(true);
		$$('component1_cbActif').hide();
		$$('component1_cCode').getLabel().setTextColor("black");
		$$('component1_cNom').getLabel().setTextColor("black");
		$$('component1_cType').hide();
		$$('component1_cbMat').hide();
		$$('component1_cAction').setValue("-");

		sources.component1_matieres.Type.set(sources.component1_typeMat);
		sources.component1_matieres.save();
		
				
	};// @lock

	bUpdate.click = function bUpdate_click (event)// @startlock
	{// @endlock
		var vType;
		
		$$('component1_bUpdate').hide();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_cbActif').show();
		$$('component1_bNew').hide();
		$$('component1_ListMat').disable();
		$$('component1_cType').hide();
		$$('component1_bSave').enable();
		$$('component1_cType').hide();
		$$('component1_cbMat').show();
		
		vType = $$('component1_cType').getValue();
		$$('component1_cbMat').setValue(vType);
		$$('component1_cAction').setValue("Modifier");
		
		
	};// @lock

	bNew.click = function bNew_click (event)// @startlock
	{// @endlock
		var CLogin, CDateEntree, CFonction;
		
		sources.component1_matieres.addNewElement();
		
		$$('component1_bUpdate').hide();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_cType').hide();
		$$('component1_cbMat').show();
		$$('component1_bNew').hide();
		$$('component1_ListMat').disable();
		$$('component1_cCode').setReadOnly(false);
		$$('component1_cNom').setReadOnly(false);
		$$('component1_cbActif').hide();
		$$('component1_cType').hide();
		$$('component1_cCode').getLabel().setTextColor("red");
		$$('component1_cNom').getLabel().setTextColor("red");
		$$('component1_cCode').focus();
		$$('component1_cAction').setValue("Créer");
					
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cNom", "change", cNom.change, "WAF");
	WAF.addListener(this.id + "_cCode", "change", cCode.change, "WAF");
	WAF.addListener(this.id + "_fNom", "keyup", fNom.keyup, "WAF");
	WAF.addListener(this.id + "_fCode", "keyup", fCode.keyup, "WAF");
	WAF.addListener(this.id + "_cNom", "blur", cNom.blur, "WAF");
	WAF.addListener(this.id + "_cCode", "blur", cCode.blur, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
