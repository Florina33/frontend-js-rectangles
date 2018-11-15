function rectRight (rect) {
	return rect.width > 0 ? rect.left + rect.width : 0;
}

function rectBottom (rect) {
	return rect.height > 0 ? rect.top + rect.height : 0;
}

export function areIntersected (rect1, rect2) {
	return (rect1.left < rectRight(rect2) && rectRight(rect1) > rect2.left
			&& rect1.top < rectBottom(rect2) && rectBottom(rect1) > rect2.top);
}

export function filterVisible (rect, rectArray) {
	return rectArray.filter(function (rectItem) {
		return areIntersected(rect, rectItem);
	});
}