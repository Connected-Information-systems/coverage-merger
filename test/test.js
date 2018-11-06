const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const coverageMerger = require('../lib/merger');


describe('coverage-merger', () => {
    const input = readJson('input/input.json');

    describe('mergeByFile', () =>{
        it('should merge results which are results for the same file.', () => {
            const result = coverageMerger.mergeByFile(input);
            const expected = readJson('expected/mergeByFile.json');
            expect(result).to.deep.equal(expected);
        });
    });

    describe('merge', () =>{
        it('should merge all results', () => {
            const result = coverageMerger.merge(input);
            const expected = readJson('expected/merge.json');
            expect(result).to.deep.equal(expected);
        });
    });
});


function readJson(file){
    const content = fs.readFileSync(path.join(__dirname, file), 'utf-8');
    return JSON.parse(content);
}
