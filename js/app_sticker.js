(function () {
	'use strict';

	var draggedEl,
		onDragStart,
		onDrag,
		onDragEnd,
		grabPointY,
		grabPointX;

	onDragStart = function (ev) {
	var boundingClientReact;
	if (ev.target.className.indexOf('bar') === -1) {
		return;
	}

	draggedEl = this;

	boundingClientReact = draggedEl.getBoundingClientReact();

	grabPointY = boundingClientReact.top - ev.clientY;
	grabPointX = boundingClientReact.left - ev.clientX;

	};

	onDrag = function (ev) {
		if (!draggedEl) {
			return;
		}

		var posX = ev.clientX + grabPointX,
			posY = ev.clientY + grabPointY;

		draggedEl.style.transform = "translateX(" + posX + "px) translateY(" + posY + "px)";

		};

		onDragEnd = function () {
		draggedEl = null;
		grabPointY = null;
		grabPointX = null;
		};

		document.addEventListener('mousemove', onDrag, false);
		document.addEventListener('mouseup', onDragEnd, false);
		document.querySelector('.sticker').addEventListener('mousedown', onDragStart, false);

	})();