!function e(t,n,r){function a(o,s){if(!n[o]){if(!t[o]){var i="function"==typeof require&&require;if(!s&&i)return i(o,!0);if(u)return u(o,!0);var d=new Error("Cannot find module '"+o+"'");throw d.code="MODULE_NOT_FOUND",d}var c=n[o]={exports:{}};t[o][0].call(c.exports,function(e){var n=t[o][1][e];return a(n||e)},c,c.exports,e,t,n,r)}return n[o].exports}for(var u="function"==typeof require&&require,o=0;o<r.length;o++)a(r[o]);return a}({1:[function(e,t,n){"use strict";window.onload=function(){var e=document.getElementById("button"),t=document.getElementById("inputString"),n=document.getElementById("output"),r=document.getElementById("textOutput");e.addEventListener("click",function(){var e=t.value,a=new Worker("worker.js");a.postMessage(e),a.onmessage=function(e){n.innerHTML=e.data},r.checked=!0})}},{}],2:[function(e,t,n){"use strict";function r(e){for(var t=e.split(""),n=[],r="",a=0;a<t.length;a++)" "!==t[a]&&"\r"!==t[a]&&"\t"!==t[a]&&"\v"!==t[a]&&"\n"!==t[a]&&"\f"!==t[a]&&(r+=t[a],n.push(t[a]));return r}onmessage=function(e){var t=r(e.data);/^\{(((\"([a-zA-Z_]+_*\d*[a-zA-Z]*)+\"\:)+)((\d*)|(true|false)|((\"([^\"]*)\"))|((\[((\"[^\"]*\")|\d*|(true|false)))(((,\"[^\"]*\")|(,\d+)|,(true|false)))*\])|(\{\}))?((,(\"([a-zA-Z_]+_*\d*[a-zA-Z]*)+\"\:){1}((\d+)|(true|false)+|((\"([^\"]*)\"))+|((\[((\"[^\"]*\")|\d*|(true|false)))(((,\"[^\"]*\")|(,\d+)|,(true|false)))*\])|(\{\}))+)*)?)?\}/g.test(t)?postMessage("The input JSON string is valid JSON \r\r\r "+t):postMessage("The input JSON string is invalid.\n\nProperties and values must be surrounded by quotes. \n\nThe colon (:) must separate each property from its value.\n\nThe string must start and end with curly brackets.\n\nValid values are either, boolean(true or false), number,\n\na normal character string, an array of these values or an empty\n\njson string.\n\nA comma must be placed at the end of each property/value pair\n\nexcept for the LAST property/value pair in the string.")}},{}]},{},[1,2]);