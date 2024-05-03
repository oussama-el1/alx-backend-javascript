/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/* unused harmony export renderTable */
var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'Nairobi',
};
var student2 = {
    firstName: 'Alex',
    lastName: 'Sanchez',
    age: 29,
    location: 'Cairo',
};
var studentsList = [
    student1,
    student2,
];
var renderTable = function (studentsList) {
    // create table tag
    var table = document.createElement('table');
    var headRow = document.createElement('tr');
    table.insertAdjacentElement('beforeend', headRow);
    // insert headers
    headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
    headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');
    for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
        var student = studentsList_1[_i];
        var studentRow = document.createElement('tr');
        studentRow.insertAdjacentHTML('beforeend', "<td>".concat(student.firstName, "</td>"));
        studentRow.insertAdjacentHTML('beforeend', "<td>".concat(student.location, "</td>"));
        table.insertAdjacentElement('beforeend', studentRow);
    }
    document.body.insertAdjacentElement('beforeend', table);
};
renderTable(studentsList);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7Ozs7QUNPQSxJQUFNLFFBQVEsR0FBWTtJQUN0QixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLFNBQVM7Q0FDdEIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFZO0lBQ3RCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLE9BQU87Q0FDcEIsQ0FBQztBQUVGLElBQU0sWUFBWSxHQUFtQjtJQUNqQyxRQUFRO0lBQ1IsUUFBUTtDQUNYLENBQUM7QUFFSyxJQUFNLFdBQVcsR0FBRyxVQUFDLFlBQTRCO0lBQ3BELG1CQUFtQjtJQUNuQixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsS0FBSyxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVsRCxpQkFBaUI7SUFDakIsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlELE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUU3RCxLQUFzQixVQUFZLEVBQVosNkJBQVksRUFBWiwwQkFBWSxFQUFaLElBQVksRUFBRTtRQUEvQixJQUFNLE9BQU87UUFDZCxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUMvQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLGNBQU8sT0FBTyxDQUFDLFNBQVMsVUFBTyxDQUFDLENBQUM7UUFDNUUsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxjQUFPLE9BQU8sQ0FBQyxRQUFRLFVBQU8sQ0FBQyxDQUFDO1FBQzNFLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDeEQ7SUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBRUQsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiZXhwb3J0IGludGVyZmFjZSBTdHVkZW50IHtcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuICAgIGFnZTogbnVtYmVyO1xyXG4gICAgbG9jYXRpb246IHN0cmluZztcclxufVxyXG5cclxuY29uc3Qgc3R1ZGVudDE6IFN0dWRlbnQgPSB7XHJcbiAgICBmaXJzdE5hbWU6ICdKb2huJyxcclxuICAgIGxhc3ROYW1lOiAnRG9lJyxcclxuICAgIGFnZTogMjUsXHJcbiAgICBsb2NhdGlvbjogJ05haXJvYmknLFxyXG59O1xyXG5cclxuY29uc3Qgc3R1ZGVudDI6IFN0dWRlbnQgPSB7XHJcbiAgICBmaXJzdE5hbWU6ICdBbGV4JyxcclxuICAgIGxhc3ROYW1lOiAnU2FuY2hleicsXHJcbiAgICBhZ2U6IDI5LFxyXG4gICAgbG9jYXRpb246ICdDYWlybycsXHJcbn07XHJcblxyXG5jb25zdCBzdHVkZW50c0xpc3Q6IEFycmF5PFN0dWRlbnQ+ID0gW1xyXG4gICAgc3R1ZGVudDEsXHJcbiAgICBzdHVkZW50MixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJUYWJsZSA9IChzdHVkZW50c0xpc3Q6IEFycmF5PFN0dWRlbnQ+KTogdm9pZCA9PiAge1xyXG4gICAgLy8gY3JlYXRlIHRhYmxlIHRhZ1xyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICB0YWJsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGhlYWRSb3cpO1xyXG5cclxuICAgIC8vIGluc2VydCBoZWFkZXJzXHJcbiAgICBoZWFkUm93Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJzx0aD5GaXJzdE5hbWU8L3RoPicpO1xyXG4gICAgaGVhZFJvdy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICc8dGg+TG9jYXRpb248L3RoPicpO1xyXG5cclxuICAgIGZvciAoY29uc3Qgc3R1ZGVudCBvZiBzdHVkZW50c0xpc3QpIHtcclxuICAgICAgICBjb25zdCBzdHVkZW50Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxyXG4gICAgICAgIHN0dWRlbnRSb3cuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPHRkPiR7c3R1ZGVudC5maXJzdE5hbWV9PC90ZD5gKTtcclxuICAgICAgICBzdHVkZW50Um93Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDx0ZD4ke3N0dWRlbnQubG9jYXRpb259PC90ZD5gKTtcclxuICAgICAgICB0YWJsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIHN0dWRlbnRSb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCB0YWJsZSk7XHJcbn1cclxuXHJcbnJlbmRlclRhYmxlKHN0dWRlbnRzTGlzdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9