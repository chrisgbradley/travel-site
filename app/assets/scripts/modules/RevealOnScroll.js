import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {

	constructor(items, offset) {
		this.itemsToReveal = items;
		this.offset = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item")
	}

	createWaypoints() {
		var offset = this.offset;
		this.itemsToReveal.each(function() {
			var item = this;
			new Waypoint({
				element: item,
				handler: function(direction) {
					$(item).addClass("reveal-item--is-visible");
				},
				offset: offset
			})
		})
	}
}

export default RevealOnScroll;