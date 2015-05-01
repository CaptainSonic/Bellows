
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_Bellows';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();
	$$("component1_ListBell").setRowHeight(22);

	// @region namespaceDeclaration// @startlock
	var fCode = {};	// @textField
	var fRef = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	fCode.keyup = function fCode_keyup (event)// @startlock
	{// @endlock
		$$('component1_fRef').setValue(null);
		WAF.sources.component1_soufflet.query("Code = :1", event.currentTarget.value + "*");
	};// @lock

	fRef.keyup = function fRef_keyup (event)// @startlock
	{// @endlock
		$$('component1_fCode').setValue(null);
		WAF.sources.component1_soufflet.query("Reference = :1", event.currentTarget.value + "*");
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_fCode", "keyup", fCode.keyup, "WAF");
	WAF.addListener(this.id + "_fRef", "keyup", fRef.keyup, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
