/*
 * @purpose : Validate user input combinations
 * users must input two valid planet names, and select transportation.
 * @author : Wesley Hunt
 * @version : 1.0
 */
"use strict";

import { PlanetInputs, SelectedTransport, PlanetClicker, PlanetData, TransportationData } from "../src/reducers/planet";
import { SET_INPUT_TEXT, SET_TRANSPORT, SET_PLANET_DATA, SET_TRANSPORTATION_DATA } from "../src/actions/planet";

var chai = require('chai')

var planetNames = ["sun", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]


describe('Planet Input ', () => {
    it("Planet inputs initial state.", (done) => {
        chai.expect(PlanetInputs(undefined, {})).to.deep.equal({'leftInput' : '', 'rightInput' : ''})
        done();

    })
    it("Validate planet writes.", (done) => {
        chai.expect(PlanetInputs({}, SET_INPUT_TEXT("leftInput", "test left"))).to.deep.equal({"leftInput" : "test left"})
        chai.expect(PlanetInputs({}, SET_INPUT_TEXT("rightInput", "test right"))).to.deep.equal({"rightInput" : "test right"})
        done()
    })
    it("Validate animal input", (done) => {
        chai.expect(SelectedTransport({}, SET_TRANSPORT("Cheetah"))).to.equal("Cheetah")
        done()
    })
    it("Setting planet data.", (done) => {
        let planetData = {
            Venus : {
                size : 1,
                distance : 1
            },
            Earth : { 
                size : 2, 
                distane : 2
            }
        }
        chai.expect(PlanetData({}, SET_PLANET_DATA(planetData))).to.deep.equal(planetData)
        done()
    })
    it("Setting transportation data.", (done) => {
        let transportData = {
            Snail : {
                speed : 1,
            },
            Cheetah : { 
                speed : 2, 
            }
        }

        chai.expect(TransportationData({}, SET_TRANSPORTATION_DATA(transportData))).to.deep.equal(transportData);
        done()
    })
})
