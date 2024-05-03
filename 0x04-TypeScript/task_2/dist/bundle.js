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
/* unused harmony exports Director, Teacher, createEmployee */
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());

var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());

function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}

    console.log(createEmployee(200))
    console.log(createEmployee(1000));
    console.log(createEmployee('$500'));

/******/ })()
;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7Ozs7QUNZQTtJQUFBO0lBWUEsQ0FBQztJQVhHLCtCQUFZLEdBQVo7UUFDSSxPQUFPLG1CQUFtQixDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksT0FBUSx3QkFBd0IsQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0ksT0FBTywyQkFBMkIsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUM7O0FBR0Q7SUFBQTtJQVlBLENBQUM7SUFYRyw4QkFBWSxHQUFaO1FBQ0ksT0FBTyx1QkFBdUIsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNJLE9BQVEscUJBQXFCLENBQUM7SUFDbEMsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNJLE9BQU8saUJBQWlCLENBQUM7SUFDN0IsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDOztBQUdNLFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQ2xELElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDNUMsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3hCO1NBQU07UUFDSCxPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7S0FDekI7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiZXhwb3J0IGludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XHJcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nLFxyXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nLFxyXG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XHJcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nLFxyXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nLFxyXG4gICAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xyXG4gICAgd29ya0Zyb21Ib21lKCkge1xyXG4gICAgICAgIHJldHVybiAnV29ya2luZyBmcm9tIGhvbWUnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvZmZlZUJyZWFrKCkge1xyXG4gICAgICAgIHJldHVybiAgJ0dldHRpbmcgYSBjb2ZmZWUgYnJlYWsnO1xyXG4gICAgfVxyXG5cclxuICAgIHdvcmtEaXJlY3RvclRhc2tzKCkge1xyXG4gICAgICAgIHJldHVybiAnR2V0dGluZyB0byBkaXJlY3RvciB0YXNrcyc7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xyXG4gICAgd29ya0Zyb21Ib21lKCkge1xyXG4gICAgICAgIHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2ZmZWVCcmVhaygpIHtcclxuICAgICAgICByZXR1cm4gICdDYW5ub3QgaGF2ZSBhIGJyZWFrJztcclxuICAgIH1cclxuXHJcbiAgICB3b3JrVGVhY2hlclRhc2tzKCkge1xyXG4gICAgICAgIHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IFRlYWNoZXIgfCBEaXJlY3RvciB7XHJcbiAgICBpZiAodHlwZW9mIHNhbGFyeSA9PT0gJ251bWJlcicgJiYgc2FsYXJ5IDwgNTAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUZWFjaGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGlyZWN0b3IoKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==