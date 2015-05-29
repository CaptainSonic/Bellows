
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_Clients';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	$$("cchg").hide();
	$$("cQuick").hide();
	$$("component1_ListClients").setRowHeight(22);
	// @region namespaceDeclaration// @startlock
	var cNom = {};	// @textField
	var cRef = {};	// @textField
	var fRef = {};	// @textField
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	var bNew = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	cNom.change = function cNom_change (event)// @startlock
	{// @endlock
		var CRef, CNom;
		CRef = $$('component1_cRef').getValue();
		CNom = $$('component1_cNom').getValue();
		
		if ((CRef.length > 2) && (CNom.length > 1)) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	cRef.change = function cRef_change (event)// @startlock
	{// @endlock
		var CRef, CNom;
		CRef = $$('component1_cRef').getValue();
		CNom = $$('component1_cNom').getValue();
		
		if ((CRef.length > 2) && (CNom.length > 1)) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	cRef.blur = function cRef_blur (event)// @startlock
	{// @endlock
		var CodeEntry, NbSamCode, vAction;
		
		CodeEntry = event.currentTarget.value;
		vAction = $$('component1_cAction').getValue();
		if (vAction === "Créer") {
			ds.Clients.query("Reference=:1", { 
				onSuccess:function(event) {
					var myCollection = event.entityCollection;
					NbSamCode = myCollection.length;
					if (NbSamCode > 0) {
						alert("Cette référence client (" + CodeEntry +") est déjà utilisée. Merci de saisir une référence client différente.");	
						$$('component1_cRef').setValue(null);
						//$$('component1_clogin').focus(true);
						$$('component1_bSave').disable();
						}
					}, params:[CodeEntry] 
				});
		}
	};// @lock

	fRef.keyup = function fRef_keyup (event)// @startlock
	{// @endlock
		WAF.sources.component1_clients.query("Reference = :1", event.currentTarget.value + "*");
	};// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		$$('component1_cRef').getLabel().setTextColor("black");
		$$('component1_cNom').getLabel().setTextColor("black");
		$$('component1_cAction').setValue("-");
		$$('component1').loadComponent("/Gest_Clients.waComponent");
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		var vActif;
		
		$$('component1_bUpdate').show();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_bNew').show();
		$$('component1_ListClients').enable();
		$$('component1_cRef').setReadOnly(true);
		$$('component1_cNom').setReadOnly(true);
		$$('component1_ListClients').setReadOnly(true);
		$$('component1_cbActif').hide();
		$$('component1_cRef').getLabel().setTextColor("black");
		$$('component1_cNom').getLabel().setTextColor("black");
		$$('component1_cAction').setValue("-");

		sources.component1_clients.save();
		
				
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
		$$('component1_ListClients').disable();
		$$('component1_bSave').enable();
		$$('component1_cNom').setReadOnly(false);
		
		$$('component1_cAction').setValue("Modifier");
		
		
	};// @lock

	bNew.click = function bNew_click (event)// @startlock
	{// @endlock
		var CLogin, CDateEntree, CFonction;
		
		sources.component1_clients.addNewElement();
		
		$$('component1_bUpdate').hide();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_bNew').hide();
		$$('component1_ListClients').disable();
		$$('component1_cRef').setReadOnly(false);
		$$('component1_cNom').setReadOnly(false);
		$$('component1_cbActif').hide();
		$$('component1_cRef').getLabel().setTextColor("red");
		$$('component1_cNom').getLabel().setTextColor("red");
		$$('component1_cRef').focus();
		$$('component1_cAction').setValue("Créer");
					
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cNom", "change", cNom.change, "WAF");
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
