(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Object(){
  this.attribute = attribute;
}

Object.prototype.test = function () {
  alert("Template");

};

exports.objectModule = Object;
//exports.namedoesntmatter = nameofObject

},{}],2:[function(require,module,exports){
$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

var Object = require('./../js/template.js').objectModule;
//var namedoesntmatter = require(path).namehastomatchbackendfile

$(document).ready(function() {
  event.preventDefault();
});

},{"./../js/template.js":1}]},{},[2]);
