/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Classes/ToDo.ts":
/*!*****************************!*\
  !*** ./src/Classes/ToDo.ts ***!
  \*****************************/
/*! exports provided: ToDo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDo\", function() { return ToDo; });\nclass ToDo {\r\n    constructor(ul, todoData, li) {\r\n        this.ul = ul;\r\n        this.todoData = todoData;\r\n        this.li = li;\r\n    }\r\n    addTodo() {\r\n        let input = document.createElement('input');\r\n        input.disabled = true;\r\n        input.value = this.todoData;\r\n        this.li.append(input);\r\n        let edit = document.createElement('button');\r\n        edit.classList.add('edit-button');\r\n        edit.innerText = 'Edit';\r\n        this.li.appendChild(edit);\r\n        let del = document.createElement('button');\r\n        del.classList.add('delete-button');\r\n        del.innerText = 'Delete';\r\n        this.li.appendChild(del);\r\n        this.ul.append(this.li);\r\n        edit.addEventListener('click', e => this.editTodo(input));\r\n        del.addEventListener('click', e => this.deleteTodo());\r\n    }\r\n    editTodo(input) {\r\n        input.disabled = false;\r\n        let save = document.createElement('button');\r\n        save.classList.add('save-changes');\r\n        save.innerText = 'Save';\r\n        this.li.appendChild(save);\r\n        save.addEventListener('click', e => {\r\n            this.todoData = input.value;\r\n            this.li.removeChild(save);\r\n            input.disabled = true;\r\n        });\r\n    }\r\n    deleteTodo() {\r\n        if (confirm('Remove ToDo?'))\r\n            this.ul.removeChild(this.li);\r\n    }\r\n}\r\n;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ2xhc3Nlcy9Ub0RvLnRzPzliMjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLE1BQU0sSUFBSTtJQUViLFlBQ1ksRUFBb0IsRUFDcEIsUUFBZ0IsRUFDaEIsRUFBaUI7UUFGakIsT0FBRSxHQUFGLEVBQUUsQ0FBa0I7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixPQUFFLEdBQUYsRUFBRSxDQUFlO0lBQ3pCLENBQUM7SUFDTCxPQUFPO1FBQ0gsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0QixLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsUUFBUSxDQUFDLEtBQXVCO1FBQzVCLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBQ0QsVUFBVTtRQUNOLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQztZQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUVKO0FBQUEsQ0FBQyIsImZpbGUiOiIuL3NyYy9DbGFzc2VzL1RvRG8udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVG9EbyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSB1bDogSFRNTFVMaXN0RWxlbWVudCxcclxuICAgICAgICBwcml2YXRlIHRvZG9EYXRhOiBzdHJpbmcsXHJcbiAgICAgICAgcHJpdmF0ZSBsaTogSFRNTExJRWxlbWVudFxyXG4gICAgKSB7IH1cclxuICAgIGFkZFRvZG8oKSB7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLnRvZG9EYXRhO1xyXG4gICAgICAgIHRoaXMubGkuYXBwZW5kKGlucHV0KTtcclxuICAgICAgICBsZXQgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdC1idXR0b24nKTtcclxuICAgICAgICBlZGl0LmlubmVyVGV4dCA9ICdFZGl0JztcclxuICAgICAgICB0aGlzLmxpLmFwcGVuZENoaWxkKGVkaXQpO1xyXG4gICAgICAgIGxldCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkZWwuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xyXG4gICAgICAgIGRlbC5pbm5lclRleHQgPSAnRGVsZXRlJztcclxuICAgICAgICB0aGlzLmxpLmFwcGVuZENoaWxkKGRlbCk7XHJcbiAgICAgICAgdGhpcy51bC5hcHBlbmQodGhpcy5saSk7XHJcbiAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5lZGl0VG9kbyhpbnB1dCkpO1xyXG4gICAgICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5kZWxldGVUb2RvKCkpO1xyXG4gICAgfVxyXG4gICAgZWRpdFRvZG8oaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBzYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgc2F2ZS5jbGFzc0xpc3QuYWRkKCdzYXZlLWNoYW5nZXMnKTtcclxuICAgICAgICBzYXZlLmlubmVyVGV4dCA9ICdTYXZlJztcclxuICAgICAgICB0aGlzLmxpLmFwcGVuZENoaWxkKHNhdmUpO1xyXG4gICAgICAgIHNhdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b2RvRGF0YSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmxpLnJlbW92ZUNoaWxkKHNhdmUpO1xyXG4gICAgICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgZGVsZXRlVG9kbygpIHtcclxuICAgICAgICBpZiAoY29uZmlybSgnUmVtb3ZlIFRvRG8/JykpXHJcbiAgICAgICAgICAgIHRoaXMudWwucmVtb3ZlQ2hpbGQodGhpcy5saSk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Classes/ToDo.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Classes_ToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes/ToDo */ \"./src/Classes/ToDo.ts\");\n\r\nlet containerUL = document.querySelector('.itemList');\r\nlet addButton = document.querySelector('.add');\r\nlet todoData = document.querySelector('.input');\r\naddButton.addEventListener('click', e => {\r\n    if (todoData.value !== '') {\r\n        let todo = document.createElement('li');\r\n        todo.classList.add('todo');\r\n        new _Classes_ToDo__WEBPACK_IMPORTED_MODULE_0__[\"ToDo\"](containerUL, todoData.value, todo).addTodo();\r\n    }\r\n    else\r\n        alert(\"Please specify the task first!\");\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQW9DO0FBRXBDLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFxQixDQUFDO0FBQzFFLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFzQixDQUFDO0FBQ3BFLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFxQixDQUFDO0FBRXBFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUU7SUFDcEMsSUFBSSxRQUFRLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtRQUN2QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLElBQUksa0RBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN6RDs7UUFFRyxLQUFLLENBQUMsZ0NBQWdDLENBQUM7QUFFL0MsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RvRG99IGZyb20gJy4vQ2xhc3Nlcy9Ub0RvJztcclxuXHJcbmxldCBjb250YWluZXJVTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtTGlzdCcpIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XHJcbmxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmxldCB0b2RvRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGlmICh0b2RvRGF0YS52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICBsZXQgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XHJcbiAgICAgICAgbmV3IFRvRG8oY29udGFpbmVyVUwsIHRvZG9EYXRhLnZhbHVlLCB0b2RvKS5hZGRUb2RvKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgYWxlcnQoXCJQbGVhc2Ugc3BlY2lmeSB0aGUgdGFzayBmaXJzdCFcIilcclxuXHJcbn0pO1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ });