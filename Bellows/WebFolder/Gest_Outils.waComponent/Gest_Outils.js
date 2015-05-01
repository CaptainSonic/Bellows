
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_Outils';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	$$("cchg").hide();
	$$("component1_ListOutils").setRowHeight(22);
	$$("component1_ListBell").setRowHeight(20);
	// @region namespaceDeclaration// @startlock
	var cRef = {};	// @textField
	var fRef = {};	// @textField
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	var bNew = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	cRef.change = function cRef_change (event)// @startlock
	{// @endlock
		var CRef;
		CRef = $$('component1_cRef').getValue();
		
		
		if (CRef.length > 2) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	cRef.blur = function cRef_blur (event)// @startlock
	{// @endlock
		var RefEntry, NbSamRef, vAction;
		
		RefEntry = event.currentTarget.value;
		vAction = $$('component1_cAction').getValue();
		if (vAction === "Créer") {
			ds.Outils.query("Référence=:1", { 
				onSuccess:function(event) {
					var myCollection = event.entityCollection;
					NbSamRef = myCollection.length;
					if (NbSamRef > 0) {
						alert("Cette référence d'outil (" + RefEntry +") est déjà utilisée. Merci de saisir une référence d'outil différente");	
						$$('component1_cRef').setValue(null);
						//$$('component1_clogin').focus(true);
						$$('component1_bSave').disable();
						}
					}, params:[RefEntry] 
				});
		}
	};// @lock

	fRef.keyup = function fRef_keyup (event)// @startlock
	{// @endlock

		WAF.sources.component1_outils.query("Référence = :1", event.currentTarget.value + "*");
	};// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		$$('component1_cRef').getLabel().setTextColor("black");
		$$('component1_cAction').setValue("-");
		$$('component1').loadComponent("/Gest_Outils.waComponent");
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		var vActif;
		
		$$('component1_bUpdate').show();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_bNew').show();
		$$('component1_ListOutils').enable();
		$$('component1_ListOutils').setReadOnly(true);
		$$('component1_ListBell').hide();
		$$('component1_cRef').setReadOnly(true);
		$$('component1_cDiamInt').setReadOnly(true);
		$$('component1_cEpaisseur').setReadOnly(true);
		$$('component1_cProf').setReadOnly(true);
		$$('component1_cbActif').hide();
		$$('component1_cRef').getLabel().setTextColor("black");
		$$('component1_cAction').setValue("-");

		sources.component1_outils.save();
		
				
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
		$$('component1_ListOutils').disable();
		$$('component1_ListBell').show();
		$$('component1_cRef').setReadOnly(true);
		$$('component1_cDiamInt').setReadOnly(false);
		$$('component1_cEpaisseur').setReadOnly(false);
		$$('component1_cProf').setReadOnly(false);
		$$('component1_bSave').enable();
		$$('component1_cAction').setValue("Modifier");
		
		
	};// @lock

	bNew.click = function bNew_click (event)// @startlock
	{// @endlock
		var CLogin, CDateEntree, CFonction;
		
		sources.component1_outils.addNewElement();
		
		$$('component1_bUpdate').hide();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_bNew').hide();
		$$('component1_ListOutils').disable();
		$$('component1_cRef').setReadOnly(false);
		$$('component1_cDiamInt').setReadOnly(false);
		$$('component1_cEpaisseur').setReadOnly(false);
		$$('component1_cProf').setReadOnly(false);
		$$('component1_cbActif').hide();
		$$('component1_cRef').getLabel().setTextColor("red");
		$$('component1_cRef').focus();
		$$('component1_cAction').setValue("Créer");
					
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cRef", "change", cRef.change, "WAF");
	WAF.addListener(this.id + "_cRef", "blur", cRef.blur, "WAF");
	WAF.addListener(this.id + "_fRef", "keyup", fRef.keyup, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
