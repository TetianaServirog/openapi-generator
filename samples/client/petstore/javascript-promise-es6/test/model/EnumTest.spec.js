/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenApiPetstore);
  }
}(this, function(expect, OpenApiPetstore) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenApiPetstore.EnumTest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EnumTest', function() {
    it('should create an instance of EnumTest', function() {
      // uncomment below and update the code to test EnumTest
      //var instane = new OpenApiPetstore.EnumTest();
      //expect(instance).to.be.a(OpenApiPetstore.EnumTest);
    });

    it('should have the property enumString (base name: "enum_string")', function() {
      // uncomment below and update the code to test the property enumString
      //var instane = new OpenApiPetstore.EnumTest();
      //expect(instance).to.be();
    });

    it('should have the property enumStringRequired (base name: "enum_string_required")', function() {
      // uncomment below and update the code to test the property enumStringRequired
      //var instane = new OpenApiPetstore.EnumTest();
      //expect(instance).to.be();
    });

    it('should have the property enumInteger (base name: "enum_integer")', function() {
      // uncomment below and update the code to test the property enumInteger
      //var instane = new OpenApiPetstore.EnumTest();
      //expect(instance).to.be();
    });

    it('should have the property enumNumber (base name: "enum_number")', function() {
      // uncomment below and update the code to test the property enumNumber
      //var instane = new OpenApiPetstore.EnumTest();
      //expect(instance).to.be();
    });

    it('should have the property outerEnum (base name: "outerEnum")', function() {
      // uncomment below and update the code to test the property outerEnum
      //var instane = new OpenApiPetstore.EnumTest();
      //expect(instance).to.be();
    });

    it('should have the property outerEnumInteger (base name: "outerEnumInteger")', function() {
      // uncomment below and update the code to test the property outerEnumInteger
      //var instane = new OpenApiPetstore.EnumTest();
      //expect(instance).to.be();
    });

    it('should have the property outerEnumDefaultValue (base name: "outerEnumDefaultValue")', function() {
      // uncomment below and update the code to test the property outerEnumDefaultValue
      //var instane = new OpenApiPetstore.EnumTest();
      //expect(instance).to.be();
    });

    it('should have the property outerEnumIntegerDefaultValue (base name: "outerEnumIntegerDefaultValue")', function() {
      // uncomment below and update the code to test the property outerEnumIntegerDefaultValue
      //var instane = new OpenApiPetstore.EnumTest();
      //expect(instance).to.be();
    });

  });

}));
