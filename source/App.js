enyo.kind({
	name: "App",
	fit: true,
    noStretch: true,
    kind:"Panels",
    classes:"app-panels, onyx",
    arrangerKind: "CollapsingArranger",
	components: [ {name: "Panel1", components: [ {kind:"onyx.MoreToolbar", components: [ {kind: "onyx.Grabber",}, {content: "Panel1"}, {kind:"onyx.Button", content:"hi"}],}],},
     {name: "Panel2", components: [ {kind:"onyx.Toolbar", components: [ {kind: "onyx.Grabber",}, {content: "Panel2"}],}],},
     {name: "Panel3", components: [ {kind:"onyx.MoreToolbar", components: [ {kind: "onyx.Grabber", noStretch: true, }, {content: "Panel3"}],}],}],
    

});
